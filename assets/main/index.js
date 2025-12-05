System.register("chunks:///_virtual/main",["./UserInfo.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/UserInfo.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.js","./index3.js"],(function(e){var r,n,i,t,a,o,s,l,u,m,c;return{setters:[function(e){r=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,t=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,s=e.Label,l=e.Component},function(e){u=e.init,m=e.viewport},function(e){c=e.retrieveLaunchParams}],execute:function(){var p,f,h,b,d,g,v;a._RF.push({},"298a8hr94BAFbfJ2oNIMxz8","UserInfo",void 0);var y=o.ccclass,L=o.property;e("UserInfoManager",(p=y("UserInfoManager"),f=L(s),h=L(s),p((g=r((d=function(e){function r(){for(var r,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r=e.call.apply(e,[this].concat(a))||this,i(r,"usernameLabel",g,t(r)),i(r,"premiumLabel",v,t(r)),r.isPremium=!1,r}n(r,e);var a=r.prototype;return a.onLoad=function(){try{var e;u();var r=c();if(m.mount(),null!=(e=r.tgWebAppData)&&e.user){var n=r.tgWebAppData.user,i=n.username||n.first_name||"Пользователь";this.isPremium=Boolean(n.is_premium),this.usernameLabel&&(this.usernameLabel.string="Ник: @"+i),this.premiumLabel&&(this.premiumLabel.string="Premium: "+(this.isPremium?"Да ⭐️":"Нет"))}else this.usernameLabel&&(this.usernameLabel.string="Нет данных Telegram"),this.premiumLabel&&(this.premiumLabel.string="Откройте через Telegram");m.expand.isAvailable()&&m.expand(),m.requestFullscreen.isAvailable()&&m.requestFullscreen()}catch(e){console.log("Не в Telegram или ошибка init:",e)}},a.shareScreen=function(){var e,r=null==(e=window.Telegram)?void 0:e.WebApp,n="https://via.placeholder.com/1080x1920.png?text=Test+Story+Image";if(this.isPremium&&r)"function"==typeof r.shareToStory?r.shareToStory(n,{text:"Мой скриншот 😊"}):r.openLink(n);else if(confirm("Хотите скачать вашу историю?")){var i=document.getElementById("GameCanvas");if(!i)return;var t=document.createElement("a");t.href=i.toDataURL("image/png"),t.download="story.png",t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}},r}(l)).prototype,"usernameLabel",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=r(d.prototype,"premiumLabel",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=d))||b));a._RF.pop()}}}));

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