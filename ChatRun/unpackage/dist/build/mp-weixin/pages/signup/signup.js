(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/signup/signup"],{"06ce":function(t,i,s){"use strict";var e=s("1859"),a=s.n(e);a.a},"16bb":function(t,i,s){"use strict";s.d(i,"b",(function(){return e})),s.d(i,"c",(function(){return a})),s.d(i,"a",(function(){}));var e=function(){var t=this.$createElement;this._self._c},a=[]},1859:function(t,i,s){},"44fa":function(t,i,s){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s={data:function(){return{type:"password",isuser:!1,employ:!1,isemail:!1,invalid:!1,look:!1,ispwd:!1,email:"",isok:!1,user:"",psw:""}},computed:{isOk:function(){return this.isuser&&this.isemail&&this.psw.length>5?this.isok=!0:this.isok=!1}},methods:{looks:function(){this.look?(this.type="password",this.look=!this.look):(this.type="text",this.look=!this.look)},isEmail:function(){this.email?/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-z0-9]+\.([a-zA-z]{2,4})$/.test(this.email)?(this.invalid=!1,this.matchEmail()):(this.isemail=!1,this.invalid=!0):(this.invalid=!1,this.isemail=!1,this.isOk)},matchUser:function(){var i=this;this.user.length>0?t.request({url:this.serverUrl+"/signup/judge",data:{data:this.user,type:"name"},method:"POST",success:function(s){var e=s.data.status;if(200===e){var a=s.data.result;a>0?(i.employ=!0,i.isuser=!1):(i.employ=!1,i.isuser=!0),i.isOk}else 500===e&&t.showToast({title:"服务器出错了...",icon:"none",duration:1500})}}):(this.employ=!1,this.isuser=!1,this.isOk)},matchEmail:function(){var i=this;t.request({url:this.serverUrl+"/signup/judge",data:{data:this.email,type:"email"},method:"POST",success:function(s){var e=s.data.status;if(200===e){var a=s.data.result;a>0?(i.invalid=!0,i.isemail=!1):(i.invalid=!1,i.isemail=!0),i.isOk}else 500===e&&t.showToast({title:"服务器出错了...",icon:"none",duration:1500})}})},getPsw:function(t){this.psw=t.detail.value,this.isOk},signUp:function(){var i=this;this.matchEmail(),this.matchUser(),this.isOk&&t.request({url:this.serverUrl+"/signup/add",data:{name:this.user,mail:this.email,psw:this.psw},method:"POST",success:function(s){var e=s.data.status;200===e?t.navigateTo({url:"/pages/signin/signin?user="+i.user}):500===e&&t.showToast({title:"服务器出错了...",icon:"none",duration:1500})}})},backOnePage:function(){t.navigateBack({delta:1})}}};i.default=s}).call(this,s("543d")["default"])},"4cb5":function(t,i,s){"use strict";(function(t){s("1a46");e(s("66fd"));var i=e(s("ca3e"));function e(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=s,t(i.default)}).call(this,s("543d")["createPage"])},8038:function(t,i,s){"use strict";s.r(i);var e=s("44fa"),a=s.n(e);for(var n in e)["default"].indexOf(n)<0&&function(t){s.d(i,t,(function(){return e[t]}))}(n);i["default"]=a.a},ca3e:function(t,i,s){"use strict";s.r(i);var e=s("16bb"),a=s("8038");for(var n in a)["default"].indexOf(n)<0&&function(t){s.d(i,t,(function(){return a[t]}))}(n);s("06ce");var u=s("f0c5"),o=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);i["default"]=o.exports}},[["4cb5","common/runtime","common/vendor"]]]);