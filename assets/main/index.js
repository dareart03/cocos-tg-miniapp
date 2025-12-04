System.register("chunks:///_virtual/main",["./UserInfo.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/UserInfo.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.js","./index3.js"],(function(e){var r,n,i,t,a,s,l,u,o,c,m,p,h,b;return{setters:[function(e){r=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,t=e.assertThisInitialized,a=e.createClass},function(e){s=e.cclegacy,l=e._decorator,u=e.Label,o=e.view,c=e.ResolutionPolicy,m=e.Component},function(e){p=e.init,h=e.viewport},function(e){b=e.retrieveLaunchParams}],execute:function(){var f,g,L,v,d,y,_,w;s._RF.push({},"298a8hr94BAFbfJ2oNIMxz8","UserInfo",void 0);var P=l.ccclass,z=l.property;e("UserInfoManager",(f=P("UserInfoManager"),g=z(u),L=z(u),f(((w=function(e){function r(){for(var r,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return r=e.call.apply(e,[this].concat(a))||this,i(r,"usernameLabel",y,t(r)),i(r,"premiumLabel",_,t(r)),r.isPremium=!1,r}n(r,e);var s=r.prototype;return s.onLoad=function(){r._instance=this;try{var e;p();var n=b();if(h.mount(),null!=(e=n.tgWebAppData)&&e.user){var i=n.tgWebAppData.user,t=i.username||i.first_name||"Пользователь";this.isPremium=i.is_premium||!1,this.usernameLabel&&(this.usernameLabel.string="Ник: @"+t),this.premiumLabel&&(this.premiumLabel.string="Premium: "+(this.isPremium?"Да ⭐️":"Нет"))}else this.usernameLabel&&(this.usernameLabel.string="Нет данных Telegram"),this.premiumLabel&&(this.premiumLabel.string="Откройте через Telegram");h.expand.isAvailable()&&h.expand(),h.requestFullscreen.isAvailable()&&h.requestFullscreen(),this.setupLandscape()}catch(e){console.log("Не в Telegram:",e),this.usernameLabel&&(this.usernameLabel.string="Нет данных Telegram"),this.premiumLabel&&(this.premiumLabel.string="Откройте через Telegram"),this.setupLandscape()}},s.setupLandscape=function(){o.setDesignResolutionSize(640,960,c.SHOW_ALL),o.resizeWithBrowserSize(!0)},s.shareScreen=function(){try{var e=document.getElementById("GameCanvas");if(!e)return void console.error("GameCanvas не найден!");var r=e.toDataURL("image/png");if(this.isPremium)window.open(r,"_blank");else{var n=document.createElement("a");n.href=r,n.download="screenshot.png",n.click()}}catch(e){console.error("Ошибка при создании скриншота:",e)}},a(r,null,[{key:"Instance",get:function(){return this._instance}}]),r}(m))._instance=null,y=r((d=w).prototype,"usernameLabel",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=r(d.prototype,"premiumLabel",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=d))||v));s._RF.pop()}}}));

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