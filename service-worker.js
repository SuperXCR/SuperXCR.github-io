if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let a={};const n=e=>d(e,c),b={module:{uri:c},exports:a,require:n};i[c]=Promise.all(r.map((e=>b[e]||n(e)))).then((e=>(s(...e),a)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/07/11/Markdown用法/index.html",revision:"650198b54423f9cc3092304b0fda30c5"},{url:"2022/07/13/hexo学习日记/index.html",revision:"0fb2ea30b0d9c53c960615364d07de59"},{url:"2022/07/13/Markdown基本用法/index.html",revision:"07b92efe0f1a363decea3369c4cab411"},{url:"2022/07/13/My-Gallery/index.html",revision:"e0db37ad81824bac55eef8bc5c08596d"},{url:"404.html",revision:"e81db5356a1a5e12b17c366f04d37d54"},{url:"archives/2022/07/index.html",revision:"741478bbb5815b9e53de4f95703cb0fa"},{url:"archives/2022/index.html",revision:"fb7ada9fb8f4eb735baad9b502a2e3be"},{url:"archives/index.html",revision:"7ab0d2cb2b027486d01ecfeb6926d4b8"},{url:"categories/index.html",revision:"d9fd197274255f5e380f8d83fcc9e1bd"},{url:"css_layout/sun_moon.css",revision:"4abceaaca358b210a5661539abd0e282"},{url:"css/index.css",revision:"b0e71143dfbead55efee0f1ed82e5831"},{url:"css/universe.css",revision:"4717a52a44176b9e02139ec5633b83a3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"97d82741d15b425aa850e6d61b9f3b47"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"fef7045ccd84395f7df240b6f0fb9609"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"406e17ff733b25d5866c99ffbd5ef1be"},{url:"tags/hexo/index.html",revision:"c27c7fd108584212fed85c2b1db4ea16"},{url:"tags/index.html",revision:"f4ea1701c27a5fde0581ea2e9215aa75"},{url:"tags/Markdown/index.html",revision:"ad74d1d7be65a0a98d8e87830d9b7acc"},{url:"tags/测试/index.html",revision:"d8c1f6f5285f5b86659c8af3d23ccb29"},{url:"tags/笔记/index.html",revision:"692cd4514825bfaee8d4be9b3eb7c9e8"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
