(function(t){function e(e){for(var r,a,o=e[0],c=e[1],p=e[2],l=0,g=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&g.push(n[a][0]),n[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(g.length)g.shift()();return s.push.apply(s,p||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],r=!0,o=1;o<i.length;o++){var c=i[o];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=i[0]))}return t}var r={},n={app:0},s=[];function a(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=r,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(i,r,function(e){return t[e]}.bind(null,r));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var p=0;p<o.length;p++)e(o[p]);var u=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},3720:function(t,e,i){"use strict";var r=i("4667"),n=i.n(r);n.a},4667:function(t,e,i){},"4ba4":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Links"),t._l(t.repos,(function(e){return[i("div",{key:e.title,on:{mouseenter:function(i){return t.enter(e.title)},mouseleave:t.leave}},[i("div",{staticClass:"card",class:{transparent:""!=t.hovered&&e.title!=t.hovered},style:"background-image: url(bg/"+(e.bg||"image.png")+")"},[i("div",{staticClass:"d"},[i("h3",[t._v(t._s(e.title))]),i("h4",[t._v(t._s(e.github))]),i("div",{staticClass:"card-footer"},[i("a",{on:{click:function(i){return i.preventDefault(),t.open(e.title)}}},[t._v("DETAILS")]),i("a",{staticClass:"card-ext",attrs:{href:e.href,target:"_blank"}},[t._v("OPEN")])])])])]),i("Modal",{directives:[{name:"show",rawName:"v-show",value:t.active==e.title,expression:"active == repo.title"}],key:e.github,attrs:{data:e},on:{close:t.close}})]}))],2)},s=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"modal-back",on:{click:function(e){return t.$emit("close")}}}),i("div",{staticClass:"modal"},[i("div",{staticClass:"modal-title",style:"background-image: url(bg/"+(t.data.bg||"image.png")+")"},[t._v(" "+t._s(t.data.title)+" "),i("div",{staticClass:"modal-repo"},[t._v(t._s(t.data.github))]),i("div",{staticClass:"modal-desc"},[t._v(t._s(t.data.description))]),i("a",{staticClass:"modal-ext",attrs:{href:t.data.href,target:"_blank"}},[t._v(" 新しいタブで開く "),i("i",{staticClass:"fas fa-external-link-alt"})]),i("br"),i("a",{staticClass:"modal-ext",attrs:{href:"https://github.com/"+t.data.github,target:"_blank"}},[t._v(" GitHubで開く "),i("i",{staticClass:"fab fa-github"})])])])])},o=[],c={name:"modal",props:["data"],components:{},methods:{}},p=c,u=(i("6450"),i("2877")),l=Object(u["a"])(p,a,o,!1,null,"c3af68de",null),g=l.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"links"},[i("div",[i("a",{attrs:{href:"https://github.com/mtsgi",target:"_blank"}},[i("i",{staticClass:"fab fa-github"})])]),i("h2",[t._v("mtsgi "),i("span",[t._v("github.io")])])])}],f={name:"modal",methods:{}},b=f,m=(i("f55d"),Object(u["a"])(b,h,d,!1,null,"9f0d4278",null)),v=m.exports,k={name:"app",components:{Links:v,Modal:g},methods:{enter:function(t){this.hovered=t},leave:function(){this.hovered=""},open:function(t){this.active=t},close:function(){this.active=""}},data:function(){return{hovered:"",active:"",repos:[{href:"https://mtsgi.github.io/kit",title:"kitDesktop",github:"mtsgi/kit",description:"kitDesktopはインストール不要でJavaScript上で完全に動作するオープンソースのデスクトップ環境です。\nすべてのkitアプリケーションはHTML構造にJavaScript、それとJavaScriptを用いたkit apps frameworkを用いて記述されていて、呼び出されるとAjaxでロードされます。\nサーバーサイド技術は用いられていません。",bg:"kit.png"},{href:"https://mtsgi.github.io/kitdocs",title:"kitドキュメント",github:"mtsgi/kitdocs",description:"kitアプリケーションを作成するためのkitシステム及びkit apps frameworkに関するドキュメントです。\nkitアプリケーションはHTMLと少しのJavaScriptの知識があればすぐに開発することができます。CSSを記述してアプリケーションのスタイルを調整することも可能ですが、kitのスタイルフレームワークであるkitstrapを使用するともっと簡単にアプリケーションのスタイルやレイアウトを組み立てることができます。",bg:"kit.png"},{href:"https://mtsgi.github.io/kish/docs",title:"kish",github:"mtsgi/kish",description:"kishはkitDesktopのための強力なシェルです。\nkit上で様々なkishコマンドを利用できます。",bg:"kish.png"},{href:"https://kpkg.herokuapp.com",title:"kpt",github:"mtsgi/kpt",description:"kitアプリパッケージを管理・転送するためのWebアプリケーションです。\nkishからkptコマンドを利用することでkitアプリケーションの簡単に検索・バージョン管理・アップデートが行えます。"},{href:"https://mtsgi.github.io/kitstrap/docs",title:"kitstrap",github:"mtsgi/kitstrap",description:"簡単に導入・カスタマイズできる軽量CSSフレームワークです。\n・kitstrapはkitDesktopのデザイン言語に基づいています。\n・kitstrapパッケージではフォントやカーソルの設定はモジュール化されています。\n・kitstrapは!important規則を使用しません。",bg:"kitstrap.png"},{href:"https://mtsgi.github.io/garnet",title:"Garnet",github:"mtsgi/garnet",description:"GarnetはRubyの処理系を持つプログラミング言語です。\n柔軟な記法と絵文字を含む変数名、記号による簡潔で特徴的な言語記法を実現します。"},{href:"https://mtsgi.github.io/gradator",title:"Gradator",github:"mtsgi/gradator",description:"CSS3グラデーションを簡単に作成、保存できるWebアプリケーションです。",bg:"gradator.png"},{href:"https://github.com/mtsgi/cpextend",title:"Cpex",github:"mtsgi/cpextend",description:"CoursePowerをちょっと便利にしてくれるChrome拡張機能です。",bg:"cpex.png"},{href:"https://mtsgi.github.io/nqueen",title:"N-Queen",github:"mtsgi/nqueen",description:"JavaScriptでNクイーン問題を自動的に生成します。"},{href:"https://mtsgi.github.io/kakeibo",title:"JS家計簿",github:"mtsgi/kakeibo",description:"DBを使わない(LocalStorageで完結する)軽量クライアントサイド家計簿です。"},{href:"https://github.com/mtsgi/extweet",title:"Extweet",github:"mtsgi/extweet",description:"TwitterにWebページや選択テキストを一瞬で共有するChrome拡張です。"},{href:"https://mtsgi.github.io/pizzada",title:"ピザ打",github:"mtsgi/pizzada",description:"JavaScriptで動作するシンプルなタイピングゲームです。お皿は流れてきません。"},{href:"https://mtsgi.github.io/happytap",title:"Happy Tap",github:"mtsgi/happytap",description:"2人対戦用のPWA対応のシンプルな連打ゲームです。"},{href:"https://mtsgi.github.io/imageresizer",title:"Image Resizer",github:"mtsgi/imageresizer",description:"画像の縦横比を維持しながら画像をリサイズするツールです。\nJavaScriptのcanvas制御で実行するため、画像をサーバーにアップロードする必要がありません。"},{href:"https://mtsgi.github.io/githubtl",title:"GitHubTL",github:"mtsgi/githubtl",description:"ユーザーのGitHubタイムラインを表示できるWebアプリです。"},{href:"https://mtsgi.github.io/insregexp",title:"Instant RegExp",github:"mtsgi/insregexp",description:"正規表現をリアルタイムで評価する簡単なビューワーです。"}]}}},_=k,w=(i("3720"),Object(u["a"])(_,n,s,!1,null,"d3f80596",null)),y=w.exports,x=i("9483");Object(x["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});i("5ed1"),i("b634"),i("de80"),i("38fd");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(y)}}).$mount("#app")},6450:function(t,e,i){"use strict";var r=i("c475"),n=i.n(r);n.a},c475:function(t,e,i){},f55d:function(t,e,i){"use strict";var r=i("4ba4"),n=i.n(r);n.a}});
//# sourceMappingURL=app.93703144.js.map