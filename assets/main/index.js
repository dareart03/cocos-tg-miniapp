System.register("chunks:///_virtual/main",["./UserInfo.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/UserInfo.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.js","./index3.js"],(function(e){var n,r,t,a,i,s,l,o,u,c,m,p,h,f,b;return{setters:[function(e){n=e.applyDecoratedDescriptor,r=e.inheritsLoose,t=e.initializerDefineProperty,a=e.assertThisInitialized,i=e.createClass},function(e){s=e.cclegacy,l=e._decorator,o=e.Label,u=e.Canvas,c=e.view,m=e.ResolutionPolicy,p=e.Component},function(e){h=e.init,f=e.viewport},function(e){b=e.retrieveLaunchParams}],execute:function(){var g,L,v,d,y,w,A,P,_,z;s._RF.push({},"298a8hr94BAFbfJ2oNIMxz8","UserInfo",void 0);var F=l.ccclass,U=l.property;e("UserInfoManager",(g=F("UserInfoManager"),L=U(o),v=U(o),d=U(u),g(((z=function(e){function n(){for(var n,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return n=e.call.apply(e,[this].concat(i))||this,t(n,"usernameLabel",A,a(n)),t(n,"premiumLabel",P,a(n)),t(n,"canvas",_,a(n)),n.isPremium=!1,n}r(n,e);var s=n.prototype;return s.onLoad=function(){n._instance=this;try{var e;h();var r=b();if(console.log("Launch Params:",r),f.mount(),null!=(e=r.tgWebAppData)&&e.user){var t=r.tgWebAppData.user,a=t.username||t.first_name||"Пользователь";this.isPremium=t.is_premium||!1,this.usernameLabel&&(this.usernameLabel.string="Ник: @"+a),this.premiumLabel&&(this.premiumLabel.string="Premium: "+(this.isPremium?"Да ⭐️":"Нет"))}else this.usernameLabel&&(this.usernameLabel.string="Нет данных Telegram"),this.premiumLabel&&(this.premiumLabel.string="Откройте через Telegram");f.expand.isAvailable()&&f.expand(),f.requestFullscreen.isAvailable()&&f.requestFullscreen(),this.setupLandscape()}catch(e){console.log("Не в среде Telegram:",e),this.usernameLabel&&(this.usernameLabel.string="Нет данных Telegram"),this.premiumLabel&&(this.premiumLabel.string="Откройте через Telegram"),this.setupLandscape()}},s.setupLandscape=function(){c.setDesignResolutionSize(640,960,m.SHOW_ALL),c.resizeWithBrowserSize(!0)},s.shareScreen=function(){var e=this;this.canvas?html2canvas(document.body).then((function(n){var r=n.toDataURL("image/png");if(e.isPremium&&navigator.share){var t=e.dataURLtoFile(r,"screenshot.png");navigator.share({title:"Мой Mini App",text:"Смотрите мой результат!",files:[t]}).catch((function(e){return console.log(e)}))}else{var a=document.createElement("a");a.href=r,a.download="screenshot.png",a.click()}})).catch((function(e){return console.error("Ошибка скриншота:",e)})):console.error("Canvas не привязан!")},s.dataURLtoFile=function(e,n){for(var r=e.split(","),t=r[0].match(/:(.*?);/)[1],a=atob(r[1]),i=a.length,s=new Uint8Array(i);i--;)s[i]=a.charCodeAt(i);return new File([s],n,{type:t})},i(n,null,[{key:"Instance",get:function(){return this._instance}}]),n}(p))._instance=null,A=n((w=z).prototype,"usernameLabel",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=n(w.prototype,"premiumLabel",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=n(w.prototype,"canvas",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=w))||y));s._RF.pop()}}}));

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