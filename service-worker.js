if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let b={};const s=e=>a(e,c),l={module:{uri:c},exports:b,require:s};i[c]=Promise.all(r.map((e=>l[e]||s(e)))).then((e=>(d(...e),b)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"09ca8f5443f192e1e06fa17a32e84ccb"},{url:"about/index.html",revision:"345d040899f5a346cfbea4ca9879ecc7"},{url:"archives/2022/07/index.html",revision:"24e450601571316b9f2ada12e6d62e5b"},{url:"archives/2022/08/index.html",revision:"baead27a5f21010f43ebe3b4047822ea"},{url:"archives/2022/09/index.html",revision:"71978b7223a61205903222849bb62ed1"},{url:"archives/2022/index.html",revision:"d22d0856cccab8226ad2fcdecd3cef29"},{url:"archives/2022/page/2/index.html",revision:"83a2b28a4813e9a90637ad009271e347"},{url:"archives/index.html",revision:"c4b18a90559b833bb31d25fb215459c4"},{url:"archives/page/2/index.html",revision:"623a738590f7faeca5d20aa80cba068d"},{url:"bangumis/index.html",revision:"b7db2c608a5e156c23ef400d916427f2"},{url:"categories/CSS/index.html",revision:"a0776c6928608af9a8e1d3a0ca5c778a"},{url:"categories/HTML/index.html",revision:"8ae7ce941d7918b0bb853fcd6ec38692"},{url:"categories/index.html",revision:"7ab3c7382fde5ba132167e9a31b83118"},{url:"categories/Java/index.html",revision:"bcba2b0cbd7211adb9bba19b3d6a7f72"},{url:"categories/Markdown/index.html",revision:"6247a76dbb2093bf525d002c71c8728d"},{url:"categories/小技巧/index.html",revision:"23bbc3571e8387fd57dee9f62a27826b"},{url:"css_layout/sun_moon.css",revision:"4abceaaca358b210a5661539abd0e282"},{url:"css/custom.js",revision:"e305bbaa411007578f2656c8275d96be"},{url:"css/index.css",revision:"82d7b1a18e0599f637d793db48b0543f"},{url:"css/universe.css",revision:"4717a52a44176b9e02139ec5633b83a3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/cute.html",revision:"264db789ab43872039b30391949079b2"},{url:"Gallery/index.html",revision:"c489069aa01fe481329476254f413339"},{url:"Gallery/ohmygirl.html",revision:"fd6d69a16c3d678f914bd6d3b60d3a96"},{url:"game/index.html",revision:"0120c2ac83cae9eee97f5f7b613bc500"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"97d82741d15b425aa850e6d61b9f3b47"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"b7d8617c011dc4b06697be695881d36b"},{url:"js/custom.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"fcc27b223c9a2921a7ecae02fe3836ce"},{url:"page/2/index.html",revision:"5c8cdea1b0b6ab9f30fc35385e39665e"},{url:"public/service-worker.js",revision:"98758ead82429a89f45f8fc070835ca5"},{url:"public/workbox-19896c93.js",revision:"56ad33eb983948be312838f595588cef"},{url:"SuperXCR/24bd5933.html",revision:"934fb548a8442ac66c9410f9adea06f6"},{url:"SuperXCR/3008f9ff.html",revision:"59d3bb710f9b9746cec045eafbae5a71"},{url:"SuperXCR/3608f6dd.html",revision:"11625897b55b5f302b50257e14679a7e"},{url:"SuperXCR/3ce8deb9.html",revision:"43c8707ae63d57669fecbd34dfd78229"},{url:"SuperXCR/5a789e17.html",revision:"69c3e2843d5f3b4325f96a27fbac4a13"},{url:"SuperXCR/88b49e9a.html",revision:"395b392ce3c3a8024c44c8a1ff1383fb"},{url:"SuperXCR/8eb491b8.html",revision:"3a2d89798d638a5b17306c27af13b635"},{url:"SuperXCR/9a013174.html",revision:"75b0612adece0aeb638a7df62ee6690c"},{url:"SuperXCR/a219e661.html",revision:"46134d56e48079334bda5b6f3f3cf0a9"},{url:"SuperXCR/a574217b.html",revision:"c0cb327a0d35e35b80a8816ec40f810d"},{url:"SuperXCR/bf9da926.html",revision:"5cc22c62e30f03efdbbc2e4fd89bea03"},{url:"SuperXCR/cbdf841b.html",revision:"69514bd0d95151edfbb6c6ba6916d8d5"},{url:"tags/CSS/index.html",revision:"08455d155dd3a5c56a9416c13b9dada2"},{url:"tags/hexo/index.html",revision:"1804ebeda451490789ed49170e8b18c1"},{url:"tags/HTML/index.html",revision:"b522646b388bdff49b6b4d1b77775293"},{url:"tags/index.html",revision:"8cb4469c8f57c62eb68d4a405c652071"},{url:"tags/Java/index.html",revision:"f29a9b7cfe8f8b7210bb40632c8f7a4c"},{url:"tags/Markdown/index.html",revision:"4e774fcab8730d077ef72c3a9ef42aa8"},{url:"tags/前端/index.html",revision:"eafb619fca8e74436df47522a2232e1d"},{url:"tags/定位/index.html",revision:"b1a6812dc42f429886226e51283c3d0e"},{url:"tags/文章上传测试/index.html",revision:"3613007eabf827d969be9f108d8a4024"},{url:"tags/盒模型/index.html",revision:"aa4875070487fcdcb6065b8784f8a958"},{url:"tags/笔记/index.html",revision:"230b1a76312379a78d1b201d1b39be7c"},{url:"tags/羊了个羊/index.html",revision:"097867706f1437028e87b83497cf6caa"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
