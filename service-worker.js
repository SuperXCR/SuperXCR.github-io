if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,d)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let n={};const f=e=>s(e,a),c={module:{uri:a},exports:n,require:f};i[a]=Promise.all(r.map((e=>c[e]||f(e)))).then((e=>(d(...e),n)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/07/11/Markdown用法/index.html",revision:"44d793dda495dde635b1387fd36c5642"},{url:"2022/07/13/hexo学习日记/index.html",revision:"0eb3af475ee6ab85fe31ff8c1b557eb2"},{url:"2022/07/13/Markdown基本用法/index.html",revision:"578c32e90658d4888811de90e63d2020"},{url:"2022/07/13/My-Gallery/index.html",revision:"da5c9f467559039429d97413d9e9ee35"},{url:"404.html",revision:"b9e3a95a7ae4d22bf96e8ce4b2823bb8"},{url:"about/index.html",revision:"f30634ec28835f0054144558e99a4fc9"},{url:"archives/2022/07/index.html",revision:"39f162ecf77ec3622e392011155bf784"},{url:"archives/2022/index.html",revision:"8a69b541bad7bfa3414ff21917f27992"},{url:"archives/index.html",revision:"e74dc1b31447e7044899c6e3d86fc134"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"bangumis/index.html",revision:"d73a5f7bf8cb85ac8542ea95a37b36ae"},{url:"categories/index.html",revision:"2b55b5a5da67fb34c887c50da78ba944"},{url:"css_layout/sun_moon.css",revision:"4abceaaca358b210a5661539abd0e282"},{url:"css/index.css",revision:"a7a4197e3ded8f74f76aa83ebfb465ab"},{url:"css/universe.css",revision:"4717a52a44176b9e02139ec5633b83a3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/cute.html",revision:"85b4677eb0522bc2c7ef304f8854b63c"},{url:"Gallery/index.html",revision:"e2d6cf982486183260fee3a6c257fa44"},{url:"Gallery/ohmygirl.html",revision:"77e924f78f878b3df97310eecb22fbc5"},{url:"game/index.html",revision:"d53804753437ee2f0106d956ca4f1f18"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"97d82741d15b425aa850e6d61b9f3b47"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"116609c7dbe24fda1d65d8eab1fdb906"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"0e09efedf69e06da4f800034c9b1fc38"},{url:"tags/hexo/index.html",revision:"6945e0aedbce2173c388b6575287c013"},{url:"tags/index.html",revision:"4c259f4e61a559621ef8a8641f77194b"},{url:"tags/Markdown/index.html",revision:"7e6ff1f65d3cd1907df4536e4c599918"},{url:"tags/测试/index.html",revision:"0ee0cca35690ad5c39f32db15972f9c0"},{url:"tags/笔记/index.html",revision:"abfc55481471fb67dbf4fdbe95466714"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
