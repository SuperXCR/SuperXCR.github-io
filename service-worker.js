if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const n=e=>a(e,c),b={module:{uri:c},exports:s,require:n};i[c]=Promise.all(d.map((e=>b[e]||n(e)))).then((e=>(r(...e),s)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/07/13/Hexo学习日记/index.html",revision:"484b1d8816fe31d519632a25f26903a7"},{url:"2022/07/13/Test/index.html",revision:"f844cdea0dc2868aaaa498cb01a89e9d"},{url:"2022/08/20/Markdown基本语法/index.html",revision:"241f7d6e1df04264c11d24073ed951e9"},{url:"2022/08/31/Java基础学习（1）/index.html",revision:"2000540c7c028c7284a72f60ad01f21e"},{url:"2022/08/31/Java基础学习（2）/index.html",revision:"aa8b17f0fb3fa2420a9435ee1566a173"},{url:"2022/08/31/Java基础学习（3）/index.html",revision:"3f0461f6c36589a7b4baab6a5890c1db"},{url:"2022/09/01/认识-CSS（1）/index.html",revision:"465fa506231301c621dbfc235bd94977"},{url:"2022/09/01/认识-CSS（2）/index.html",revision:"8a1bd57eb4c9654f782da66459b2ed30"},{url:"2022/09/01/认识-CSS（3）/index.html",revision:"9da7a670736601c0becc78c7caaef3f5"},{url:"2022/09/01/认识-HTML/index.html",revision:"b74e143385911d5d1264f166bf36b30e"},{url:"404.html",revision:"baee73d5a465fa6fc0937b191a34719f"},{url:"about/index.html",revision:"52201787b321030d73e63b2e4acb7e4b"},{url:"archives/2022/07/index.html",revision:"689b78065d2c0c8c85e6b874a787dde2"},{url:"archives/2022/08/index.html",revision:"e075713a7133e01edefaf0f19a7c4906"},{url:"archives/2022/09/index.html",revision:"6f1cc8eb68e8ecbfb8ff8eac3bd071dd"},{url:"archives/2022/index.html",revision:"2bbf644199c663dfaafa196c8a834f7e"},{url:"archives/index.html",revision:"c112f1eb325c5c97e08d21ba756509cf"},{url:"bangumis/index.html",revision:"5d0b9d48e89ade6cb5f9bbd921ac01cd"},{url:"categories/CSS/index.html",revision:"3505a9e6bcc24baac6c432101afa817a"},{url:"categories/HTML/index.html",revision:"f45a18c3d5a920c821e777d64e4792b5"},{url:"categories/index.html",revision:"b93eda070667af3d708dbed808c967bb"},{url:"categories/Java/index.html",revision:"4c6c2d48b07c6a2e6fff173682384239"},{url:"categories/Markdown/index.html",revision:"b83b56676e284ef056e7535049620367"},{url:"css_layout/sun_moon.css",revision:"4abceaaca358b210a5661539abd0e282"},{url:"css/custom.js",revision:"e305bbaa411007578f2656c8275d96be"},{url:"css/index.css",revision:"82d7b1a18e0599f637d793db48b0543f"},{url:"css/universe.css",revision:"4717a52a44176b9e02139ec5633b83a3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/cute.html",revision:"f0d32f6905a18c0fbc399520153ffd00"},{url:"Gallery/index.html",revision:"a604988cfaaddbafb5711de885aa753e"},{url:"Gallery/ohmygirl.html",revision:"15085b6a6f87298e36c5242b7058ce71"},{url:"game/index.html",revision:"38eb6678f4bb6e99927091764bb6df13"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"97d82741d15b425aa850e6d61b9f3b47"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"767c6d440fa09d2fe0630e9c9d57fc9a"},{url:"js/custom.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"972768a92b539784b888e34b127f8b1b"},{url:"tags/CSS/index.html",revision:"6775531354eaf9bc9e03a659dc7a7055"},{url:"tags/hexo/index.html",revision:"5ec7ba5b2cda168557d7717692035e60"},{url:"tags/HTML/index.html",revision:"64da7f0ce242919f06b0a0953c8fa1de"},{url:"tags/index.html",revision:"be6c1ec244469db3cc58b2f2a7312cd0"},{url:"tags/Java/index.html",revision:"de41f848b9e6a795b51d0a669de25d93"},{url:"tags/Markdown/index.html",revision:"725c022d9d657284860932172afa6614"},{url:"tags/前端/index.html",revision:"6a00a8798c77290f7b1b35cf704c57bd"},{url:"tags/定位/index.html",revision:"05beaebce9bda249d17044206a5718aa"},{url:"tags/文章上传测试/index.html",revision:"f6805bb0c1f5fc60cf4756653e93ac0f"},{url:"tags/盒模型/index.html",revision:"4594cb6d6dd04bf916023838fba5a0a9"},{url:"tags/笔记/index.html",revision:"9dfdd69c63a60f68fba86e760fa2dcf3"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
