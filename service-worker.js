if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,d)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let c={};const n=e=>s(e,a),f={module:{uri:a},exports:c,require:n};i[a]=Promise.all(r.map((e=>f[e]||n(e)))).then((e=>(d(...e),c)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/07/11/Markdown用法/index.html",revision:"80b8c4569f931bc47861588cfacef236"},{url:"2022/07/13/hexo学习日记/index.html",revision:"1416b876fc1f2e7285bb00de252a8893"},{url:"2022/07/13/Markdown基本用法/index.html",revision:"b616fb79d3be539f291a1b8ba695f4d7"},{url:"2022/07/13/My-Gallery/index.html",revision:"bc6b1d4124fa90e667f7fdb95069467d"},{url:"404.html",revision:"784334f7a652390703a9516382d05363"},{url:"about/index.html",revision:"018803fcd1e631eaef9c663350dbfeae"},{url:"archives/2022/07/index.html",revision:"bc89b514bb6fdc6683726871214204b3"},{url:"archives/2022/index.html",revision:"c666906afaa3161c2cec48b2cf11b38d"},{url:"archives/index.html",revision:"511f776e8fac19c6b32bdba5f652307c"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"bcc9c4f2bd6dafddfda828935bec28d2"},{url:"css_layout/sun_moon.css",revision:"4abceaaca358b210a5661539abd0e282"},{url:"css/index.css",revision:"b0e71143dfbead55efee0f1ed82e5831"},{url:"css/universe.css",revision:"4717a52a44176b9e02139ec5633b83a3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/cute.html",revision:"6f0504a456851584cd5a081af1c543fd"},{url:"Gallery/index.html",revision:"a1f622fdc6221f3ccb7996a92181987e"},{url:"Gallery/ohmygirl.html",revision:"909115068abdff2b9450b39047a56906"},{url:"game/index.html",revision:"a01477b2209a987d95d98d621b1abe20"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"97d82741d15b425aa850e6d61b9f3b47"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"066dcb33642aad168246bc4cc270dc64"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"18fb57cdb271612cafb6b7aa2eafdf27"},{url:"tags/hexo/index.html",revision:"4e518220ee941dfeb308de7838cba3a9"},{url:"tags/index.html",revision:"11aabf8d395484c0edabd70734a813b9"},{url:"tags/Markdown/index.html",revision:"2cf858f4ff33132a882946b64abc4745"},{url:"tags/测试/index.html",revision:"5d6019b0efa82cc99e260ec93b26bdad"},{url:"tags/笔记/index.html",revision:"9d00552282fc5bb90d6931e13433d961"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
