(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/friendapply/friendapply"],{"190e":function(e,t,n){"use strict";(function(e){n("1a46");i(n("66fd"));var t=i(n("9783"));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"62d2":function(e,t,n){},9783:function(e,t,n){"use strict";n.r(t);var i=n("d778"),a=n("b79c");for(var s in a)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("9d30");var r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=u.exports},"9d30":function(e,t,n){"use strict";var i=n("62d2"),a=n.n(i);a.a},b79c:function(e,t,n){"use strict";n.r(t);var i=n("c238"),a=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=a.a},c238:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(n("e652"));var i=a(n("ec9e"));function a(e){return e&&e.__esModule?e:{default:e}}var s={data:function(){return{friends:[],uid:"",imgurl:"",token:""}},onLoad:function(){this.getStorages(),this.friendReq()},methods:{agree:function(t){var n=this;e.request({url:this.serverUrl+"/friend/updatefriendstate",data:{uid:this.uid,fid:t,token:this.token},method:"POST",success:function(i){var a=i.data.status;i.data.result;if(200===a)for(var s=0;s<n.friends.length;s++)n.friends[s].id===t&&(n.friends.splice(s,1),e.showToast({title:"添加成功",icon:"none",duration:1500}));else 500===a?e.showToast({title:"服务器出错了...",icon:"none",duration:1500}):300===a&&e.navigateTo({url:"/pages/signin/signin?name="+n.myname})}})},refuse:function(t){var n=this;e.request({url:this.serverUrl+"/friend/deletefriend",data:{uid:this.uid,fid:t,token:this.token},method:"POST",success:function(i){var a=i.data.status;i.data.result;if(200===a)for(var s=0;s<n.friends.length;s++)n.friends[s].id===t&&(n.friends.splice(s,1),e.showToast({title:"已拒绝",icon:"none",duration:1500}));else 500===a?e.showToast({title:"服务器出错了...",icon:"none",duration:1500}):300===a&&e.navigateTo({url:"/pages/signin/signin?name="+n.myname})}})},friendReq:function(){var t=this;e.request({url:this.serverUrl+"/index/getfriend",data:{uid:this.uid,state:1,token:this.token},method:"POST",success:function(n){var i=n.data.status,a=n.data.result;if(200===i){for(var s=0;s<a.length;s++)a[s].imgurl=t.serverUrl+"/"+a[s].imgurl,t.getApplyMsg(a,s);t.friends=a}else 500===i?e.showToast({title:"服务器出错了...",icon:"none",duration:1500}):300===i&&e.navigateTo({url:"/pages/signin/signin?name="+t.myname})}})},getApplyMsg:function(t,n){var i=this;e.request({url:this.serverUrl+"/index/getlastmsg",data:{uid:this.uid,fid:t[n].id,token:this.token},method:"POST",success:function(a){var s=a.data.status,r=a.data.result;if(200===s){var u=t[n];u.msg=r.message,t.splice(n,1,u)}else 500===s?e.showToast({title:"服务器出错了...",icon:"none",duration:1500}):300===s&&e.navigateTo({url:"/pages/signin/signin?name="+i.myname})}})},getStorages:function(){try{var t=e.getStorageSync("user");t?(this.uid=t.id,this.token=t.token):e.navigateTo({url:"../signin/signin"})}catch(n){}},backOnePage:function(){e.navigateBack({delta:1})},changeTime:function(e){return i.default.dataTime(e)}}};t.default=s}).call(this,n("543d")["default"])},d778:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.__map(e.friends,(function(t,n){var i=e.__get_orig(t),a=e.changeTime(t.lastTime);return{$orig:i,m0:a}})));e.$mp.data=Object.assign({},{$root:{l0:n}})},a=[]}},[["190e","common/runtime","common/vendor"]]]);