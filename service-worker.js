if(!self.define){let e,i={};const r=(r,d)=>(r=new URL(r+".js",d).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(d,s)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let n={};const c=e=>r(e,a),b={module:{uri:a},exports:n,require:c};i[a]=Promise.all(d.map((e=>b[e]||c(e)))).then((e=>(s(...e),n)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/07/11/Markdown用法/index.html",revision:"6a182bd1a75b66b021da6736ba7f0763"},{url:"2022/07/13/hexo学习日记/index.html",revision:"7e0e4ae80dce420dcb082558102db39a"},{url:"2022/07/13/Markdown基本用法/index.html",revision:"312ed47132f8bcb29fc1f80e575dd25e"},{url:"2022/07/13/My-Gallery/index.html",revision:"08f10ab2850f8f7c6360a0689409aabf"},{url:"404.html",revision:"6e41bb0741fab2a4e8bf940d90eb6df5"},{url:"archive/index.html",revision:"084fcba7de3b4abb061f28354d1d6a78"},{url:"archives/2022/07/index.html",revision:"40265a99d215334152a1bd689d02b053"},{url:"archives/2022/index.html",revision:"bce70e00d8147669526148e908e31635"},{url:"archives/index.html",revision:"2d75fc0f28ecb012288b0b3287bbb8e3"},{url:"categories/index.html",revision:"c83ae8817767709867411c4661af98c9"},{url:"css_layout/sun_moon.css",revision:"4abceaaca358b210a5661539abd0e282"},{url:"css/index.css",revision:"b0e71143dfbead55efee0f1ed82e5831"},{url:"css/universe.css",revision:"4717a52a44176b9e02139ec5633b83a3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"97d82741d15b425aa850e6d61b9f3b47"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"03609ee433673f35da22de921cdad41a"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"cd68447e684684422464e9955cbb71d9"},{url:"tags/hexo/index.html",revision:"b11877b8f98433130dbdd1020d663e10"},{url:"tags/index.html",revision:"f96a4950340361725ccb3535c12b81c6"},{url:"tags/Markdown/index.html",revision:"5a80afcae6e6e9d9b7c97fcfb30da839"},{url:"tags/测试/index.html",revision:"c686e88d3f13a1f509bbf2f44a2bbec1"},{url:"tags/笔记/index.html",revision:"bc5e8ac391bdc791b96f2925851fd079"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
