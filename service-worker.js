if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const n=e=>d(e,r),l={module:{uri:r},exports:s,require:n};i[r]=Promise.all(c.map((e=>l[e]||n(e)))).then((e=>(a(...e),s)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/07/13/Hexo学习日记/index.html",revision:"65eec169f27c0c348bee3b0670a09c8e"},{url:"2022/08/20/Markdown基本语法/index.html",revision:"133c8d90020b1ccd8f59f2dd8fbfcd95"},{url:"2022/08/20/Test/index.html",revision:"ce274ecdb6c5f45b6e6f1729dcee91f1"},{url:"2022/08/31/Java基础学习（1）/index.html",revision:"bc71aca89dfffbea1e95ad444e522319"},{url:"2022/08/31/Java基础学习（2）/index.html",revision:"3a550d3f76d3637e73904b8bb35ec383"},{url:"2022/08/31/Java基础学习（3）/index.html",revision:"12ceda9de353e32000114fd65d803ad5"},{url:"2022/09/01/认识-CSS（1）/index.html",revision:"c562fcc0be24c8c354c63e64cf986173"},{url:"2022/09/01/认识-CSS（2）/index.html",revision:"68d47a1e4a2a64ce56c22ddabd29a588"},{url:"2022/09/01/认识-CSS（3）/index.html",revision:"a73082e94420031ebfed0381aae682b1"},{url:"2022/09/01/认识-HTML/index.html",revision:"0e5a621a09c827ee837077d454f90c0e"},{url:"404.html",revision:"4a3c4addd25120840c72d7f8e0d266ae"},{url:"about/index.html",revision:"4520042678a8249de021c8a3718657b8"},{url:"archives/2022/07/index.html",revision:"47e0e602d2664a27cd24a1a225dfc8b2"},{url:"archives/2022/08/index.html",revision:"fc175bddbeb10665753b7262766893ad"},{url:"archives/2022/09/index.html",revision:"c841c81002d04e426675c4b52f664746"},{url:"archives/2022/index.html",revision:"ff889a68871fc0fbcad5182756aa3645"},{url:"archives/index.html",revision:"883e788c73037772f469d9183755c3dd"},{url:"bangumis/index.html",revision:"2af6892e42f036218c76435cca9ac5e7"},{url:"categories/CSS/index.html",revision:"598dbc9914ba530f48327e64a41a13d5"},{url:"categories/CSS/前端/index.html",revision:"19efedd6a919dbd1a24aa34323209434"},{url:"categories/CSS/前端/定位/index.html",revision:"37476682811637ccd0767dacb0074458"},{url:"categories/CSS/前端/盒模型/index.html",revision:"aad4fd80c3d4a57061f60768fb426cf5"},{url:"categories/HTML/index.html",revision:"ca93ba65c13e9d06824f14fc508b24a8"},{url:"categories/HTML/前端/index.html",revision:"7784fc858154d7b4aa79994df986840b"},{url:"categories/index.html",revision:"17631c2218037a890cc130b0ddec6750"},{url:"categories/Java/index.html",revision:"c27fc21665c19d736db891cd00eada65"},{url:"categories/Markdown/index.html",revision:"07742e55ba7434a43d49c5f7be7c5c7a"},{url:"css_layout/sun_moon.css",revision:"4abceaaca358b210a5661539abd0e282"},{url:"css/custom.js",revision:"e305bbaa411007578f2656c8275d96be"},{url:"css/index.css",revision:"82d7b1a18e0599f637d793db48b0543f"},{url:"css/universe.css",revision:"4717a52a44176b9e02139ec5633b83a3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/cute.html",revision:"aed46b393eda7e37c936d9c5b976b002"},{url:"Gallery/index.html",revision:"82ac431830ec08d0529b03b7ca13c032"},{url:"Gallery/ohmygirl.html",revision:"172ac41e8348444bdc705e438a4cc8d4"},{url:"game/index.html",revision:"58e95c9b40b9d4ce049c54038314c2a4"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"97d82741d15b425aa850e6d61b9f3b47"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"5c6e27e34e999cc6ae926b106d530b4e"},{url:"js/custom.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"45617a5c0564d07033e9ec0de5a69c0f"},{url:"tags/CSS/index.html",revision:"393dc0e08415c5f66c44e6240c8cada3"},{url:"tags/hexo/index.html",revision:"294fd236b42cbacc9732d512e181cbde"},{url:"tags/HTML/index.html",revision:"5c8b7a0e138d2724e090616fe1a18815"},{url:"tags/index.html",revision:"afd6044cafedb47d54945892a4179bab"},{url:"tags/Java/index.html",revision:"5dfcd6df60b10c8a00add39be1bd0a5a"},{url:"tags/Markdown/index.html",revision:"5bc84995ffe710ab51da864cb1fce8d0"},{url:"tags/文章上传测试/index.html",revision:"5d19795652a4faba59598be4b355d1e2"},{url:"tags/笔记/index.html",revision:"c1dbf2864d34305d74a85fcb63380de1"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
