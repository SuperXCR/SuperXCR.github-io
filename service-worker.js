if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const n=e=>d(e,s),l={module:{uri:s},exports:a,require:n};i[s]=Promise.all(r.map((e=>l[e]||n(e)))).then((e=>(c(...e),a)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/07/11/Markdown用法/index.html",revision:"3ff643913f0924c5769c699e3e0a04ae"},{url:"2022/07/13/hexo学习日记/index.html",revision:"aee558eae42ba9e35a630d04e974a945"},{url:"2022/07/13/Markdown基本用法/index.html",revision:"61e2d02d88a2fbdeb82d936ddcdc9040"},{url:"2022/07/13/My-Gallery/index.html",revision:"5a6171ee3c9c1870224d340daa20c03f"},{url:"404.html",revision:"514356c3ed9b60f517f5eede1d723d7c"},{url:"about/index.html",revision:"6564b1dcb530c4867b70de73d4add100"},{url:"archives/2022/07/index.html",revision:"ba93b9cef99e4210ceaf93a79783a4a2"},{url:"archives/2022/index.html",revision:"e4fa0b4de5874cf349cd775e89cd608a"},{url:"archives/index.html",revision:"9d1b6177256bbb71a18709cb1111d34d"},{url:"bangumis/index.html",revision:"97d0180f34830ff1f146e02921b6ded3"},{url:"categories/index.html",revision:"51e117e5dbec854c8e6dc5d63038935e"},{url:"css_layout/sun_moon.css",revision:"4abceaaca358b210a5661539abd0e282"},{url:"css/index.css",revision:"a7a4197e3ded8f74f76aa83ebfb465ab"},{url:"css/universe.css",revision:"4717a52a44176b9e02139ec5633b83a3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/cute.html",revision:"1e3878cd33cd671aa1742cc936ce7dc1"},{url:"Gallery/index.html",revision:"241b12e2913453a5084483fb2f38bd38"},{url:"Gallery/ohmygirl.html",revision:"35c3fd88066ea9139cc737004a38b0b1"},{url:"game/index.html",revision:"49902f7aced90eb3660530bec72b1259"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"97d82741d15b425aa850e6d61b9f3b47"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"3fd77c25094d94c4929c22f88a4e36d4"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"1c076886684926f161a855d5e104a0e2"},{url:"tags/hexo/index.html",revision:"b997a093155ee1b381cc0085bacbb6f1"},{url:"tags/index.html",revision:"7618d49df27972e7b0c1b2b6acf2c8bd"},{url:"tags/Markdown/index.html",revision:"f5164b374fe4d1c3e84d95019c27d857"},{url:"tags/测试/index.html",revision:"37f009841a84db6c6fd3111f04ef652c"},{url:"tags/笔记/index.html",revision:"771cbfc6b356aa6653c0f5bae29c339b"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
