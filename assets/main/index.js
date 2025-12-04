System.register("chunks:///_virtual/main",["./UserInfo.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/UserInfo.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.js","./index3.js"],(function(e){var r,n,i,t,a,s,l,u,o,c,m,p,b,h;return{setters:[function(e){r=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,t=e.assertThisInitialized,a=e.createClass},function(e){s=e.cclegacy,l=e._decorator,u=e.Label,o=e.view,c=e.ResolutionPolicy,m=e.Component},function(e){p=e.init,b=e.viewport},function(e){h=e.retrieveLaunchParams}],execute:function(){var L,g,f,v,d,y,_,z;s._RF.push({},"298a8hr94BAFbfJ2oNIMxz8","UserInfo",void 0);var A=l.ccclass,I=l.property;e("UserInfoManager",(L=A("UserInfoManager"),g=I(u),f=I(u),L(((z=function(e){function r(){for(var r,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return r=e.call.apply(e,[this].concat(a))||this,i(r,"usernameLabel",y,t(r)),i(r,"premiumLabel",_,t(r)),r}n(r,e);var s=r.prototype;return s.onLoad=function(){r._instance=this;try{var e;p();var n=h();if(console.log("Launch Params:",n),b.mount(),null!=(e=n.tgWebAppData)&&e.user){var i=n.tgWebAppData.user,t=i.username||i.first_name||"Пользователь",a=i.is_premium?"Да ⭐️":"Нет";this.usernameLabel&&(this.usernameLabel.string="Ник: @"+t),this.premiumLabel&&(this.premiumLabel.string="Premium: "+a)}else this.usernameLabel&&(this.usernameLabel.string="Нет данных Telegram"),this.premiumLabel&&(this.premiumLabel.string="Откройте через Telegram");b.expand.isAvailable()&&b.expand(),b.requestFullscreen.isAvailable()&&b.requestFullscreen(),this.setupLandscape()}catch(e){console.log("Не в среде Telegram:",e),this.usernameLabel&&(this.usernameLabel.string="Нет данных Telegram"),this.premiumLabel&&(this.premiumLabel.string="Откройте через Telegram"),this.setupLandscape()}},s.setupLandscape=function(){o.setDesignResolutionSize(640,960,c.SHOW_ALL),o.resizeWithBrowserSize(!0)},a(r,null,[{key:"Instance",get:function(){return this._instance}}]),r}(m))._instance=null,y=r((d=z).prototype,"usernameLabel",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=r(d.prototype,"premiumLabel",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=d))||v));s._RF.pop()}}}));

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