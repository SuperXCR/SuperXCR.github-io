if(!self.define){let e,d={};const i=(i,s)=>(i=new URL(i+".js",s).href,d[i]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=d,document.head.appendChild(e)}else e=i,importScripts(i),d()})).then((()=>{let e=d[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(d[c])return;let n={};const f=e=>i(e,c),l={module:{uri:c},exports:n,require:f};d[c]=Promise.all(s.map((e=>l[e]||f(e)))).then((e=>(r(...e),n)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/07/11/Markdown用法/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"2022/07/13/hexo学习日记/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"2022/07/13/Markdown基本用法/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"2022/07/13/My-Gallery/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"404.html",revision:"5babe50d6563a990fc32ad9cf1b74d8f"},{url:"about/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2022/07/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2022/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css_layout/sun_moon.css",revision:"4abceaaca358b210a5661539abd0e282"},{url:"css/index.css",revision:"b0e71143dfbead55efee0f1ed82e5831"},{url:"css/universe.css",revision:"4717a52a44176b9e02139ec5633b83a3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/cute.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/ohmygirl.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"game/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"97d82741d15b425aa850e6d61b9f3b47"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/hexo/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/Markdown/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/测试/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/笔记/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
