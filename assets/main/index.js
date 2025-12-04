System.register("chunks:///_virtual/main",["./UserInfo.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/UserInfo.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.js","./index3.js"],(function(e){var n,r,i,a,t,s,l,u,o,c,m,p,h,b,f;return{setters:[function(e){n=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,a=e.assertThisInitialized,t=e.createClass},function(e){s=e.cclegacy,l=e._decorator,u=e.Label,o=e.Canvas,c=e.view,m=e.ResolutionPolicy,p=e.Component},function(e){h=e.init,b=e.viewport},function(e){f=e.retrieveLaunchParams}],execute:function(){var g,L,v,d,y,w,_,z,P,A;s._RF.push({},"298a8hr94BAFbfJ2oNIMxz8","UserInfo",void 0);var I=l.ccclass,x=l.property;e("UserInfoManager",(g=I("UserInfoManager"),L=x(u),v=x(u),d=x(o),g(((A=function(e){function n(){for(var n,r=arguments.length,t=new Array(r),s=0;s<r;s++)t[s]=arguments[s];return n=e.call.apply(e,[this].concat(t))||this,i(n,"usernameLabel",_,a(n)),i(n,"premiumLabel",z,a(n)),i(n,"canvas",P,a(n)),n.isPremium=!1,n}r(n,e);var s=n.prototype;return s.onLoad=function(){n._instance=this;try{var e;h();var r=f();if(b.mount(),null!=(e=r.tgWebAppData)&&e.user){var i=r.tgWebAppData.user,a=i.username||i.first_name||"Пользователь";this.isPremium=i.is_premium||!1,this.usernameLabel&&(this.usernameLabel.string="Ник: @"+a),this.premiumLabel&&(this.premiumLabel.string="Premium: "+(this.isPremium?"Да ⭐️":"Нет"))}else this.usernameLabel&&(this.usernameLabel.string="Нет данных Telegram"),this.premiumLabel&&(this.premiumLabel.string="Откройте через Telegram");b.expand.isAvailable()&&b.expand(),b.requestFullscreen.isAvailable()&&b.requestFullscreen(),this.setupLandscape()}catch(e){console.log("Не в Telegram:",e),this.usernameLabel&&(this.usernameLabel.string="Нет данных Telegram"),this.premiumLabel&&(this.premiumLabel.string="Откройте через Telegram"),this.setupLandscape()}},s.setupLandscape=function(){c.setDesignResolutionSize(640,960,m.SHOW_ALL),c.resizeWithBrowserSize(!0)},s.shareScreen=function(){var e;if(this.canvas){var n=null==(e=window.Telegram)?void 0:e.WebApp;this.canvas.node.getComponentInChildren(o);var r="https://example.com/share-image.png";if(this.isPremium&&n)n.openLink(r);else{var i=document.createElement("a");i.href=r,i.download="share.png",i.click()}}else console.error("Canvas не привязан!")},t(n,null,[{key:"Instance",get:function(){return this._instance}}]),n}(p))._instance=null,_=n((w=A).prototype,"usernameLabel",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=n(w.prototype,"premiumLabel",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=n(w.prototype,"canvas",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=w))||y));s._RF.pop()}}}));

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