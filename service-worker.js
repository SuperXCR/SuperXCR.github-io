if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let b={};const s=e=>a(e,c),f={module:{uri:c},exports:b,require:s};i[c]=Promise.all(d.map((e=>f[e]||s(e)))).then((e=>(r(...e),b)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"8598431ab19364aabfdb16d87c9f0afa"},{url:"about/index.html",revision:"e053e26129ad88c7ed0b6dc3c4fc870c"},{url:"archives/2022/07/index.html",revision:"4a9101cd6a3b99af248e93e93bd65106"},{url:"archives/2022/08/index.html",revision:"e55419f6b169378799276e33fe4673c7"},{url:"archives/2022/09/index.html",revision:"1beb2a991f483082a2b552190793645d"},{url:"archives/2022/11/index.html",revision:"09b6fb6dcb0a7a3fecca9ab4d7dbce66"},{url:"archives/2022/index.html",revision:"46fce4a91ffb6257d21a220e0964331d"},{url:"archives/2022/page/2/index.html",revision:"76469dde4b8af472caf8dc6f0b62dcba"},{url:"archives/2023/03/index.html",revision:"d2f04db3a254ec8329c58076413e1252"},{url:"archives/2023/index.html",revision:"a6dde43ee04062864eac1f08d77001bb"},{url:"archives/index.html",revision:"4c6ece30894ebe2bb4e14adf83bcf80b"},{url:"archives/page/2/index.html",revision:"0bc2235206534c4955968cb018930cd8"},{url:"bangumis/index.html",revision:"7baafc452b584e33ea8c954a99d98995"},{url:"categories/CSS/index.html",revision:"fbfde7d1abc24df543b18578856412ac"},{url:"categories/HTML/index.html",revision:"7a0baf369f06c5e97a437bb1fdf58f9a"},{url:"categories/index.html",revision:"b1e662ba14cb46c68bcd165ec9fc21a6"},{url:"categories/Java/index.html",revision:"43618f0a20eec49c01b169fc18b5888a"},{url:"categories/Markdown/index.html",revision:"af5b0716e3df2331e0bec45b78ddfa09"},{url:"categories/Maven/index.html",revision:"80d4bfefb944580a4f9c9c6faae05af3"},{url:"categories/MySQL/index.html",revision:"3c5c145b5a57fc0fa657e139a2b7727c"},{url:"categories/小工具/index.html",revision:"f7056c745187fd08d9e9c23076b9f3a1"},{url:"categories/小技巧/index.html",revision:"ee97ef54917671210a7fab89bad00215"},{url:"comments/index.html",revision:"641a1f39bf5b65b8ac72bb76d9fa9605"},{url:"css_layout/sun_moon.css",revision:"4abceaaca358b210a5661539abd0e282"},{url:"css/custom.css",revision:"d6b1ef7990411f1d54d0604fed292c6a"},{url:"css/custom.js",revision:"e305bbaa411007578f2656c8275d96be"},{url:"css/iconfont.css",revision:"c6631c9dd1321bcc0c9a886740e32f53"},{url:"css/index.css",revision:"d0e106c16b6c1c2188d6388fddbe46e9"},{url:"css/loading.css",revision:"8542c809d7295dad86a3bc31b3ec9c20"},{url:"css/music.css",revision:"0caf2d33a015fb6e90741c94bfe2a27f"},{url:"css/universe.css",revision:"4717a52a44176b9e02139ec5633b83a3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fcircle/index.html",revision:"9997413004cab870679b3651a0e3c723"},{url:"Gallery/cute.html",revision:"710b09a8bea8491dd61a7aad16245d57"},{url:"Gallery/index.html",revision:"16883c8b5805851876ed2c51fcca2ba4"},{url:"Gallery/ohmygirl.html",revision:"41002c699546cb9c0f5845ea29f2b045"},{url:"game/index.html",revision:"b4bc33e3740813a2c4f6415ab74d81f6"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"97d82741d15b425aa850e6d61b9f3b47"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"6e32d12cc3ad5617c4177c067ac70b88"},{url:"js/ali_font.js",revision:"6c5feb2cf0d3eea0176cee4fdd1f2f35"},{url:"js/countup.js",revision:"7baadf7bad427c145fb31aa080534ec1"},{url:"js/custom.js",revision:"e305bbaa411007578f2656c8275d96be"},{url:"js/main.js",revision:"39453e6dfcf396d99641c86890772c82"},{url:"js/music.js",revision:"8f9551274d5b820dd561b66678ceee01"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/title.js",revision:"e1afdca6b3edfe9316318ed492925304"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"38d93ea8f5147b3e7257b8cc47357922"},{url:"music/index.html",revision:"871a893123d86613a3658e2d572ebe3c"},{url:"page/2/index.html",revision:"ca0e4442d82700d0c71d236d4c6b5bb6"},{url:"public/service-worker.js",revision:"98758ead82429a89f45f8fc070835ca5"},{url:"public/workbox-19896c93.js",revision:"56ad33eb983948be312838f595588cef"},{url:"SuperXCR/24bd5933.html",revision:"9fee7d39703fd2745732c7e6db68738b"},{url:"SuperXCR/3008f9ff.html",revision:"76e7124940843abbd9d3496bf907dbd1"},{url:"SuperXCR/3608f6dd.html",revision:"81a95e596e26c92b4ad46152a3dc05fc"},{url:"SuperXCR/3ce8deb9.html",revision:"9ffac6a0a0e3280b0d548d91afb4a677"},{url:"SuperXCR/5a789e17.html",revision:"11c3f089fb0da360ae42d47573be473a"},{url:"SuperXCR/7f8be62d.html",revision:"6e7e656ff9f7a3aeb1793cd86d4f8519"},{url:"SuperXCR/88b49e9a.html",revision:"2998b269e9f6a09f930351387d0f7f58"},{url:"SuperXCR/8eb491b8.html",revision:"05b886b3cf02da3a3213ab080a4e9ef8"},{url:"SuperXCR/9a013174.html",revision:"d345e61f6db6627c5f523acee4c30b89"},{url:"SuperXCR/a219e661.html",revision:"8e803bd058713df595e4b5844d6b2041"},{url:"SuperXCR/a574217b.html",revision:"4028cf7d253ec3c773bc1c5249c7c4a6"},{url:"SuperXCR/b2444a9.html",revision:"87e2a53afb36743545b312d98e5593ad"},{url:"SuperXCR/bf9da926.html",revision:"912d99d6f2ddce038dd8e3015d982b99"},{url:"SuperXCR/bfa56f5e.html",revision:"34aa78a6bfd95367875c5db412eb5b16"},{url:"SuperXCR/c24675b4.html",revision:"4909b13c067bf5ff7cd9aab7e552092b"},{url:"SuperXCR/cbdf841b.html",revision:"0aa901bcecc2362407761f627fda0e9d"},{url:"tags/CSS/index.html",revision:"5eb1c0a4b07bbb5aee9e12ef096f4bc4"},{url:"tags/hexo/index.html",revision:"d8499f1959705b40b1d42eb8fbf9a85d"},{url:"tags/HTML/index.html",revision:"e6709e47cf7da61247f5988af5de04aa"},{url:"tags/index.html",revision:"970266706951dfa9ed255b091f8d8021"},{url:"tags/Java/index.html",revision:"38e809e52720bb8d939e13d07bd930f6"},{url:"tags/Markdown/index.html",revision:"8a1c5e5338d0c55fdebbde3bc1dfd505"},{url:"tags/Maven安装配置/index.html",revision:"8cab3f5e456abcf6f297b6d99ea2b0e9"},{url:"tags/MySQL学习/index.html",revision:"4fb49ec310b8a76871eab97c0d052d32"},{url:"tags/MySQL安装教程/index.html",revision:"687a71d2aa8758eacd53a6630808e34a"},{url:"tags/Navicat/index.html",revision:"2a6c15560163ec4b4bd8cb12f93a7e6b"},{url:"tags/前端/index.html",revision:"ffe06deb20a5eb3a9f069e1edeb7d291"},{url:"tags/定位/index.html",revision:"51250dc70bf6a40f03b0a6cb8680909b"},{url:"tags/文章上传测试/index.html",revision:"c181e10b8da496e1ea865d7ac2a0b3fb"},{url:"tags/盒模型/index.html",revision:"0bdff6c804ccbac014971d2d1911837d"},{url:"tags/笔记/index.html",revision:"d2ccd17fc606a6b7af065a31e0071ee5"},{url:"tags/羊了个羊/index.html",revision:"72a5422bc6fa48bdcdd3d296cb6ba751"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
