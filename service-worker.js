if(!self.define){let e,i={};const d=(d,s)=>(d=new URL(d+".js",s).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(s,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let c={};const n=e=>d(e,a),b={module:{uri:a},exports:c,require:n};i[a]=Promise.all(s.map((e=>b[e]||n(e)))).then((e=>(r(...e),c)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/07/11/Markdown用法/index.html",revision:"acb469a78d8b4b3f4b4668c261de1e7d"},{url:"2022/07/13/hexo学习日记/index.html",revision:"18a64b3d6bfd1bba46262fc35ecdfca6"},{url:"2022/07/13/Markdown基本用法/index.html",revision:"8c6b32890ff64eab7d102141106ed941"},{url:"2022/07/13/My-Gallery/index.html",revision:"9cdee2040a0d3777eb90ce2ec404d718"},{url:"404.html",revision:"ef9d07cf655270340f3e59b589be36b0"},{url:"about/index.html",revision:"98b02bb4e6df2d64e075de86bacf76c3"},{url:"archives/2022/07/index.html",revision:"546715912be55a8e0c31cf92224d533b"},{url:"archives/2022/index.html",revision:"ab8e33e49248c730382cc1d66092db16"},{url:"archives/index.html",revision:"a074fa83632057cb3fa67ce66b12d020"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"f634df11ca6964bf7862e5bad4fdc2d1"},{url:"css_layout/sun_moon.css",revision:"4abceaaca358b210a5661539abd0e282"},{url:"css/index.css",revision:"a7a4197e3ded8f74f76aa83ebfb465ab"},{url:"css/universe.css",revision:"4717a52a44176b9e02139ec5633b83a3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/cute.html",revision:"c489d2f9b48545a82992710174dd956b"},{url:"Gallery/index.html",revision:"f8ea142eeeb9cb3bbbcd4dd3477f4013"},{url:"Gallery/ohmygirl.html",revision:"9203f9dbb514b8214ae32ff1cc7b6609"},{url:"game/index.html",revision:"c0ae55dcb26deb653259a9d5056e15b2"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"97d82741d15b425aa850e6d61b9f3b47"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"519ac1b5835ab4bdab0b1e84ffe8e7ae"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"7ddce2ed7f02e14d63b4d8604d5df313"},{url:"tags/hexo/index.html",revision:"9df943a96607d39e0dc2b8b7c7d3bc64"},{url:"tags/index.html",revision:"bdda01d9e933ff3941bd812853c54c33"},{url:"tags/Markdown/index.html",revision:"19d30f86c43baf96360ddfd56826d386"},{url:"tags/测试/index.html",revision:"d5d4ec686241f9a906795bdf507e70ea"},{url:"tags/笔记/index.html",revision:"003e5ab35a9f3eba1e97ebee6a085a22"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
