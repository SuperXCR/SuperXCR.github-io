if(!self.define){let e,i={};const r=(r,a)=>(r=new URL(r+".js",a).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const b=e=>r(e,c),f={module:{uri:c},exports:s,require:b};i[c]=Promise.all(a.map((e=>f[e]||b(e)))).then((e=>(d(...e),s)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"db61fd401ae6e8cb68e3bd7b0c8549f9"},{url:"about/index.html",revision:"3c223f00f883a0899fa043c58a2eb420"},{url:"archives/2022/07/index.html",revision:"59d257319f6a23273b0718095aa639bc"},{url:"archives/2022/08/index.html",revision:"ca6682cfc166bd4d61e97ff62096d997"},{url:"archives/2022/09/index.html",revision:"e1b89d80e5fa40c3ec8c57efface5280"},{url:"archives/2022/index.html",revision:"d6008cd02aa34517c55884adb76fa403"},{url:"archives/2022/page/2/index.html",revision:"9f28f7297281f5475c4f1bda14679607"},{url:"archives/index.html",revision:"5afd165240ee9ee3a54f7c7a5c4c7381"},{url:"archives/page/2/index.html",revision:"c02961ed5876618e4f5e7c686483b5f4"},{url:"bangumis/index.html",revision:"ea843a38b387ff7c026585edb51ff425"},{url:"categories/CSS/index.html",revision:"ad5bfbca4ef82db511ea50466bdad03c"},{url:"categories/HTML/index.html",revision:"01a6e6d6b2f740bd1b0837c5c9b840df"},{url:"categories/index.html",revision:"c6306fed608548b2d8caafe99178bdb5"},{url:"categories/Java/index.html",revision:"e8da2e6ed802b6e1c77416fbac59d019"},{url:"categories/Markdown/index.html",revision:"5debb587f686d70150cf322811476afe"},{url:"categories/小技巧/index.html",revision:"d1e199099ba6a5a9af98aa7e9937bd6e"},{url:"css_layout/sun_moon.css",revision:"4abceaaca358b210a5661539abd0e282"},{url:"css/custom.js",revision:"e305bbaa411007578f2656c8275d96be"},{url:"css/index.css",revision:"82d7b1a18e0599f637d793db48b0543f"},{url:"css/universe.css",revision:"4717a52a44176b9e02139ec5633b83a3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/cute.html",revision:"0a4fc2892401b71bf57c641022ef7665"},{url:"Gallery/index.html",revision:"8595a82a758959b70547a6c9d714ff85"},{url:"Gallery/ohmygirl.html",revision:"330d50163f59b9b2dba7d7615b55cd13"},{url:"game/index.html",revision:"cb895a3a6d8f2db7eda28b8918069c77"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"97d82741d15b425aa850e6d61b9f3b47"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"1c973efa013addd4c6bf41025de54756"},{url:"js/custom.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"65ffd8587dac8c7443c8181ed2dfb086"},{url:"page/2/index.html",revision:"ee8399b3329ff7493f4c2cada32e7184"},{url:"public/service-worker.js",revision:"98758ead82429a89f45f8fc070835ca5"},{url:"public/workbox-19896c93.js",revision:"56ad33eb983948be312838f595588cef"},{url:"SuperXCR/24bd5933.html",revision:"934fb548a8442ac66c9410f9adea06f6"},{url:"SuperXCR/3008f9ff.html",revision:"59d3bb710f9b9746cec045eafbae5a71"},{url:"SuperXCR/3608f6dd.html",revision:"11625897b55b5f302b50257e14679a7e"},{url:"SuperXCR/3ce8deb9.html",revision:"43c8707ae63d57669fecbd34dfd78229"},{url:"SuperXCR/5a789e17.html",revision:"69c3e2843d5f3b4325f96a27fbac4a13"},{url:"SuperXCR/88b49e9a.html",revision:"395b392ce3c3a8024c44c8a1ff1383fb"},{url:"SuperXCR/8eb491b8.html",revision:"3a2d89798d638a5b17306c27af13b635"},{url:"SuperXCR/9a013174.html",revision:"75b0612adece0aeb638a7df62ee6690c"},{url:"SuperXCR/a219e661.html",revision:"b0bba2f430bd48957e4c410f30e3c66e"},{url:"SuperXCR/a574217b.html",revision:"e51a50800cd9f6770ffcbbc9207323e9"},{url:"SuperXCR/bf9da926.html",revision:"5cc22c62e30f03efdbbc2e4fd89bea03"},{url:"SuperXCR/cbdf841b.html",revision:"69514bd0d95151edfbb6c6ba6916d8d5"},{url:"tags/CSS/index.html",revision:"f7d554b42c7fc150823b2c40c85ced86"},{url:"tags/hexo/index.html",revision:"88993dd2562fcd66f157569ff7b287e5"},{url:"tags/HTML/index.html",revision:"a6bad56c9d8f12482bd78598b431fb55"},{url:"tags/index.html",revision:"7a6ee525c2233188aa2345e059689451"},{url:"tags/Java/index.html",revision:"528e8ad7056bde3fbba48a41ce0d0e18"},{url:"tags/Markdown/index.html",revision:"21e39c09f11e1281b5a003e4b0799842"},{url:"tags/前端/index.html",revision:"e6265be0635a37ce2c7806c0d8d2df96"},{url:"tags/定位/index.html",revision:"ea22e71d88be695f91c5d413eb97def1"},{url:"tags/文章上传测试/index.html",revision:"518dc2f175605bd7fbd7d42120577609"},{url:"tags/盒模型/index.html",revision:"f1b17d12455c14bdd1489595511bbfe4"},{url:"tags/笔记/index.html",revision:"beaecf203e425313b8a50a1c7c7fc63f"},{url:"tags/羊了个羊/index.html",revision:"ca8630a84755096858e2b78826c83469"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
