(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/signin/signin"],{1309:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){}));var i=function(){var n=this,t=n.$createElement;n._self._c;n._isMounted||(n.e0=function(t){n.iserr=!1},n.e1=function(t){n.iserr=!1})},u=[]},2487:function(n,t,e){"use strict";e.r(t);var i=e("1309"),u=e("7708");for(var o in u)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return u[n]}))}(o);e("8c53");var r=e("f0c5"),a=Object(r["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=a.exports},7708:function(n,t,e){"use strict";e.r(t);var i=e("949c"),u=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(o);t["default"]=u.a},"8c53":function(n,t,e){"use strict";var i=e("f86b"),u=e.n(i);u.a},"949c":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{user:"",psw:"",iserr:!1}},onLoad:function(t){t.user?(this.user=t.user,n.showToast({title:"注册成功！请登录",icon:"none",duration:1500})):t.name?(this.user=t.name,n.showToast({title:"登陆已过期",icon:"none",duration:2e3})):t.updatepsw&&(this.user=t.updatepsw,n.showToast({title:"请重新登录",icon:"none",duration:2e3}))},methods:{login:function(){var t=this;console.log(111),n.request({url:this.serverUrl+"/signin/match",data:{data:this.user,psw:this.psw},method:"POST",success:function(e){var i=e.data.status,u=e.data.back;if(200===i){t.iserr=!1;try{n.setStorageSync("user",{id:u.id,name:u.name,imgurl:u.imgurl,token:u.token})}catch(o){console.log("数据存储错误")}n.navigateTo({url:"/pages/index/index"})}else 400===i?t.iserr=!0:500===i&&n.showToast({title:"服务器出错了...",icon:"none",duration:1500})}})},toSignup:function(){n.navigateTo({url:"../signup/signup"})}}};t.default=e}).call(this,e("543d")["default"])},c292:function(n,t,e){"use strict";(function(n){e("1a46");i(e("66fd"));var t=i(e("2487"));function i(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},f86b:function(n,t,e){}},[["c292","common/runtime","common/vendor"]]]);