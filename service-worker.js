if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let a={};const n=e=>r(e,c),l={module:{uri:c},exports:a,require:n};i[c]=Promise.all(s.map((e=>l[e]||n(e)))).then((e=>(d(...e),a)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/07/13/hexo学习日记/index.html",revision:"0f7dc4ed64c6c5a2c3233327232af29b"},{url:"2022/08/20/Markdown基本语法/index.html",revision:"52c3b590b8bf7177ef2d339cd8973f22"},{url:"404.html",revision:"3ffc11d03069412ae410f3c873a987cf"},{url:"about/index.html",revision:"db289c06cd5f076cf4025476d4d7ec0f"},{url:"archives/2022/07/index.html",revision:"e8955af46a24507e41d6e693040ad67e"},{url:"archives/2022/08/index.html",revision:"bd94de5a42588e87a1dacc877d73b265"},{url:"archives/2022/index.html",revision:"10c62657c3b4823dceca5e789696b747"},{url:"archives/index.html",revision:"ba64b6bf5987c428eb6e952eb6598421"},{url:"bangumis/index.html",revision:"68e4345ef9e9711e81b0bd0813823221"},{url:"categories/index.html",revision:"391017560753abb95fcb6b247c89085a"},{url:"css_layout/sun_moon.css",revision:"4abceaaca358b210a5661539abd0e282"},{url:"css/custom.js",revision:"e305bbaa411007578f2656c8275d96be"},{url:"css/index.css",revision:"a7a4197e3ded8f74f76aa83ebfb465ab"},{url:"css/universe.css",revision:"4717a52a44176b9e02139ec5633b83a3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/cute.html",revision:"ebec7d5d765b3336ca84226dad1062a6"},{url:"Gallery/index.html",revision:"3977e9731ae7d030e044856f74500b77"},{url:"Gallery/ohmygirl.html",revision:"d4361230af74b6d6874c1a53fa3b0452"},{url:"game/index.html",revision:"c117be44dc3c3fc82186c42668f76d09"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"97d82741d15b425aa850e6d61b9f3b47"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"31a9f293df1c7a593b357075072e818d"},{url:"js/custom.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"d3b53fdf5c4427d67bb89694c1228ab5"},{url:"tags/hexo/index.html",revision:"d589022b9010ce55da2bc2a730a4e096"},{url:"tags/index.html",revision:"d8f94e78ddfc8f700c14ae5f18b44f5b"},{url:"tags/Markdown/index.html",revision:"5e09fc4998118948e5109274848f9fc3"},{url:"tags/笔记/index.html",revision:"78c79875973880a042fde1a1069a133e"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
