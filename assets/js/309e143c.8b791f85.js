"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67043],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),g=r,f=m["".concat(l,".").concat(g)]||m[g]||s[g]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={sidebar_label:"Page.waitForFunction"},p="Page.waitForFunction() method",l={unversionedId:"api/puppeteer.page.waitforfunction",id:"version-19.8.5/api/puppeteer.page.waitforfunction",title:"Page.waitForFunction() method",description:"Waits for a function to finish evaluating in the page's context.",source:"@site/versioned_docs/version-19.8.5/api/puppeteer.page.waitforfunction.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitforfunction",permalink:"/api/puppeteer.page.waitforfunction",draft:!1,tags:[],version:"19.8.5",frontMatter:{sidebar_label:"Page.waitForFunction"},sidebar:"api",previous:{title:"Page.waitForFrame",permalink:"/api/puppeteer.page.waitforframe"},next:{title:"Page.waitForNavigation",permalink:"/api/puppeteer.page.waitfornavigation"}},u={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2}],s={toc:c};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"pagewaitforfunction-method"}),"Page.waitForFunction() method"),(0,a.kt)("p",null,"Waits for a function to finish evaluating in the page's context."),(0,a.kt)("h4",r({},{id:"signature"}),"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"class Page {\n  waitForFunction<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>\n  >(\n    pageFunction: Func | string,\n    options?: FrameWaitForFunctionOptions,\n    ...args: Params\n  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;\n}\n")),(0,a.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"pageFunction"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Func ","|"," string"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Function to be evaluated in browser context")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"options"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.framewaitforfunctionoptions"}),"FrameWaitForFunctionOptions")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"(Optional)")," Options for configuring waiting behavior.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"args"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Params"),(0,a.kt)("td",r({parentName:"tr"},{align:null}))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",r({parentName:"p"},{href:"/api/puppeteer.handlefor"}),"HandleFor"),"<","Awaited","<","ReturnType","<","Func",">",">",">",">"),(0,a.kt)("h2",r({},{id:"example-1"}),"Example 1"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",r({parentName:"p"},{href:"/api/puppeteer.page.waitforfunction"}),"Page.waitForFunction()")," can be used to observe viewport size change:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"import puppeteer from 'puppeteer';\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  const watchDog = page.waitForFunction('window.innerWidth < 100');\n  await page.setViewport({width: 50, height: 50});\n  await watchDog;\n  await browser.close();\n})();\n")),(0,a.kt)("h2",r({},{id:"example-2"}),"Example 2"),(0,a.kt)("p",null,"To pass arguments from node.js to the predicate of ",(0,a.kt)("a",r({parentName:"p"},{href:"/api/puppeteer.page.waitforfunction"}),"Page.waitForFunction()")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"const selector = '.foo';\nawait page.waitForFunction(\n  selector => !!document.querySelector(selector),\n  {},\n  selector\n);\n")),(0,a.kt)("h2",r({},{id:"example-3"}),"Example 3"),(0,a.kt)("p",null,"The predicate of ",(0,a.kt)("a",r({parentName:"p"},{href:"/api/puppeteer.page.waitforfunction"}),"Page.waitForFunction()")," can be asynchronous too:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"const username = 'github-username';\nawait page.waitForFunction(\n  async username => {\n    const githubResponse = await fetch(\n      `https://api.github.com/users/${username}`\n    );\n    const githubUser = await githubResponse.json();\n    // show the avatar\n    const img = document.createElement('img');\n    img.src = githubUser.avatar_url;\n    // wait 3 seconds\n    await new Promise((resolve, reject) => setTimeout(resolve, 3000));\n    img.remove();\n  },\n  {},\n  username\n);\n")))}m.isMDXComponent=!0}}]);