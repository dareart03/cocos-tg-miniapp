System.register("chunks:///_virtual/main",["./UserInfo.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/UserInfo.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.js","./index3.js"],(function(e){var r,n,t,a,i,o,s,u,c,l,m,p,h;return{setters:[function(e){r=e.applyDecoratedDescriptor,n=e.inheritsLoose,t=e.initializerDefineProperty,a=e.assertThisInitialized,i=e.asyncToGenerator,o=e.regeneratorRuntime},function(e){s=e.cclegacy,u=e._decorator,c=e.Label,l=e.Component},function(e){m=e.init,p=e.viewport},function(e){h=e.retrieveLaunchParams}],execute:function(){var f,g,d,v,I,b,w;s._RF.push({},"298a8hr94BAFbfJ2oNIMxz8","UserInfo",void 0);var y=u.ccclass,L=u.property;e("UserInfoManager",(f=y("UserInfoManager"),g=L(c),d=L(c),f((b=r((I=function(e){function r(){for(var r,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return r=e.call.apply(e,[this].concat(i))||this,t(r,"usernameLabel",b,a(r)),t(r,"premiumLabel",w,a(r)),r.isPremium=!1,r.WIKI_IMAGE="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",r}n(r,e);var s=r.prototype;return s.onLoad=function(){try{var e;m();var r=h();p.mount();var n=null==(e=r.tgWebAppData)?void 0:e.user;if(n){var t=n.username||n.first_name||"Пользователь";this.isPremium=Boolean(n.is_premium),this.usernameLabel.string="Ник: @"+t,this.premiumLabel.string="Premium: "+(this.isPremium?"Да ⭐️":"Нет")}else this.usernameLabel.string="Нет данных Telegram",this.premiumLabel.string="Откройте через Telegram";p.expand.isAvailable()&&p.expand()}catch(e){console.warn("Не Telegram WebApp:",e)}},s.shareScreen=function(){var e=i(o().mark((function e(){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=null==(r=window.Telegram)?void 0:r.WebApp,!this.isPremium||null==n||!n.shareToStory){e.next=5;break}return e.next=4,this.shareWikiImageToStory(n);case 4:return e.abrupt("return");case 5:this.openImageForManualSave(n);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),s.shareWikiImageToStory=function(){var e=i(o().mark((function e(r){var n,t,a,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.loadImage(this.WIKI_IMAGE);case 3:n=e.sent,t=document.createElement("canvas"),a=t.getContext("2d"),t.width=n.width,t.height=n.height,a.drawImage(n,0,0),i=t.toDataURL("image/png"),r.shareToStory(i,{text:"Тестовая история 😊"}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert("Не удалось подготовить изображение"),console.error(e.t0);case 17:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(r){return e.apply(this,arguments)}}(),s.openImageForManualSave=function(e){confirm("Картинка откроется в Telegram.\nНажмите ⋮ → Сохранить в галерею")&&(null!=e&&e.openLink?e.openLink(this.WIKI_IMAGE):window.open(this.WIKI_IMAGE,"_blank"))},s.loadImage=function(e){return new Promise((function(r,n){var t=new Image;t.crossOrigin="anonymous",t.onload=function(){return r(t)},t.onerror=n,t.src=e}))},r}(l)).prototype,"usernameLabel",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=r(I.prototype,"premiumLabel",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=I))||v));s._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});