if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const b=e=>a(e,c),f={module:{uri:c},exports:s,require:b};i[c]=Promise.all(r.map((e=>f[e]||b(e)))).then((e=>(d(...e),s)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"c1c4fca083086d8a488052bed40b27a0"},{url:"about/index.html",revision:"92c6b3735539d602ade3b19a98963d4f"},{url:"archives/2022/07/index.html",revision:"d17be045f7e5f815126f47f9121f5eaf"},{url:"archives/2022/08/index.html",revision:"ea647c9b339f1858a18073950d2c60da"},{url:"archives/2022/09/index.html",revision:"bd33fc99722c3e3db405fa13eae79e23"},{url:"archives/2022/11/index.html",revision:"ec77f0d057d6599bc0ac16e2000a77e7"},{url:"archives/2022/index.html",revision:"c41bd49de72d7c1376134a7daca58f3d"},{url:"archives/2022/page/2/index.html",revision:"865dd8bfce738c60b2f40022bbc7c299"},{url:"archives/2023/03/index.html",revision:"267eb31bb56debc59c2af10124227130"},{url:"archives/2023/index.html",revision:"fe5c7d6f854fbeeed14e1df6bcc3a19f"},{url:"archives/index.html",revision:"14c0484518995bde5d816c18c2d5fd1f"},{url:"archives/page/2/index.html",revision:"d6d9f644f497ce723c0a1ef22f3e2e0a"},{url:"bangumis/index.html",revision:"5fdc27e3397668a3fa1bea4600eac428"},{url:"categories/CSS/index.html",revision:"0c0b26fed14d231281ad2e108f8b5dc6"},{url:"categories/HTML/index.html",revision:"1d7a8f9a31b80e9aac8fd9b3e5c3bd96"},{url:"categories/index.html",revision:"66ea3aed44f3f95249e05a5efc0ed5eb"},{url:"categories/Java/index.html",revision:"0b1f579e4ee5f12c858721059be5e415"},{url:"categories/Markdown/index.html",revision:"4c9a66ecbe49f6d922327c4f3fc6099a"},{url:"categories/Maven/index.html",revision:"caa552c44220a991d6b7d94c3fb834c9"},{url:"categories/MySQL/index.html",revision:"c2a05d2bdf032e86f8ed3ad78412fa97"},{url:"categories/小工具/index.html",revision:"1e59271f7d6cc2fa1f26ba6e74a5a63b"},{url:"categories/小技巧/index.html",revision:"1a1014bb984606e2b294b7507e44eb27"},{url:"css_layout/sun_moon.css",revision:"4abceaaca358b210a5661539abd0e282"},{url:"css/custom.js",revision:"e305bbaa411007578f2656c8275d96be"},{url:"css/index.css",revision:"4b807c94b600e42b499c9a977ae99764"},{url:"css/universe.css",revision:"4717a52a44176b9e02139ec5633b83a3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/cute.html",revision:"50068e305f1e0c3ff292797d70624679"},{url:"Gallery/index.html",revision:"3e6b785cfe41d4b6e55efe0da35b6e5e"},{url:"Gallery/ohmygirl.html",revision:"2bb7a90e591eb5d3b97eb88e81e8d6f9"},{url:"game/index.html",revision:"42c6bcf7483fc868d691d871e958eba8"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"97d82741d15b425aa850e6d61b9f3b47"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"150eb20f06ca9e01c4b1ecc543c6b26a"},{url:"js/custom.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/main.js",revision:"24c551cf03f9c2eff744ba6c6059a0f6"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"e5b952d311827ed78639492a3d241f0b"},{url:"page/2/index.html",revision:"7afb30421341bb1e7d63b54334273725"},{url:"public/service-worker.js",revision:"98758ead82429a89f45f8fc070835ca5"},{url:"public/workbox-19896c93.js",revision:"56ad33eb983948be312838f595588cef"},{url:"SuperXCR/24bd5933.html",revision:"1951576c6c56edb5a93c34960b88d7d2"},{url:"SuperXCR/3008f9ff.html",revision:"100e4e04d4ae7e130658fc3bb899234a"},{url:"SuperXCR/3608f6dd.html",revision:"a9c40690e6a731169424ef7c593b9a71"},{url:"SuperXCR/3ce8deb9.html",revision:"463bb174ad12cab71e1b8be68c649988"},{url:"SuperXCR/5a789e17.html",revision:"f9f225ae0b3b83a37583cbee43de2ec8"},{url:"SuperXCR/7f8be62d.html",revision:"632140378779def876021540507dfd72"},{url:"SuperXCR/88b49e9a.html",revision:"934f6431f5d137b16ee6391f1b05ff19"},{url:"SuperXCR/8eb491b8.html",revision:"e7a14ad7181ae78a048b9bf655260e6a"},{url:"SuperXCR/9a013174.html",revision:"aacfbb66a9f3242c720c44a3bd2382f6"},{url:"SuperXCR/a219e661.html",revision:"fe4fca6bda7c6ce184d0cdfb7c942c4c"},{url:"SuperXCR/a574217b.html",revision:"d9cf575032e76dda087960c3dd226c48"},{url:"SuperXCR/b2444a9.html",revision:"af3d85d084cdb1a9b584247758860421"},{url:"SuperXCR/bf9da926.html",revision:"87a7a7563f5491f76fcc6146cc8528d3"},{url:"SuperXCR/bfa56f5e.html",revision:"00b14ad73112d6d37c03b42a6581be2a"},{url:"SuperXCR/c24675b4.html",revision:"e3d7207c69871ca0faa0565505f36017"},{url:"SuperXCR/cbdf841b.html",revision:"c4fe36d8a9248f10e46071a6e634f1f1"},{url:"tags/CSS/index.html",revision:"3eb814e87aad8f454b1b413385920196"},{url:"tags/hexo/index.html",revision:"c32c394d368facc709562dc1d333103f"},{url:"tags/HTML/index.html",revision:"be5dd963de2c724df8cd3afaa8e44774"},{url:"tags/index.html",revision:"e9d8d16ce798dfd735a9e8099288c0cb"},{url:"tags/Java/index.html",revision:"f3dc60da9dc9e338b6b2792e8c445659"},{url:"tags/Markdown/index.html",revision:"b1f081ac8c4b5b76d588b3afe4e82012"},{url:"tags/Maven安装配置/index.html",revision:"7ab2f8d91fdf795b1cfaf18ad53113ef"},{url:"tags/MySQL学习/index.html",revision:"2d5264cc53910bc0aa1c868e4e49f0ab"},{url:"tags/MySQL安装教程/index.html",revision:"551948dad2bf6400afcf829963e7830e"},{url:"tags/Navicat/index.html",revision:"22b0255a2e55af1b9d4809be22f311fa"},{url:"tags/前端/index.html",revision:"86ea24b27977dad38f1511ecd38a3967"},{url:"tags/定位/index.html",revision:"044b19cc3ebbcfaa9c32b2c26f18a9dd"},{url:"tags/文章上传测试/index.html",revision:"eb86b697fdc5f3aec405e1e93c379bf3"},{url:"tags/盒模型/index.html",revision:"d41c607129d16ca01aa31ce1def4a677"},{url:"tags/笔记/index.html",revision:"3d31524aa8d753727a5dc29ed4fb339a"},{url:"tags/羊了个羊/index.html",revision:"89a1d46b22d21060e0c2342d7df8c53f"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
