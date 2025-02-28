/**
 * Copyright 2020 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {Protocol} from 'devtools-protocol';

import {
  ContinueRequestOverrides,
  ErrorCode,
  headersArray,
  HTTPRequest as BaseHTTPRequest,
  InterceptResolutionAction,
  InterceptResolutionState,
  ResourceType,
  ResponseForRequest,
  STATUS_TEXTS,
} from '../api/HTTPRequest.js';
import {HTTPResponse} from '../api/HTTPResponse.js';
import {assert} from '../util/assert.js';

import {CDPSession} from './Connection.js';
import {ProtocolError} from './Errors.js';
import {Frame} from './Frame.js';
import {debugError, isString} from './util.js';

/**
 * @internal
 */
export class HTTPRequest extends BaseHTTPRequest {
  override _requestId: string;
  override _interceptionId: string | undefined;
  override _failureText: string | null = null;
  override _response: HTTPResponse | null = null;
  override _fromMemoryCache = false;
  override _redirectChain: HTTPRequest[];

  #client: CDPSession;
  #isNavigationRequest: boolean;
  #allowInterception: boolean;
  #interceptionHandled = false;
  #url: string;
  #resourceType: ResourceType;

  #method: string;
  #postData?: string;
  #headers: Record<string, string> = {};
  #frame: Frame | null;
  #continueRequestOverrides: ContinueRequestOverrides;
  #responseForRequest: Partial<ResponseForRequest> | null = null;
  #abortErrorReason: Protocol.Network.ErrorReason | null = null;
  #interceptResolutionState: InterceptResolutionState = {
    action: InterceptResolutionAction.None,
  };
  #interceptHandlers: Array<() => void | PromiseLike<any>>;
  #initiator: Protocol.Network.Initiator;

  override get client(): CDPSession {
    return this.#client;
  }

  constructor(
    client: CDPSession,
    frame: Frame | null,
    interceptionId: string | undefined,
    allowInterception: boolean,
    event: Protocol.Network.RequestWillBeSentEvent,
    redirectChain: HTTPRequest[]
  ) {
    super();
    this.#client = client;
    this._requestId = event.requestId;
    this.#isNavigationRequest =
      event.requestId === event.loaderId && event.type === 'Document';
    this._interceptionId = interceptionId;
    this.#allowInterception = allowInterception;
    this.#url = event.request.url;
    this.#resourceType = (event.type || 'other').toLowerCase() as ResourceType;
    this.#method = event.request.method;
    this.#postData = event.request.postData;
    this.#frame = frame;
    this._redirectChain = redirectChain;
    this.#continueRequestOverrides = {};
    this.#interceptHandlers = [];
    this.#initiator = event.initiator;

    for (const [key, value] of Object.entries(event.request.headers)) {
      this.#headers[key.toLowerCase()] = value;
    }
  }

  override url(): string {
    return this.#url;
  }

  override continueRequestOverrides(): ContinueRequestOverrides {
    assert(this.#allowInterception, 'Request Interception is not enabled!');
    return this.#continueRequestOverrides;
  }

  override responseForRequest(): Partial<ResponseForRequest> | null {
    assert(this.#allowInterception, 'Request Interception is not enabled!');
    return this.#responseForRequest;
  }

  override abortErrorReason(): Protocol.Network.ErrorReason | null {
    assert(this.#allowInterception, 'Request Interception is not enabled!');
    return this.#abortErrorReason;
  }

  override interceptResolutionState(): InterceptResolutionState {
    if (!this.#allowInterception) {
      return {action: InterceptResolutionAction.Disabled};
    }
    if (this.#interceptionHandled) {
      return {action: InterceptResolutionAction.AlreadyHandled};
    }
    return {...this.#interceptResolutionState};
  }

  override isInterceptResolutionHandled(): boolean {
    return this.#interceptionHandled;
  }

  override enqueueInterceptAction(
    pendingHandler: () => void | PromiseLike<unknown>
  ): void {
    this.#interceptHandlers.push(pendingHandler);
  }

  override async finalizeInterceptions(): Promise<void> {
    await this.#interceptHandlers.reduce((promiseChain, interceptAction) => {
      return promiseChain.then(interceptAction);
    }, Promise.resolve());
    const {action} = this.interceptResolutionState();
    switch (action) {
      case 'abort':
        return this.#abort(this.#abortErrorReason);
      case 'respond':
        if (this.#responseForRequest === null) {
          throw new Error('Response is missing for the interception');
        }
        return this.#respond(this.#responseForRequest);
      case 'continue':
        return this.#continue(this.#continueRequestOverrides);
    }
  }

  override resourceType(): ResourceType {
    return this.#resourceType;
  }

  override method(): string {
    return this.#method;
  }

  override postData(): string | undefined {
    return this.#postData;
  }

  override headers(): Record<string, string> {
    return this.#headers;
  }

  override response(): HTTPResponse | null {
    return this._response;
  }

  override frame(): Frame | null {
    return this.#frame;
  }

  override isNavigationRequest(): boolean {
    return this.#isNavigationRequest;
  }

  override initiator(): Protocol.Network.Initiator {
    return this.#initiator;
  }

  override redirectChain(): HTTPRequest[] {
    return this._redirectChain.slice();
  }

  override failure(): {errorText: string} | null {
    if (!this._failureText) {
      return null;
    }
    return {
      errorText: this._failureText,
    };
  }

  override async continue(
    overrides: ContinueRequestOverrides = {},
    priority?: number
  ): Promise<void> {
    // Request interception is not supported for data: urls.
    if (this.#url.startsWith('data:')) {
      return;
    }
    assert(this.#allowInterception, 'Request Interception is not enabled!');
    assert(!this.#interceptionHandled, 'Request is already handled!');
    if (priority === undefined) {
      return this.#continue(overrides);
    }
    this.#continueRequestOverrides = overrides;
    if (
      this.#interceptResolutionState.priority === undefined ||
      priority > this.#interceptResolutionState.priority
    ) {
      this.#interceptResolutionState = {
        action: InterceptResolutionAction.Continue,
        priority,
      };
      return;
    }
    if (priority === this.#interceptResolutionState.priority) {
      if (
        this.#interceptResolutionState.action === 'abort' ||
        this.#interceptResolutionState.action === 'respond'
      ) {
        return;
      }
      this.#interceptResolutionState.action =
        InterceptResolutionAction.Continue;
    }
    return;
  }

  async #continue(overrides: ContinueRequestOverrides = {}): Promise<void> {
    const {url, method, postData, headers} = overrides;
    this.#interceptionHandled = true;

    const postDataBinaryBase64 = postData
      ? Buffer.from(postData).toString('base64')
      : undefined;

    if (this._interceptionId === undefined) {
      throw new Error(
        'HTTPRequest is missing _interceptionId needed for Fetch.continueRequest'
      );
    }
    await this.#client
      .send('Fetch.continueRequest', {
        requestId: this._interceptionId,
        url,
        method,
        postData: postDataBinaryBase64,
        headers: headers ? headersArray(headers) : undefined,
      })
      .catch(error => {
        this.#interceptionHandled = false;
        return handleError(error);
      });
  }

  override async respond(
    response: Partial<ResponseForRequest>,
    priority?: number
  ): Promise<void> {
    // Mocking responses for dataURL requests is not currently supported.
    if (this.#url.startsWith('data:')) {
      return;
    }
    assert(this.#allowInterception, 'Request Interception is not enabled!');
    assert(!this.#interceptionHandled, 'Request is already handled!');
    if (priority === undefined) {
      return this.#respond(response);
    }
    this.#responseForRequest = response;
    if (
      this.#interceptResolutionState.priority === undefined ||
      priority > this.#interceptResolutionState.priority
    ) {
      this.#interceptResolutionState = {
        action: InterceptResolutionAction.Respond,
        priority,
      };
      return;
    }
    if (priority === this.#interceptResolutionState.priority) {
      if (this.#interceptResolutionState.action === 'abort') {
        return;
      }
      this.#interceptResolutionState.action = InterceptResolutionAction.Respond;
    }
  }

  async #respond(response: Partial<ResponseForRequest>): Promise<void> {
    this.#interceptionHandled = true;

    const responseBody: Buffer | null =
      response.body && isString(response.body)
        ? Buffer.from(response.body)
        : (response.body as Buffer) || null;

    const responseHeaders: Record<string, string | string[]> = {};
    if (response.headers) {
      for (const header of Object.keys(response.headers)) {
        const value = response.headers[header];

        responseHeaders[header.toLowerCase()] = Array.isArray(value)
          ? value.map(item => {
              return String(item);
            })
          : String(value);
      }
    }
    if (response.contentType) {
      responseHeaders['content-type'] = response.contentType;
    }
    if (responseBody && !('content-length' in responseHeaders)) {
      responseHeaders['content-length'] = String(
        Buffer.byteLength(responseBody)
      );
    }

    const status = response.status || 200;
    if (this._interceptionId === undefined) {
      throw new Error(
        'HTTPRequest is missing _interceptionId needed for Fetch.fulfillRequest'
      );
    }
    await this.#client
      .send('Fetch.fulfillRequest', {
        requestId: this._interceptionId,
        responseCode: status,
        responsePhrase: STATUS_TEXTS[status],
        responseHeaders: headersArray(responseHeaders),
        body: responseBody ? responseBody.toString('base64') : undefined,
      })
      .catch(error => {
        this.#interceptionHandled = false;
        return handleError(error);
      });
  }

  override async abort(
    errorCode: ErrorCode = 'failed',
    priority?: number
  ): Promise<void> {
    // Request interception is not supported for data: urls.
    if (this.#url.startsWith('data:')) {
      return;
    }
    const errorReason = errorReasons[errorCode];
    assert(errorReason, 'Unknown error code: ' + errorCode);
    assert(this.#allowInterception, 'Request Interception is not enabled!');
    assert(!this.#interceptionHandled, 'Request is already handled!');
    if (priority === undefined) {
      return this.#abort(errorReason);
    }
    this.#abortErrorReason = errorReason;
    if (
      this.#interceptResolutionState.priority === undefined ||
      priority >= this.#interceptResolutionState.priority
    ) {
      this.#interceptResolutionState = {
        action: InterceptResolutionAction.Abort,
        priority,
      };
      return;
    }
  }

  async #abort(
    errorReason: Protocol.Network.ErrorReason | null
  ): Promise<void> {
    this.#interceptionHandled = true;
    if (this._interceptionId === undefined) {
      throw new Error(
        'HTTPRequest is missing _interceptionId needed for Fetch.failRequest'
      );
    }
    await this.#client
      .send('Fetch.failRequest', {
        requestId: this._interceptionId,
        errorReason: errorReason || 'Failed',
      })
      .catch(handleError);
  }
}

const errorReasons: Record<ErrorCode, Protocol.Network.ErrorReason> = {
  aborted: 'Aborted',
  accessdenied: 'AccessDenied',
  addressunreachable: 'AddressUnreachable',
  blockedbyclient: 'BlockedByClient',
  blockedbyresponse: 'BlockedByResponse',
  connectionaborted: 'ConnectionAborted',
  connectionclosed: 'ConnectionClosed',
  connectionfailed: 'ConnectionFailed',
  connectionrefused: 'ConnectionRefused',
  connectionreset: 'ConnectionReset',
  internetdisconnected: 'InternetDisconnected',
  namenotresolved: 'NameNotResolved',
  timedout: 'TimedOut',
  failed: 'Failed',
} as const;

async function handleError(error: ProtocolError) {
  if (['Invalid header'].includes(error.originalMessage)) {
    throw error;
  }
  // In certain cases, protocol will return error if the request was
  // already canceled or the page was closed. We should tolerate these
  // errors.
  debugError(error);
}
