if(!self.define){let e,i={};const r=(r,a)=>(r=new URL(r+".js",a).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,d)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const n=e=>r(e,s),f={module:{uri:s},exports:c,require:n};i[s]=Promise.all(a.map((e=>f[e]||n(e)))).then((e=>(d(...e),c)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/07/11/Markdown用法/index.html",revision:"bb815fd03e02054cfebe55435f1ffb51"},{url:"2022/07/13/hexo学习日记/index.html",revision:"910e9531c33a9b7f1f77d57445ea2151"},{url:"2022/07/13/Markdown基本用法/index.html",revision:"c04599e551e8c5493e3d730be8479ae8"},{url:"2022/07/13/My-Gallery/index.html",revision:"3201afb2ce2c402ca6034efbb2a7dd09"},{url:"404.html",revision:"93380d257e9d92195038e0e8909e9588"},{url:"about/index.html",revision:"839dcb4f3903b87d1f21f03b459387d3"},{url:"archives/2022/07/index.html",revision:"65a5ab30edad62a08c0d471208f0517a"},{url:"archives/2022/index.html",revision:"b88e0ae4c691c635eb73de5e42eb0b47"},{url:"archives/index.html",revision:"95542609a6e5217f0800e93dab7d40bc"},{url:"bangumis/index.html",revision:"d50f7cfc81d01a86456600a7e8130663"},{url:"categories/index.html",revision:"77f2229476b92ab870a843f7b469f7c0"},{url:"css_layout/sun_moon.css",revision:"4abceaaca358b210a5661539abd0e282"},{url:"css/index.css",revision:"a7a4197e3ded8f74f76aa83ebfb465ab"},{url:"css/universe.css",revision:"4717a52a44176b9e02139ec5633b83a3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/cute.html",revision:"5ec43c8ea2eecdfbd913f1e4f163609e"},{url:"Gallery/index.html",revision:"5445ef877dcf1acb7d2164987b00931f"},{url:"Gallery/ohmygirl.html",revision:"35a41b1b4a1cb5c658c60910cc856ab8"},{url:"game/index.html",revision:"6c8ca3676241f03fd556fe6f2a53def2"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"97d82741d15b425aa850e6d61b9f3b47"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"0eed09f7cfad72c4aad9c5e04fb4a101"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"aabdebcd361a5d8aa811e7d2f343edcf"},{url:"music/index.html",revision:"f6e12000c1eaa51b9e911e097f3fff89"},{url:"tags/hexo/index.html",revision:"9b4d11a16868da2714f71b3d06e5d3d4"},{url:"tags/index.html",revision:"1e75a4d4dd269c4b2896f60a1cf6fea2"},{url:"tags/Markdown/index.html",revision:"cbc3551ff2b8010e97695b7b1e71349d"},{url:"tags/测试/index.html",revision:"143ec4c2a70b5fbb28da9682769ff0d5"},{url:"tags/笔记/index.html",revision:"6cb220f64f3ae079217830ae470aba7b"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
