(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userhome/userhome"],{"000b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{addHight:0,myname:"我",sexNan:!1,sexNv:!1,sex:!1,markname:"",runname:"运动萌新",showSend:!1,id:"",uid:"",token:"",user:{},msg:"",relation:""}},onReady:function(){this.getEleStyle()},onLoad:function(t){this.id=t.id,this.getStorages(),this.getUser(),this.judgeFriend(),this.getRunData()},methods:{getStorages:function(){try{var e=t.getStorageSync("user");e?(this.uid=e.id,this.token=e.token,this.myname=e.name,this.imgurl=e.imgurl,this.msg=this.myname+"请求加为好友~"):t.navigateTo({url:"../signin/signin"})}catch(n){}},getUser:function(){var e=this;t.request({url:this.serverUrl+"/user/detial",data:{id:this.id,token:this.token},method:"POST",success:function(n){var i=n.data.status,s=n.data.result;200===i?(s.imgurl=e.serverUrl+s.imgurl,void 0===s.explain&&(s.explain="这个人很懒，啥都没写~"),0===e.markname.length&&(e.markname=s.name),e.sexJudge(s.sex),e.user=s):500===i?t.showToast({title:"服务器出错了...",icon:"none",duration:1500}):300===i&&t.navigateTo({url:"/pages/signin/signin?name="+e.myname})}})},getRunData:function(){var e=this;t.request({url:this.serverUrl+"/run/findrundate",data:{id:this.id,token:this.token},method:"POST",success:function(n){var i=n.data.status,s=n.data.result;200===i?(s.distance>=10||s.runTime>=60)&&(e.runname="运动健将"):500===i?t.showToast({title:"服务器出错了...",icon:"none",duration:1500}):300===i&&t.navigateTo({url:"/pages/signin/signin?name="+e.myname})}})},sexJudge:function(t){"asexual"===t?(this.sex=!0,this.sexNan=!1,this.sexNv=!1):"male"===t?(this.sex=!1,this.sexNan=!0,this.sexNv=!1):(this.sex=!1,this.sexNan=!1,this.sexNv=!0)},judgeFriend:function(){var e=this;this.id===this.uid?this.relation=0:t.request({url:this.serverUrl+"/search/isfriend",data:{uid:this.uid,fid:this.id},method:"POST",success:function(n){var i=n.data.status;200==i?(e.relation=1,e.getMarkname()):400==i?e.relation=2:500==i&&t.showToast({title:"服务器出错了...",icon:"none",duration:1500})}})},addFriendSub:function(e){var n=this;t.request({url:this.serverUrl+"/friend/apply",data:{uid:this.uid,fid:this.id,msg:this.msg,token:this.token},method:"POST",success:function(e){var i=e.data.status;e.data.result;200===i?(n.showSend=!1,t.showToast({title:"好友请求发送成功",icon:"none",duration:1500})):300===i?t.navigateTo({url:"/pages/signin/signin?name="+n.myname}):500===i&&t.showToast({title:"服务器出错了...",icon:"none",duration:1500})}})},getMarkname:function(){var e=this;t.request({url:this.serverUrl+"/user/getmarkname",data:{uid:this.uid,fid:this.id,token:this.token},method:"POST",success:function(n){var i=n.data.status;if(200==i){var s=n.data.result;void 0!==s.markname&&(e.markname=s.markname)}else 400==i||500==i&&t.showToast({title:"服务器出错了...",icon:"none",duration:1500})}})},userDetial:function(){t.navigateTo({url:"/pages/userdetials/userdetials?id="+this.id})},backOnePage:function(){t.navigateBack({delta:1})},getEleStyle:function(){var e=this,n=t.createSelectorQuery().in(this);n.select(".bg").boundingClientRect((function(t){console.log(JSON.stringify(t)),console.log(t.top),e.addHight=t.height-186,console.log(e.addHight)}))}}};e.default=n}).call(this,n("543d")["default"])},6566:function(t,e,n){"use strict";(function(t){n("1a46");i(n("66fd"));var e=i(n("8543"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"77fd":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.showSend=!0},t.e1=function(e){t.showSend=!1})},s=[]},"7b9b":function(t,e,n){},8543:function(t,e,n){"use strict";n.r(e);var i=n("77fd"),s=n("9ee2");for(var a in s)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(a);n("b0cf");var r=n("f0c5"),u=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=u.exports},"9ee2":function(t,e,n){"use strict";n.r(e);var i=n("000b"),s=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},b0cf:function(t,e,n){"use strict";var i=n("7b9b"),s=n.n(i);s.a}},[["6566","common/runtime","common/vendor"]]]);