System.register("chunks:///_virtual/main",["./UserInfo.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/UserInfo.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,n,i,t,a,l,s,o;return{setters:[function(e){r=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,t=e.assertThisInitialized},function(e){a=e.cclegacy,l=e._decorator,s=e.Label,o=e.Component}],execute:function(){var u,c,p,m,f,b,g;a._RF.push({},"298a8hr94BAFbfJ2oNIMxz8","UserInfo",void 0);var h=l.ccclass,L=l.property;e("UserInfo",(u=h("UserInfo"),c=L(s),p=L(s),u((b=r((f=function(e){function r(){for(var r,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return r=e.call.apply(e,[this].concat(a))||this,i(r,"usernameLabel",b,t(r)),i(r,"premiumLabel",g,t(r)),r}return n(r,e),r.prototype.start=function(){var e,r,n=null==(e=window.Telegram)?void 0:e.WebApp;if(!n||null==(r=n.initDataUnsafe)||!r.user)return this.usernameLabel.string="Нет данных Telegram",void(this.premiumLabel.string="Откройте через Telegram");var i=n.initDataUnsafe.user,t=i.username||i.first_name||"Пользователь",a=i.is_premium?"Да ⭐️":"Нет";this.usernameLabel.string="Ник: @"+t,this.premiumLabel.string="Premium: "+a},r}(o)).prototype,"usernameLabel",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=r(f.prototype,"premiumLabel",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=f))||m));a._RF.pop()}}}));

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