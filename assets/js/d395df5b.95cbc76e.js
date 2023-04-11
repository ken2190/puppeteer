"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74443],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=u(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||s[m]||l;return n?r.createElement(k,o(o({ref:e},d),{},{components:n})):r.createElement(k,o({ref:e},d))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},37503:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>d});n(67294);var r=n(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const o={sidebar_label:"LaunchOptions"},i="LaunchOptions interface",p={unversionedId:"api/puppeteer.launchoptions",id:"version-19.8.5/api/puppeteer.launchoptions",title:"LaunchOptions interface",description:"Generic launch options that can be passed when launching any browser.",source:"@site/versioned_docs/version-19.8.5/api/puppeteer.launchoptions.md",sourceDirName:"api",slug:"/api/puppeteer.launchoptions",permalink:"/api/puppeteer.launchoptions",draft:!1,tags:[],version:"19.8.5",frontMatter:{sidebar_label:"LaunchOptions"},sidebar:"api",previous:{title:"launch",permalink:"/api/puppeteer.launch"},next:{title:"LowerCasePaperFormat",permalink:"/api/puppeteer.lowercasepaperformat"}},u={},d=[{value:"Signature:",id:"signature",level:4},{value:"Properties",id:"properties",level:2}],s={toc:d};function c(t){var{components:e}=t,n=l(t,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"launchoptions-interface"}),"LaunchOptions interface"),(0,r.kt)("p",null,"Generic launch options that can be passed when launching any browser."),(0,r.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"export interface LaunchOptions\n")),(0,r.kt)("h2",a({},{id:"properties"}),"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Property"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"channel"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"optional")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.chromereleasechannel"}),"ChromeReleaseChannel")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Chrome Release Channel"),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"dumpio"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"optional")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"If true, pipes the browser process stdout and stderr to ",(0,r.kt)("code",null,"process.stdout")," and ",(0,r.kt)("code",null,"process.stderr"),"."),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"env"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"optional")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Record","<","string, string ","|"," undefined",">"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Specify environment variables that will be visible to the browser."),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The contents of ",(0,r.kt)("code",null,"process.env"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"executablePath"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"optional")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Path to a browser executable to use instead of the bundled Chromium. Note that Puppeteer is only guaranteed to work with the bundled Chromium, so use this setting at your own risk."),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"extraPrefsFirefox"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"optional")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Record","<","string, unknown",">"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"https://searchfox.org/mozilla-release/source/modules/libpref/init/all.js"}),"Additional preferences")," that can be passed when launching with Firefox."),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"handleSIGHUP"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"optional")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Close the browser process on ",(0,r.kt)("code",null,"SIGHUP"),"."),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"handleSIGINT"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"optional")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Close the browser process on ",(0,r.kt)("code",null,"Ctrl+C"),"."),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"handleSIGTERM"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"optional")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Close the browser process on ",(0,r.kt)("code",null,"SIGTERM"),"."),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ignoreDefaultArgs"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"optional")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"boolean ","|"," string","[","]"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"If ",(0,r.kt)("code",null,"true"),", do not use ",(0,r.kt)("code",null,"puppeteer.defaultArgs()")," when creating a browser. If an array is provided, these args will be filtered out. Use this with care - you probably want the default arguments Puppeteer uses."),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"pipe"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"optional")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Connect to a browser over a pipe instead of a WebSocket."),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"product"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"optional")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.product"}),"Product")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Which browser to launch."),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"chrome"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"timeout"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"optional")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Maximum time in milliseconds to wait for the browser to start. Pass ",(0,r.kt)("code",null,"0")," to disable the timeout."),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"30_000")," (30 seconds).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"waitForInitialPage"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"optional")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Whether to wait for the initial page to be ready. Useful when a user explicitly disables that (e.g. ",(0,r.kt)("code",null,"--no-startup-window")," for Chrome)."),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"true"))))))}c.isMDXComponent=!0}}]);