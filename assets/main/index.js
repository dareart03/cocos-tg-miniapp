System.register("chunks:///_virtual/main",["./UserInfo.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/UserInfo.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.js","./index3.js"],(function(e){var r,n,t,a,i,s,o,u,l,c,p,m,b;return{setters:[function(e){r=e.applyDecoratedDescriptor,n=e.inheritsLoose,t=e.initializerDefineProperty,a=e.assertThisInitialized,i=e.asyncToGenerator,s=e.regeneratorRuntime},function(e){o=e.cclegacy,u=e._decorator,l=e.Label,c=e.Component},function(e){p=e.init,m=e.viewport},function(e){b=e.retrieveLaunchParams}],execute:function(){var d,h,f,g,y,v,L;o._RF.push({},"298a8hr94BAFbfJ2oNIMxz8","UserInfo",void 0);var k=u.ccclass,x=u.property;e("UserInfoManager",(d=k("UserInfoManager"),h=x(l),f=x(l),d((v=r((y=function(e){function r(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=e.call.apply(e,[this].concat(i))||this,t(r,"usernameLabel",v,a(r)),t(r,"premiumLabel",L,a(r)),r.isPremium=!1,r.userId=null,r.backendUrl="https://taro-backend-mydi.onrender.com",r}n(r,e);var o=r.prototype;return o.onLoad=function(){try{var e;p();var r=b();if(m.mount(),null!=(e=r.tgWebAppData)&&e.user){var n=r.tgWebAppData.user,t=n.username||n.first_name||"Пользователь";this.isPremium=Boolean(n.is_premium),this.userId=n.id,this.usernameLabel&&(this.usernameLabel.string="Ник: @"+t),this.premiumLabel&&(this.premiumLabel.string="Premium: "+(this.isPremium?"Да ⭐️":"Нет"))}else this.usernameLabel&&(this.usernameLabel.string="Нет данных Telegram"),this.premiumLabel&&(this.premiumLabel.string="Откройте через Telegram");m.expand.isAvailable()&&m.expand(),m.requestFullscreen.isAvailable()&&m.requestFullscreen()}catch(e){console.log("Не в Telegram или ошибка init:",e)}},o.shareScreen=function(){var e=i(s().mark((function e(){var r,n,t,a,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.userId){e.next=3;break}return alert("Не удалось определить пользователя Telegram."),e.abrupt("return");case 3:if(n=null==(r=window.Telegram)?void 0:r.WebApp,t=this.backendUrl+"/public/story.png",!this.isPremium){e.next=18;break}return e.prev=6,e.next=9,fetch(this.backendUrl+"/share",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatId:this.userId,imageUrl:t,text:"Моя история 😊"})});case 9:e.sent.ok?alert("История отправлена!"):alert("Ошибка при отправке истории"),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(6),console.error(e.t0),alert("Ошибка при отправке истории");case 17:return e.abrupt("return");case 18:if(confirm("Хотите скачать вашу историю?")){e.next=21;break}return e.abrupt("return");case 21:a=this.backendUrl+"/download",n&&"function"==typeof n.openLink?n.openLink(a):((i=document.createElement("a")).href=a,i.download="story.png",document.body.appendChild(i),i.click(),document.body.removeChild(i));case 23:case"end":return e.stop()}}),e,this,[[6,13]])})));return function(){return e.apply(this,arguments)}}(),r}(c)).prototype,"usernameLabel",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=r(y.prototype,"premiumLabel",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=y))||g));o._RF.pop()}}}));

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