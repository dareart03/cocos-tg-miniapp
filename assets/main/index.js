System.register("chunks:///_virtual/main",["./UserInfo.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/UserInfo.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.js","./index3.js"],(function(e){var r,n,i,t,a,o,s,l,u,c,m;return{setters:[function(e){r=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,t=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,s=e.Label,l=e.Component},function(e){u=e.init,c=e.viewport},function(e){m=e.retrieveLaunchParams}],execute:function(){var p,f,b,h,d,g,v;a._RF.push({},"298a8hr94BAFbfJ2oNIMxz8","UserInfo",void 0);var y=o.ccclass,L=o.property;e("UserInfoManager",(p=y("UserInfoManager"),f=L(s),b=L(s),p((g=r((d=function(e){function r(){for(var r,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r=e.call.apply(e,[this].concat(a))||this,i(r,"usernameLabel",g,t(r)),i(r,"premiumLabel",v,t(r)),r.isPremium=!1,r.userId=null,r.backendUrl="https://taro-backend-mydi.onrender.com",r}n(r,e);var a=r.prototype;return a.onLoad=function(){try{var e;u();var r=m();c.mount();var n=null==(e=r.tgWebAppData)?void 0:e.user;if(n){var i=n.username||n.first_name||"Пользователь";this.isPremium=Boolean(n.is_premium),this.userId=n.id,this.usernameLabel.string="Ник: @"+i,this.premiumLabel.string="Premium: "+(this.isPremium?"Да ⭐️":"Нет")}else this.usernameLabel.string="Нет данных Telegram",this.premiumLabel.string="Откройте через Telegram";c.expand.isAvailable()&&c.expand(),c.requestFullscreen.isAvailable()&&c.requestFullscreen()}catch(e){console.log("Ошибка инициализации Telegram:",e)}},a.shareScreen=function(){var e,r=null==(e=window.Telegram)?void 0:e.WebApp;if(r){var n=this.backendUrl+"/public/story.png";if(this.isPremium&&"function"==typeof r.shareToStory)r.shareToStory(n,{text:"Моя карта таро ✨"});else confirm("У вас нет Telegram Premium. Мы откроем картинку, чтобы вы могли сохранить её.")&&("function"==typeof r.openLink?r.openLink(n):window.open(n,"_blank"))}else alert("Открыто не в Telegram")},r}(l)).prototype,"usernameLabel",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=r(d.prototype,"premiumLabel",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=d))||h));a._RF.pop()}}}));

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