if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const s=e=>a(e,c),b={module:{uri:c},exports:f,require:s};i[c]=Promise.all(r.map((e=>b[e]||s(e)))).then((e=>(d(...e),f)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"2728ce9238a00e9863f2184e13bc7b45"},{url:"about/index.html",revision:"4e6912bd0cbb17df5a4d692d14e939d9"},{url:"archives/2022/07/index.html",revision:"14425a88c3cc293883a689f4555cd1c6"},{url:"archives/2022/08/index.html",revision:"8e5073019ecb21f982accc5de0a4ec1a"},{url:"archives/2022/09/index.html",revision:"f4ee92881f0658c2f972e5ff63c416c3"},{url:"archives/2022/index.html",revision:"5aeb86b18a50764774513cb640919ce8"},{url:"archives/2022/page/2/index.html",revision:"f8eabb51c127406f9a5ed5b3a18f9bb6"},{url:"archives/index.html",revision:"2a48ea9b0f3da56ec1b1e1d407fd6c48"},{url:"archives/page/2/index.html",revision:"1e55cf4b124dafec4af9320ad1fdd28f"},{url:"bangumis/index.html",revision:"9c58d610e295eb4a090dd50379b527ff"},{url:"categories/CSS/index.html",revision:"5cd143bc8963ab0a1ca028c33c2a703e"},{url:"categories/HTML/index.html",revision:"8e6f5c58f02fa26e07b09d5ccdfe8685"},{url:"categories/index.html",revision:"83a5dd07fadc0dc7beba211c4e7717fc"},{url:"categories/Java/index.html",revision:"4d814e8066d055ae6f07222f9da231ce"},{url:"categories/Markdown/index.html",revision:"6c4b402c1f42d49b6ad18fdf811fa713"},{url:"categories/MySQL/index.html",revision:"b80fde752db900996f40b0c652295d0e"},{url:"categories/小工具/index.html",revision:"c7b0f69f7105c8cb7c313e2305a891d3"},{url:"categories/小技巧/index.html",revision:"f74b71df8af8bad183609592e1dad21c"},{url:"css_layout/sun_moon.css",revision:"4abceaaca358b210a5661539abd0e282"},{url:"css/custom.js",revision:"e305bbaa411007578f2656c8275d96be"},{url:"css/index.css",revision:"82d7b1a18e0599f637d793db48b0543f"},{url:"css/universe.css",revision:"4717a52a44176b9e02139ec5633b83a3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/cute.html",revision:"6faf890cdbfe4f6a5c534bf2b6e40c52"},{url:"Gallery/index.html",revision:"5a4d58dd55055ebfd205e0ccd50e019e"},{url:"Gallery/ohmygirl.html",revision:"a48f92224c7b49f60378abb3870e8a95"},{url:"game/index.html",revision:"b1571965c06fec6acd814b5e95a81e9d"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"97d82741d15b425aa850e6d61b9f3b47"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"8116a0f43fdd445169102912190051eb"},{url:"js/custom.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"95f2dcf20e7b4a36e42dd5ef000cfebd"},{url:"page/2/index.html",revision:"ab250f3ddbb9362fb2ca40898af35cce"},{url:"public/service-worker.js",revision:"98758ead82429a89f45f8fc070835ca5"},{url:"public/workbox-19896c93.js",revision:"56ad33eb983948be312838f595588cef"},{url:"SuperXCR/24bd5933.html",revision:"10c2193cf8560615a90aa52feabaf778"},{url:"SuperXCR/3008f9ff.html",revision:"d58fdaf5b60a11cb5a9c6a0e9fb3e5d0"},{url:"SuperXCR/3608f6dd.html",revision:"102d3b7b95a97c72f8001e1926a6305f"},{url:"SuperXCR/3ce8deb9.html",revision:"7ece1dcf3f345977bd71c3a9b530ad31"},{url:"SuperXCR/5a789e17.html",revision:"705f95baa6f79b82d558d6e42e0249f3"},{url:"SuperXCR/88b49e9a.html",revision:"90adf48427107faa860194b0fe19ae15"},{url:"SuperXCR/8eb491b8.html",revision:"f2e29ce7a98677a039ddfe36bb9c14c1"},{url:"SuperXCR/9a013174.html",revision:"3a879ba40e2b984df88b2ddbbd99dfcf"},{url:"SuperXCR/a219e661.html",revision:"9ac89a122273de9e6bfd828fbe1896e1"},{url:"SuperXCR/a574217b.html",revision:"ae791909219688b5e8e5a337fef04b55"},{url:"SuperXCR/b2444a9.html",revision:"e9c79ba391bf66a184f75692a99aec0c"},{url:"SuperXCR/bf9da926.html",revision:"601336a8dc5c3a05cc8ffa536904ea3c"},{url:"SuperXCR/bfa56f5e.html",revision:"0487f16dd03b5d1013e50c9e0ed19111"},{url:"SuperXCR/cbdf841b.html",revision:"8a561af240b03df745944c550542b232"},{url:"tags/CSS/index.html",revision:"ac4c097447cc659efead252413742fc6"},{url:"tags/hexo/index.html",revision:"1a2201eb6d93ca69bc2ffa32d19f1c95"},{url:"tags/HTML/index.html",revision:"a52147cfa9eae74fdedc26f7727f55b8"},{url:"tags/index.html",revision:"946f8f8dba73ccc64d0379659bef4bc4"},{url:"tags/Java/index.html",revision:"aa9f838ccf65e56f64e8e5bfd9659ad1"},{url:"tags/Markdown/index.html",revision:"6cdf8612f98bc1e9e7548ae8f12bd91b"},{url:"tags/MySQL安装教程/index.html",revision:"76c0ef77bc75f83a7a341ff57aa15879"},{url:"tags/Navicat/index.html",revision:"6fd166e35e318b15979517083fdc1130"},{url:"tags/前端/index.html",revision:"879359876cef9f3092bbb37a3fdbe721"},{url:"tags/定位/index.html",revision:"07d23c82e786a497b8171b396f55d437"},{url:"tags/文章上传测试/index.html",revision:"8c09a8bd08170b6f37ccde5327f5dfcd"},{url:"tags/盒模型/index.html",revision:"48d45c0559a067104f881affa29270e5"},{url:"tags/笔记/index.html",revision:"27820ff84bffd60a493ef7c03abb0ad1"},{url:"tags/羊了个羊/index.html",revision:"68b04484b192dbcc3076ceb3d7fcf773"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
