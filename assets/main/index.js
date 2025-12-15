System.register("chunks:///_virtual/main",["./UserInfo.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/UserInfo.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.js","./index3.js"],(function(e){var r,i,n,t,a,o,s,l,u,m,p;return{setters:[function(e){r=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,t=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,s=e.Label,l=e.Component},function(e){u=e.init,m=e.viewport},function(e){p=e.retrieveLaunchParams}],execute:function(){var c,f,b,h,d,g,L;a._RF.push({},"298a8hr94BAFbfJ2oNIMxz8","UserInfo",void 0);var y=o.ccclass,v=o.property;e("UserInfoManager",(c=y("UserInfoManager"),f=v(s),b=v(s),c((g=r((d=function(e){function r(){for(var r,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=e.call.apply(e,[this].concat(a))||this,n(r,"usernameLabel",g,t(r)),n(r,"premiumLabel",L,t(r)),r.isPremium=!1,r}i(r,e);var a=r.prototype;return a.onLoad=function(){try{var e;u();var r=p();if(m.mount(),null!=(e=r.tgWebAppData)&&e.user){var i=r.tgWebAppData.user,n=i.username||i.first_name||"Пользователь";this.isPremium=Boolean(i.is_premium),this.usernameLabel&&(this.usernameLabel.string="Ник: @"+n),this.premiumLabel&&(this.premiumLabel.string="Premium: "+(this.isPremium?"Да ⭐️":"Нет"))}else this.usernameLabel&&(this.usernameLabel.string="Нет данных Telegram"),this.premiumLabel&&(this.premiumLabel.string="Откройте через Telegram");m.expand.isAvailable()&&m.expand(),m.requestFullscreen.isAvailable()&&m.requestFullscreen()}catch(e){console.log("Не в Telegram или ошибка init:",e)}},a.shareScreen=function(){var e,r=null==(e=window.Telegram)?void 0:e.WebApp,i="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png";if(this.isPremium&&r)"function"==typeof r.shareToStory?r.shareToStory(i,{text:"Мой скриншот 😊"}):r.openLink(i);else if(confirm("Хотите скачать вашу историю?"))if(r&&"function"==typeof r.openLink)r.openLink(i);else{var n=document.createElement("a");n.href=i,n.download="story.png",document.body.appendChild(n),n.click(),document.body.removeChild(n)}},r}(l)).prototype,"usernameLabel",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=r(d.prototype,"premiumLabel",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=d))||h));a._RF.pop()}}}));

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