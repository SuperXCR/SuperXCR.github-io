if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const f=e=>a(e,c),b={module:{uri:c},exports:s,require:f};i[c]=Promise.all(r.map((e=>b[e]||f(e)))).then((e=>(d(...e),s)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"224928ff2d3e4abfc4f68a7478c40a33"},{url:"about/index.html",revision:"8cc90e6218703db6b38571d4cbdb9d3c"},{url:"archives/2022/07/index.html",revision:"7054eb564822e4d2889d6a1edc0a0586"},{url:"archives/2022/08/index.html",revision:"d27f05b1dd5afb724499aec228699e86"},{url:"archives/2022/09/index.html",revision:"5d9202c763f34652ff6a4c8a257e98ad"},{url:"archives/2022/index.html",revision:"ae725e4941ebeaca00cb58c89b836da9"},{url:"archives/2022/page/2/index.html",revision:"703f97f42480f24c34910f9d93c3d9ff"},{url:"archives/index.html",revision:"501bfccd0f60cfa168c3b7ac4a382f94"},{url:"archives/page/2/index.html",revision:"7fa7450361e8fd8929e86d60a5177451"},{url:"bangumis/index.html",revision:"c10e1c74cd6a2d806d09b3e14f511692"},{url:"categories/CSS/index.html",revision:"eaeed683304bc2b8088798e57e8a0bba"},{url:"categories/HTML/index.html",revision:"213239549ee7a3e1658abe29e3a9976d"},{url:"categories/index.html",revision:"92486b3f05aea0127673a66a2e6d5469"},{url:"categories/Java/index.html",revision:"39195c0c4e6fc2d8538cb1c09bcbd1ec"},{url:"categories/Markdown/index.html",revision:"c2cf4e86e57e001f89cb44ba2d12ca62"},{url:"categories/MySQL/index.html",revision:"ecad74a0ad51100f4e01303b2b474e9f"},{url:"categories/小工具/index.html",revision:"e1991a3abc7cf6a2409cb1cea8d50707"},{url:"categories/小技巧/index.html",revision:"906339837dc721431149ea008dd84e20"},{url:"css_layout/sun_moon.css",revision:"4abceaaca358b210a5661539abd0e282"},{url:"css/custom.js",revision:"e305bbaa411007578f2656c8275d96be"},{url:"css/index.css",revision:"82d7b1a18e0599f637d793db48b0543f"},{url:"css/universe.css",revision:"4717a52a44176b9e02139ec5633b83a3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/cute.html",revision:"f540fe0ecee796adeaa9057a392d6079"},{url:"Gallery/index.html",revision:"afe401cd102f51b1a5acd1219a8f7d00"},{url:"Gallery/ohmygirl.html",revision:"4e3f5cd3eef5d84faae7b40a7948fdf8"},{url:"game/index.html",revision:"bb70e4366d43eacd96c427d62ec2af16"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"97d82741d15b425aa850e6d61b9f3b47"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"e1a93fde0912ebb558f72c9223e455f8"},{url:"js/custom.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"6849f18062abc5e54e1008c6759e64a0"},{url:"page/2/index.html",revision:"b2c18bca75bfdaa9c99cbef7926b0299"},{url:"public/service-worker.js",revision:"98758ead82429a89f45f8fc070835ca5"},{url:"public/workbox-19896c93.js",revision:"56ad33eb983948be312838f595588cef"},{url:"SuperXCR/24bd5933.html",revision:"10c2193cf8560615a90aa52feabaf778"},{url:"SuperXCR/3008f9ff.html",revision:"d58fdaf5b60a11cb5a9c6a0e9fb3e5d0"},{url:"SuperXCR/3608f6dd.html",revision:"102d3b7b95a97c72f8001e1926a6305f"},{url:"SuperXCR/3ce8deb9.html",revision:"d34ee5000399decf5a5c0da8047f289b"},{url:"SuperXCR/5a789e17.html",revision:"705f95baa6f79b82d558d6e42e0249f3"},{url:"SuperXCR/88b49e9a.html",revision:"90adf48427107faa860194b0fe19ae15"},{url:"SuperXCR/8eb491b8.html",revision:"f2e29ce7a98677a039ddfe36bb9c14c1"},{url:"SuperXCR/9a013174.html",revision:"eeb00ad23ef1a50c725a01046d5f2eff"},{url:"SuperXCR/a219e661.html",revision:"9ac89a122273de9e6bfd828fbe1896e1"},{url:"SuperXCR/a574217b.html",revision:"5ba4ab857b179f0e92d2ab2706d84cf4"},{url:"SuperXCR/b2444a9.html",revision:"7db3ce7ee854dcee4b6ad93bcb089c95"},{url:"SuperXCR/bf9da926.html",revision:"601336a8dc5c3a05cc8ffa536904ea3c"},{url:"SuperXCR/bfa56f5e.html",revision:"4d94889f550c4216217525822d26e720"},{url:"SuperXCR/cbdf841b.html",revision:"8a561af240b03df745944c550542b232"},{url:"tags/CSS/index.html",revision:"c627e1e2fe23323dbb54ba0e8fcd69b6"},{url:"tags/hexo/index.html",revision:"f7b4675fbcf932f1d94490593ba55270"},{url:"tags/HTML/index.html",revision:"2d8e0a775351bd9a71b566b6db90a484"},{url:"tags/index.html",revision:"3e697ebd7b9c2912240bfc57de1808e0"},{url:"tags/Java/index.html",revision:"c9c157d311515dd4e7a02ed6aba03cdb"},{url:"tags/Markdown/index.html",revision:"e4b711541d037352889d68800e2e1c4b"},{url:"tags/MySQL安装教程/index.html",revision:"217cf886999bf5f5000c8824cfd69666"},{url:"tags/Navicat/index.html",revision:"19afa01890b04c2348ee0307610c05e9"},{url:"tags/前端/index.html",revision:"4eed86c26d80b54784c5d09092eaa781"},{url:"tags/定位/index.html",revision:"f0a3a3f9e854f06da56305d73211455b"},{url:"tags/文章上传测试/index.html",revision:"d0111339386ef4b115b7c25147979190"},{url:"tags/盒模型/index.html",revision:"23ddb1d5b0ad207017f959d0609b8547"},{url:"tags/笔记/index.html",revision:"02b2a43a8fecfcff7d965e9ed82d6f81"},{url:"tags/羊了个羊/index.html",revision:"6fbfde79c78723797c669ae403458546"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
