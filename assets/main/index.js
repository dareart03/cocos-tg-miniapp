System.register("chunks:///_virtual/main",["./UserInfo.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/UserInfo.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.js","./index3.js"],(function(e){var r,n,i,t,a,s,o,l,u,m,c;return{setters:[function(e){r=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,t=e.assertThisInitialized},function(e){a=e.cclegacy,s=e._decorator,o=e.Label,l=e.Component},function(e){u=e.init,m=e.viewport},function(e){c=e.retrieveLaunchParams}],execute:function(){var p,f,h,b,g,v,d;a._RF.push({},"298a8hr94BAFbfJ2oNIMxz8","UserInfo",void 0);var L=s.ccclass,y=s.property;e("UserInfoManager",(p=L("UserInfoManager"),f=y(o),h=y(o),p((v=r((g=function(e){function r(){for(var r,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return r=e.call.apply(e,[this].concat(a))||this,i(r,"usernameLabel",v,t(r)),i(r,"premiumLabel",d,t(r)),r.isPremium=!1,r}n(r,e);var a=r.prototype;return a.onLoad=function(){try{var e;u();var r=c();if(m.mount(),null!=(e=r.tgWebAppData)&&e.user){var n=r.tgWebAppData.user,i=n.username||n.first_name||"Пользователь";this.isPremium=Boolean(n.is_premium),this.usernameLabel&&(this.usernameLabel.string="Ник: @"+i),this.premiumLabel&&(this.premiumLabel.string="Premium: "+(this.isPremium?"Да ⭐️":"Нет"))}else this.usernameLabel&&(this.usernameLabel.string="Нет данных Telegram"),this.premiumLabel&&(this.premiumLabel.string="Откройте через Telegram");m.expand.isAvailable()&&m.expand(),m.requestFullscreen.isAvailable()&&m.requestFullscreen()}catch(e){console.log("Не в Telegram или ошибка init:",e)}},a.shareScreen=function(){var e,r=null==(e=window.Telegram)?void 0:e.WebApp,n="https://via.placeholder.com/1080x1920.png?text=Test+Story+Image";if(this.isPremium&&r)"function"==typeof r.shareToStory?r.shareToStory(n,{text:"Мой скриншот из мини‑приложения 😊"}):r.openLink(n);else if(confirm("Скачать историю?")){var i=document.getElementById("GameCanvas");if(!i)return void console.error("GameCanvas не найден для скачивания");var t=i.toDataURL("image/png"),a=document.createElement("a");a.href=t,a.download="screenshot.png",a.click()}},r}(l)).prototype,"usernameLabel",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=r(g.prototype,"premiumLabel",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=g))||b));a._RF.pop()}}}));

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