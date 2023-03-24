(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{3715:function(e,t,n){},"77cc":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;s(n("e652"));var i=s(n("ec9e"));function s(e){return e&&e.__esModule?e:{default:e}}var r={data:function(){return{pageIndex:0,friends:[],groups:[],uid:"",imgurl:"",token:"",refresh:!1,requestData:"",requestTime:""}},components:{myFootBar:function(){n.e("components/myFootBar").then(function(){return resolve(n("4079"))}.bind(null,n)).catch(n.oe)}},onShow:function(){this.getStorages(),this.getFriends(),this.friendReq(),this.join(this.uid),this.receiveSocketMsg()},onPullDownRefresh:function(){this.friends=[],this.getStorages(),this.getFriends(),this.friendReq(),setTimeout((function(){e.stopPullDownRefresh()}),2e3)},methods:{join:function(e){this.socket.emit("login",e)},receiveSocketMsg:function(){var e=this;this.socket.on("msg",(function(t,n){var i="";0==t.types?i=t.msg:1==t.types?i="[图片消息]":2==t.types?i="[语音消息]":3==t.types&&(i="[分享位置]");for(var s=0;s<e.friends.length;s++)if(e.friends[s].id==n){var r=e.friends[s];r.lastTime=new Date,r.msg=i,r.tip++,e.friends.splice(s,1),e.friends.unshift(r)}}))},getLastMsg:function(t,n){var i=this;e.request({url:this.serverUrl+"/index/getlastmsg",data:{uid:this.uid,fid:t[n].id,token:this.token},method:"POST",success:function(s){var r=s.data.status,a=s.data.result;if(200===r){0==a.types||(1==a.types?a.message="[图片消息]":2==a.types?a.message="[语音消息]":3==a.types&&(a.message="[分享位置]"));var u=t[n];u.msg=a.message,t.splice(n,1,u)}else 500===r?e.showToast({title:"服务器出错了...",icon:"none",duration:1500}):300===r&&e.navigateTo({url:"/pages/signin/signin?name="+i.myname})}})},getUnread:function(t,n){var i=this;e.request({url:this.serverUrl+"/index/unreadmsg",data:{uid:this.uid,fid:t[n].id,token:this.token},method:"POST",success:function(s){var r=s.data.status,a=s.data.result;if(200===r){var u=t[n];u.tip=a,t.splice(n,1,u)}else 500===r?e.showToast({title:"服务器出错了...",icon:"none",duration:1500}):300===r&&e.navigateTo({url:"/pages/signin/signin?name="+i.myname})}})},updateUnread:function(t){var n=this;e.request({url:this.serverUrl+"/index/updatemsg",data:{uid:this.uid,fid:t,token:this.token},method:"POST",success:function(t){var i=t.data.status;t.data.result;200===i||(500===i?e.showToast({title:"服务器出错了...",icon:"none",duration:1500}):300===i&&e.navigateTo({url:"/pages/signin/signin?name="+n.myname}))}})},getFriends:function(){var t=this;e.request({url:this.serverUrl+"/index/getfriend",data:{uid:this.uid,state:0,token:this.token},method:"POST",success:function(n){var s=n.data.status,r=n.data.result;if(200===s){if(r.result.length>0){for(var a=0;a<r.result.length;a++)r.result[a].imgurl=t.serverUrl+r.result[a].imgurl,r.result[a].markname&&(r.result[a].name=r.result[a].markname);t.friends=r.result,console.log(t.friends)}t.friends=i.default.mySort(t.friends,"lastTime",0);for(var u=0;u<t.friends.length;u++)t.getLastMsg(t.friends,u),t.getUnread(t.friends,u);e.stopPullDownRefresh()}else 500===s?e.showToast({title:"服务器出错了...",icon:"none",duration:1500}):300===s&&e.navigateTo({url:"/pages/signin/signin?name="+t.myname})}})},getGroups:function(){var t=this;e.request({url:this.serverUrl+"/index/getgroup",data:{uid:this.uid,token:this.token},method:"POST",success:function(n){var i=n.data.status,s=n.data.result;if(200===i){if(s.length>0){for(var r=0;r<s.result.length;r++)s.result[r].imgurl=t.serverUrl+s.result[r].imgurl;t.friends=s.result}}else 500===i?e.showToast({title:"服务器出错了...",icon:"none",duration:1500}):300===i&&e.navigateTo({url:"/pages/signin/signin?name="+t.myname})}})},friendReq:function(){var t=this;e.request({url:this.serverUrl+"/index/getfriend",data:{uid:this.uid,state:1,token:this.token},method:"POST",success:function(n){var i=n.data.status,s=n.data.result;if(200===i){t.requestData=s.length;for(var r=0;r<s.length;r++)t.requestTime<s[r].lastTime&&(t.requestTime=s[r].lastTime)}else 500===i?e.showToast({title:"服务器出错了...",icon:"none",duration:1500}):300===i&&e.navigateTo({url:"/pages/signin/signin?name="+t.myname})}})},changeTime:function(e){return i.default.dataTime(e)},getStorages:function(){try{var t=e.getStorageSync("user");t?(this.uid=t.id,this.imgurl=this.serverUrl+"/"+t.imgurl,this.token=t.token):e.navigateTo({url:"../signin/signin"})}catch(n){}},toChatRoom:function(t){this.updateUnread(t.id),e.navigateTo({url:"../chatroom/chatroom?id="+t.id+"&name="+t.name+"&img="+t.imgurl+"&type="+t.type})},goReq:function(){e.navigateTo({url:"../friendapply/friendapply"})},toSearch:function(){e.navigateTo({url:"../search/search"})}}};t.default=r}).call(this,n("543d")["default"])},"80b1":function(e,t,n){"use strict";(function(e){n("1a46");i(n("66fd"));var t=i(n("cc5b"));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"9c36":function(e,t,n){"use strict";n.r(t);var i=n("77cc"),s=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=s.a},ca82:function(e,t,n){"use strict";var i=n("3715"),s=n.n(i);s.a},cc5b:function(e,t,n){"use strict";n.r(t);var i=n("ef23"),s=n("9c36");for(var r in s)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(r);n("ca82");var a=n("f0c5"),u=Object(a["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=u.exports},ef23:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.requestData>0?e.changeTime(e.requestTime):null),i=e.__map(e.friends,(function(t,n){var i=e.__get_orig(t),s=e.changeTime(t.lastTime);return{$orig:i,m1:s}}));e.$mp.data=Object.assign({},{$root:{m0:n,l0:i}})},s=[]}},[["80b1","common/runtime","common/vendor"]]]);