if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let l={};const t=e=>i(e,r),f={module:{uri:r},exports:l,require:t};n[r]=Promise.all(s.map((e=>f[e]||t(e)))).then((e=>(o(...e),l)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"furiendo"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.d89ef89e.css",revision:null},{url:"/css/chunk-vendors.946a2154.css",revision:null},{url:"/fonts/materialdesignicons-webfont.aaf5968f.eot",revision:null},{url:"/fonts/materialdesignicons-webfont.ad0f7b3f.woff2",revision:null},{url:"/fonts/materialdesignicons-webfont.f5b84261.ttf",revision:null},{url:"/fonts/materialdesignicons-webfont.fabeafb8.woff",revision:null},{url:"/img/nigiri.2eaf757b.png",revision:null},{url:"/index.html",revision:"07f528f76079c9a5e8543ed716018614"},{url:"/js/app.263f8445.js",revision:null},{url:"/js/chunk-vendors.8bc8da06.js",revision:null},{url:"/manifest.json",revision:"c8601cbc394b1e3107e8a14dd6bc053c"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
