if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,a)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const n=e=>d(e,s),f={module:{uri:s},exports:c,require:n};i[s]=Promise.all(r.map((e=>f[e]||n(e)))).then((e=>(a(...e),c)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/07/11/Markdown用法/index.html",revision:"6862f73bfa272f59266541593cdf35d7"},{url:"2022/07/13/hexo学习日记/index.html",revision:"b8597f174627f3e0c75b2bdf0c1da113"},{url:"2022/07/13/Markdown基本用法/index.html",revision:"ba042af4924742855af9e4fec5843f50"},{url:"2022/07/13/My-Gallery/index.html",revision:"62772ad0b2383f307b3e282ef9b8100c"},{url:"404.html",revision:"bd4c0fbeca68adab5b92c8c23a0bc7a5"},{url:"about/index.html",revision:"d88eac3e09b182b283593ad875e2b420"},{url:"archives/2022/07/index.html",revision:"2704e120977b94382a79a6cdb1d4e0d9"},{url:"archives/2022/index.html",revision:"1e1451cf0624ae1a3991f48ba7717e4a"},{url:"archives/index.html",revision:"dea3fa484152ef05393bfdfac9071b2b"},{url:"categories/index.html",revision:"f3bf9d7e05c6017e78a0b22b5ad37136"},{url:"css_layout/sun_moon.css",revision:"4abceaaca358b210a5661539abd0e282"},{url:"css/index.css",revision:"b0e71143dfbead55efee0f1ed82e5831"},{url:"css/universe.css",revision:"4717a52a44176b9e02139ec5633b83a3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/cute.html",revision:"55271801addeffed598bafdf1424ca07"},{url:"Gallery/index.html",revision:"b165ee19a7d01fe400a0746665d02ddb"},{url:"Gallery/ohmygirl.html",revision:"db11255f9b7bc6d0aa8063a00f55b7fa"},{url:"game/index.html",revision:"6f45c0bc62b9c5017101c14f989ab1bc"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"97d82741d15b425aa850e6d61b9f3b47"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"83d720bc2deb591265397665d0d4da01"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"132bd2dfb318e0a3753effd803dd14f2"},{url:"tags/hexo/index.html",revision:"50ba9fa49d9f702ebc94fd471d673fbb"},{url:"tags/index.html",revision:"34248fed0cbe4994f599e35c8c387401"},{url:"tags/Markdown/index.html",revision:"66353955f6e569a2d37ca4c80392d09a"},{url:"tags/测试/index.html",revision:"4edbc4d7ab0855d1c3eecc336dd8fca8"},{url:"tags/笔记/index.html",revision:"a5ed7c7f6eebf7c6a85dbfd2a9f65c4a"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
