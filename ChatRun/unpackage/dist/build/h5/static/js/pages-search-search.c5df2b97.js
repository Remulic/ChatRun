(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-search"],{"0335":function(e,t,a){"use strict";a.r(t);var i=a("08b6"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=n.a},"08b6":function(module,exports,__webpack_require__){"use strict";__webpack_require__("7a82");var _interopRequireDefault=__webpack_require__("4ea4").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("d81d"),__webpack_require__("ac1f"),__webpack_require__("5319");var _datas=_interopRequireDefault(__webpack_require__("dc68")),_myfun=_interopRequireDefault(__webpack_require__("1cf7")),_myFootBar=_interopRequireDefault(__webpack_require__("a4ee")),_default={data:function(){return{pageIndex:1,usrArr:[],uid:"",token:"",markname:"小明",myname:"",name:"",showModify:!1,msg:""}},components:{myFootBar:_myFootBar.default},onLoad:function(){this.getStorages()},methods:{search:_myfun.default.debounce((function(e){this.usrArr=[];var t=e.detail.value;t.length>0&&this.searchUser(t)}),200),searchUser:function(e){var t=this;uni.request({url:this.serverUrl+"/search/user",data:{data:e,token:this.token},method:"POST",success:function(a){var i=a.data.status,n=a.data.result;200===i?n=n.map((function(a,i){t.isMyFriend(a,e)})):300===i?uni.navigateTo({url:"/pages/signin/signin?name="+t.myname}):500===i&&uni.showToast({title:"服务器出错了...",icon:"none",duration:1500})}})},isMyFriend:function isMyFriend(item,e){var _this2=this,tip=0,exp=eval("/"+e+"/g");item._id===this.uid?(tip=2,item.tip=tip,item.imgurl=this.serverUrl+"/"+item.imgurl,item.name=item.name.replace(exp,"<span style='color:#4AAAFF'>"+e+"</span>"),item.email=item.email.replace(exp,"<span style='color:#4AAAFF;'>"+e+"</span>"),this.usrArr.push(item)):uni.request({url:this.serverUrl+"/search/isfriend",data:{uid:this.uid,fid:item._id,token:this.token},method:"POST",success:function(t){var a=t.data.status;t.data.result;200===a?(tip=1,item.tip=tip):400===a?(tip=0,item.tip=tip):300===a?uni.navigateTo({url:"/pages/signin/signin?name="+_this2.myname}):500===a&&uni.showToast({title:"服务器出错了...",icon:"none",duration:1500}),item.tip=tip,item.imgurl=_this2.serverUrl+"/"+item.imgurl,item.name=item.name.replace(exp,"<span style='color:#4AAAFF'>"+e+"</span>"),item.email=item.email.replace(exp,"<span style='color:#4AAAFF;'>"+e+"</span>"),_this2.usrArr.push(item)}})},modify:function(e){0===e.tip?(this.showModify=!0,this.msg=this.myname+"请求添加为好友~",this.sendfid=e._id):1===e.tip&&uni.navigateTo({url:"../chatroom/chatroom?id="+e._id+"&name="+e.name+"&img="+e.imgurl+"&type=0"})},addFriendSub:function(e){var t=this;uni.request({url:this.serverUrl+"/friend/apply",data:{uid:this.uid,fid:e,msg:this.msg,token:this.token},method:"POST",success:function(e){var a=e.data.status;e.data.result;200===a?(t.showModify=!1,uni.showToast({title:"好友请求发送成功",icon:"none",duration:1500})):300===a?uni.navigateTo({url:"/pages/signin/signin?name="+t.myname}):500===a&&uni.showToast({title:"服务器出错了...",icon:"none",duration:1500})}})},getStorages:function(){try{var e=uni.getStorageSync("user");e?(this.uid=e.id,this.imgurl=this.serverUrl+"/"+e.imgurl,this.token=e.token,this.myname=e.name):uni.navigateTo({url:"../signin/signin"})}catch(t){}},backOnePage:function(){uni.navigateBack({delta:1})}}};exports.default=_default},"1cf7":function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={dataTime:function(e){var t=new Date(e),a=new Date,i=t.getHours(),n=t.getMinutes(),r=t.getFullYear(),o=t.getMonth()+1,s=t.getDate(),d=(a.getTime(),a.getHours(),a.getMinutes(),a.getFullYear()),c=a.getMonth()+1,u=a.getDate();return s===u&&o===c&&r===d?(i<10&&(i="0"+i),n<10&&(n="0"+n),i+":"+n):s+1===u&&o===c&&r===d?(i<10&&(i="0"+i),n<10&&(n="0"+n),"昨天 "+i+":"+n):r+"/"+o+"/"+s},detialTime:function(e){var t=new Date(e),a=(new Date,t.getHours()),i=t.getMinutes(),n=t.getFullYear(),r=t.getMonth()+1,o=t.getDate();return r<10&&(r="0"+r),o<10&&(o="0"+o),a<10&&(a="0"+a),i<10&&(i="0"+i),n+"-"+r+"-"+o+" "+a+":"+i},dataTime1:function(e){var t=new Date(e),a=new Date,i=t.getHours(),n=t.getMinutes(),r=t.getFullYear(),o=t.getMonth()+1,s=t.getDate(),d=(a.getTime(),a.getHours(),a.getMinutes(),a.getFullYear()),c=a.getMonth()+1,u=a.getDate();return s===u&&o===c&&r===d?(i<10&&(i="0"+i),n<10&&(n="0"+n),i+":"+n):s+1===u&&o===c&&r===d?(i<10&&(i="0"+i),n<10&&(n="0"+n),"昨天 "+i+":"+n):r===d?(i<10&&(i="0"+i),n<10&&(n="0"+n),o+"月"+s+"日 "+i+":"+n):(i<10&&(i="0"+i),n<10&&(n="0"+n),r+"年"+o+"月"+s+"日 "+i+":"+n)},fileName:function(e){var t=new Date(e),a=t.getFullYear(),i=t.getMonth()+1,n=t.getDate();return i<10&&(i="0"+i),n<10&&(n="0"+n),a+i+n},spacTime:function(e,t){e=new Date(e),t=new Date(t);var a=e.getTime(),i=t.getTime();return i>a+3e5?t:""},debounce:function(e,t){var a,i=t||500;return function(){var t=this,n=arguments;a&&clearTimeout(a),a=setTimeout((function(){a=null,e.apply(t,n)}),i)}},Throttle:function(e,t){var a,i,n=t||500;return function(){var t=this,r=arguments,o=+new Date;a&&o-a<n?(clearTimeout(i),i=setTimeout((function(){a=o,e.apply(t,r)}),n)):(a=o,e.apply(this,r))}},mySort:function(e,t,a){var i;if(0===a){for(var n=1;n<e.length;n++)for(var r=n;r>0;r--)e[r][t]>e[r-1][t]&&(i=e[r],e[r]=e[r-1],e[r-1]=i);return e}if(1===a){for(var o=1;o<e.length;o++)for(var s=o;s>0;s--)e[s][t]<e[s-1][t]&&(i=e[s],e[s]=e[s-1],e[s-1]=i);return e}},date_format:function(e){var t=Math.floor(e/1e3),a=Math.floor(t/3600),i=r(Math.floor((t-3600*a)/60)),n=r(t-3600*a-60*i);return a+":"+i+":"+n+" ";function r(e){return e<10?"0"+e:e}},getDistance:function(e,t,a,i){var n=c(e),r=c(a),o=n-r,s=c(t)-c(i),d=2*Math.asin(Math.sqrt(Math.pow(Math.sin(o/2),2)+Math.cos(n)*Math.cos(r)*Math.pow(Math.sin(s/2),2)));return 6378137*d;function c(e){return e*Math.PI/180}},getnum:function(e){return Math.round(100*e)/100}};t.default=i},"2e2a":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"contents animate__animated animate__fadeIn animate__faster"},[a("v-uni-view",{staticClass:"top-bar"},[a("v-uni-view",{staticClass:"search-div"},[a("i",{staticClass:"iconfont icon-searchsousuo"}),a("v-uni-input",{staticClass:"search",attrs:{focus:"true",type:"search",value:"",placeholder:"输入用户名/邮箱","placeholder-style":"color: #aaa; font-weight:400;"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"top-bar-right",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.backOnePage.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"text"},[e._v("取消")])],1)],1),a("v-uni-view",{staticClass:"main"},[a("v-uni-view",{staticClass:"search-user result"},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.usrArr.length>0,expression:"usrArr.length > 0"}],staticClass:"title"},[e._v("用户")]),e._l(e.usrArr,(function(t,i){return a("v-uni-view",{staticClass:"list user animate__animated animate__fadeIn animate__faster ",attrs:{keys:t.id}},[a("v-uni-navigator",{attrs:{url:"../userhome/userhome?id="+t._id}},[a("v-uni-image",{attrs:{src:t.imgurl,mode:""}})],1),a("v-uni-view",{staticClass:"names"},[a("v-uni-view",{staticClass:"name",domProps:{innerHTML:e._s(t.name)}}),a("v-uni-view",{staticClass:"email",domProps:{innerHTML:e._s(t.email)}})],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2!==t.tip,expression:"item.tip!==2"}],staticClass:"right-btn",class:{add:0===t.tip,send:1===t.tip},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.modify(t)}}},[e._v(e._s(1===t.tip?"发消息":"加好友"))])],1)}))],2)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.showModify,expression:"showModify"}],staticClass:"modify animate__animated animate__slideInUp animate__faster"},[a("v-uni-view",{staticClass:"modify-header "},[a("v-uni-view",{staticClass:"close",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showModify=!1}}},[e._v("退出")]),a("v-uni-view",{staticClass:"title"},[e._v("添加好友")]),a("v-uni-view",{staticClass:"define",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addFriendSub(e.sendfid)}}},[e._v("发送")])],1),a("v-uni-view",{staticClass:"modify-main"},[a("v-uni-textarea",{staticClass:"modify-content",model:{value:e.msg,callback:function(t){e.msg=t},expression:"msg"}})],1)],1),a("myFootBar",{attrs:{pageIndex:e.pageIndex}})],1)},n=[]},"30a4":function(e,t,a){"use strict";a.r(t);var i=a("ee52"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=n.a},3305:function(e,t,a){var i=a("6ced");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("00a84326",i,!0,{sourceMap:!1,shadowMode:!1})},"52a5":function(e,t,a){"use strict";a.r(t);var i=a("2e2a"),n=a("0335");for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("571b");var o=a("f0c5"),s=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"b2fc030e",null,!1,i["a"],void 0);t["default"]=s.exports},"571b":function(e,t,a){"use strict";var i=a("3305"),n=a.n(i);n.a},"6ced":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 公共样式 */.contents[data-v-b2fc030e]{padding-top:0}\r\n/* 顶部 */.top-bar[data-v-b2fc030e]{z-index:100;width:92%;height:%?88?%;position:fixed;top:0;left:0;background:hsla(0,0%,100%,.96);border-bottom:%?1?% solid rgba(39,20,50,.1);padding-left:%?32?%;padding-right:%?32?%;padding-top:0;box-shadow:%?1?% %?1?% %?20?% %?2?% rgba(117,112,117,.2)}.top-bar .top-bar-left[data-v-b2fc030e]{float:left}.top-bar .top-bar-left uni-image[data-v-b2fc030e]{width:%?68?%;height:%?68?%;margin-top:%?10?%;border-radius:%?16?%}.top-bar .top-bar-center[data-v-b2fc030e]{float:left}.top-bar .top-bar-center .logo[data-v-b2fc030e]{display:inline-block;padding-top:%?18?%;font-size:%?24?%;color:#ffe431}.top-bar .top-bar-center .title[data-v-b2fc030e]{line-height:%?88?%}.top-bar .top-bar-right[data-v-b2fc030e]{float:right;box-shadow:%?8?% %?10?% %?25?% %?-5?% rgba(117,112,117,.3);border-radius:%?40?%}.top-bar .top-bar-right .search[data-v-b2fc030e]{display:inline-block;width:%?70?%;height:%?78?%;padding-left:%?12?%}.top-bar .top-bar-right .add[data-v-b2fc030e]{width:%?78?%;height:%?78?%;display:inline-block}.top-bar .top-bar-right i[data-v-b2fc030e]{width:%?52?%;height:%?52?%;display:inline-block;font-size:%?19?%;padding:%?24?% %?5?% %?5?% %?15?%}\r\n/* 底部 */.bottom[data-v-b2fc030e]{position:fixed;bottom:%?20?%;width:100%;height:%?104?%;box-sizing:border-box;padding:%?12?% %?32?%;padding-bottom:env(safe-area-inset-bottom)}.bottom .bottom-btn[data-v-b2fc030e]{height:%?80?%;margin:0 auto;background:#ffe431;border-radius:%?20?%;text-align:center;line-height:%?80?%;font-size:%?32?%;color:#272832}.btn1[data-v-b2fc030e]{height:%?80?%;border-radius:%?20?%;text-align:center;line-height:%?80?%;font-size:%?32?%;color:#272832}\r\n/* 顶部 */.top-bar .search-div[data-v-b2fc030e]{position:absolute;top:0;left:0;width:100%;z-index:-1;padding:%?14?% %?118?% %?14?% %?32?%;box-sizing:border-box}.top-bar .search-div .search[data-v-b2fc030e]{padding:0 %?60?% 0 %?12?%;height:%?60?%;background:#f3f4f6;border-radius:%?10?%}.top-bar .search-div i[data-v-b2fc030e]{position:absolute;right:%?130?%;top:%?24?%}.top-bar .top-bar-right[data-v-b2fc030e]{float:right;padding-right:%?8?%;margin-top:%?9?%;box-shadow:none}.top-bar .top-bar-right .text[data-v-b2fc030e]{font-size:%?32?%;font-weight:500;color:#272832;line-height:%?70?%}\r\n/* 主体 */.main[data-v-b2fc030e]{padding:%?88?% %?32?%}.main .result[data-v-b2fc030e]{padding-top:%?32?%}.main .result .title[data-v-b2fc030e]{font-size:%?44?%;font-weight:600;color:#272832;line-height:%?60?%}.main .result .list[data-v-b2fc030e]{width:100%;height:%?90?%;padding:%?20?% 0}.main .result .list uni-image[data-v-b2fc030e]{float:left;width:%?80?%;height:%?80?%;border-radius:%?20?%}.main .result .names[data-v-b2fc030e]{float:left;padding-left:%?32?%}.main .result .names .name[data-v-b2fc030e]{font-size:%?36?%;color:#272832;line-height:%?50?%}.main .result .email[data-v-b2fc030e]{font-size:%?24?%;color:#272832;line-height:%?28?%}.main .result .right-btn[data-v-b2fc030e]{float:right;width:%?120?%;height:%?48?%;border-radius:%?24?%;font-size:%?24?%;line-height:%?48?%;text-align:center}.main .result .send[data-v-b2fc030e]{background:#ffe431;color:#272832}.main .result .add[data-v-b2fc030e]{background:rgba(74,170,255,.1);color:#5799ff}\r\n/* 弹出框 */.modify[data-v-b2fc030e]{position:absolute;z-index:1002;top:0;left:0;width:100%;height:100%;background-color:#fff}.modify .modify-header[data-v-b2fc030e]{width:100%;height:%?88?%;padding-top:0;display:flex;flex-direction:row;align-items:center;border-bottom:%?1?% solid rgba(39,20,50,.1);box-shadow:%?1?% %?1?% %?20?% %?2?% rgba(117,112,117,.2)}.modify .modify-header .close[data-v-b2fc030e]{padding-left:%?32?%;font-size:%?32?%;color:#272832;line-height:%?44?%}.modify .modify-header .title[data-v-b2fc030e]{flex:auto;text-align:center;font-size:%?40?%;color:#272832;line-height:%?88?%}.modify .modify-header .define[data-v-b2fc030e]{padding-right:%?32?%;font-size:%?35?%;color:#5799ff;line-height:%?88?%}.modify .modify-main[data-v-b2fc030e]{display:flex;flex-direction:column;padding:%?32?%}.modify .modify-main .modify-pwd[data-v-b2fc030e]{padding:0 %?22?%;margin-bottom:%?32?%;flex:auto;height:%?88?%;background:#f3f4f6;border-radius:%?20?%;font-size:%?32?%;color:#272832;line-height:%?88?%}.modify .modify-main .modify-content[data-v-b2fc030e]{flex:1;height:386;padding:%?22?%;margin:0 auto;background:#f3f4f6;border-radius:%?20?%;font-size:%?32?%;color:#272832;line-height:%?44?%}',""]),e.exports=t},"865a":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"bottom"},[a("v-uni-view",{staticClass:"nav-box"},e._l(e.list,(function(t,i){return a("v-uni-view",{key:i,staticClass:"nav-tab",class:[e.pageIndex==i?"nav-tab-active":"nav-tab-normal"],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toIndex(i)}}},[a("v-uni-view",{staticClass:"nav-icon"},[a("v-uni-view",{staticClass:"circle"},[a("v-uni-image",{attrs:{src:e.pageIndex==i?t.selectedIconPath:t.iconPath}})],1)],1),a("v-uni-view",{staticClass:"nav-text"},[e._v(e._s(t.text))])],1)})),1)],1)},n=[]},a4ee:function(e,t,a){"use strict";a.r(t);var i=a("865a"),n=a("30a4");for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("ea94");var o=a("f0c5"),s=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"7cfcacba",null,!1,i["a"],void 0);t["default"]=s.exports},a75c:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.bottom[data-v-7cfcacba]{position:fixed;bottom:0;left:0;right:0;width:100%;height:%?100?%;background:#fff;z-index:10}.nav-tab[data-v-7cfcacba]{fiex:1;text-align:center;width:100%;height:%?100?%}.nav-icon[data-v-7cfcacba]{height:%?30?%;box-sizing:border-box;padding:%?4?% 0 %?2?% 0}.nav-icon .circle uni-image[data-v-7cfcacba]{width:100%;height:100%}.nav-icon .iconfont[data-v-7cfcacba]{font-size:%?20?%}.nav-text[data-v-7cfcacba]{font-size:%?32?%;height:%?19?%;font-weight:200}.nav-tab-normal .nav-icon[data-v-7cfcacba]{display:flex;align-items:center;justify-content:center}.nav-tab-normal .circle[data-v-7cfcacba]{height:%?20?%;width:%?20?%;line-height:%?38?%;position:relative;border-radius:50%}.nav-tab-active .circle[data-v-7cfcacba]{height:%?28?%;width:%?28?%;line-height:%?38?%;position:relative;left:calc(50% - %?12?%);border-radius:50%}.nav-tab-active .circle uni-image[data-v-7cfcacba]{width:100%;height:100%}.nav-tab-active .iconfont[data-v-7cfcacba]{color:#fff}.nav-box[data-v-7cfcacba]{\r\n  /* position: absolute; */display:flex;width:100%;box-sizing:border-box}\r\n/*苹果x适配 H5APP*/@media only screen and (device-width:%?375?%) and (device-height:%?812?%) and (-webkit-device-pixel-ratio:3){.bottom[data-v-7cfcacba]{height:%?150?%}}\r\n/*苹果xs适配 H5APP*/@media only screen and (device-width:%?414?%) and (device-height:%?896?%) and (-webkit-device-pixel-ratio:3){.bottom[data-v-7cfcacba]{height:%?150?%}}\r\n/*苹果xr适配 H5APP*/@media only screen and (device-width:%?414?%) and (device-height:%?896?%) and (-webkit-device-pixel-ratio:2){.bottom[data-v-7cfcacba]{height:%?150?%}}',""]),e.exports=t},dc68:function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={Friends:function(){return[{id:1,imgurl:"avatar1.jpg",tip:2,name:"西西",email:"1123@qq.com",time:new Date,news:"我是消息我是消息我是消息我是消息我是消息我是消息我是消息我是消息"},{id:2,imgurl:"avatar2.jpg",tip:2,name:"哈哈",email:"1123@qq.com",time:new Date,news:"我是消息我是我是消息我是消息我是消是消息"},{id:3,imgurl:"avatar3.jpg",tip:222,name:"张三",email:"1123@qq.com",time:new Date,news:"我是消息我是消息我是消息我是消息"},{id:4,imgurl:"avatar4.jpg",tip:0,name:"李四",email:"1123@qq.com",time:new Date,news:"我是消息我是消息我是消息我是消息息我是消息"},{id:5,imgurl:"avatar5.jpg",tip:0,name:"二号",email:"1123@qq.com",time:new Date,news:"我是消息我是消消息我是消息我是消息我是消息"},{id:6,imgurl:"avatar6.jpg",tip:0,name:"哥哥",email:"1123@qq.com",time:new Date,news:"我是消息我"},{id:7,imgurl:"avatar6.jpg",tip:0,name:"哥哥",email:"1123@qq.com",time:new Date,news:"我是消息我"},{id:8,imgurl:"avatar6.jpg",tip:0,name:"哥哥",email:"1123@qq.com",time:new Date,news:"我是消息我"},{id:9,imgurl:"avatar6.jpg",tip:0,name:"哥哥",email:"1123@qq.com",time:new Date,news:"我是消息我"},{id:10,imgurl:"avatar6.jpg",tip:0,name:"哥哥",email:"1123@qq.com",time:new Date,news:"我是消息我"},{id:11,imgurl:"avatar6.jpg",tip:0,name:"哥哥",email:"1123@qq.com",time:new Date,news:"我是消息我"}]},isFriend:function(){return[{userid:1,friend:1},{userid:1,friend:5},{userid:1,friend:6},{userid:1,friend:8},{userid:1,friend:5}]},Message:function(){return[{id:"a",type:2,imgurl:"avatar5.jpg",tip:21,name:"西西",email:"1123@qq.com",time:new Date,message:{voice:"a",time:10}},{id:"a",type:2,imgurl:"avatar5.jpg",tip:20,name:"西西",email:"1123@qq.com",time:new Date,message:{voice:"a",time:10}},{id:"a",type:2,imgurl:"avatar5.jpg",tip:19,name:"西西",email:"1123@qq.com",time:new Date,message:{voice:"a",time:10}},{id:"a",type:2,imgurl:"avatar5.jpg",tip:18,name:"西西",email:"1123@qq.com",time:new Date,message:{voice:"a",time:10}},{id:"b",type:2,imgurl:"avatar2.jpg",tip:17,name:"西西",email:"1123@qq.com",time:new Date,message:{voice:"a",time:20}},{id:"b",type:3,imgurl:"avatar3.jpg",tip:16,name:"西西",email:"1123@qq.com",time:new Date,message:{name:"锡广场",address:"西街",latitude:"39.901951",longitude:"116.406403"}},{id:"a",type:3,imgurl:"avatar1.jpg",tip:15,name:"西西",email:"1123@qq.com",time:new Date,message:{name:"广场",address:"西街大概多少过武术规土委阁微观讽德诵功大",latitude:"39.901951",longitude:"116.406403"}},{id:"a",type:1,imgurl:"avatar1.jpg",tip:14,name:"西西",email:"1123@qq.com",time:new Date,message:"我是消息我是消息我是消息我是消息我是消息我是消息我是消息我是消息"},{id:"a",type:1,imgurl:"avatar1.jpg",tip:13,name:"西西",email:"1123@qq.com",time:new Date,message:"我是消息我是消息我是消息我是消息我是消息我是消息我是消息我是消息"},{id:"a",type:1,imgurl:"avatar1.jpg",tip:12,name:"西西",email:"1123@qq.com",time:new Date,message:"我是消息我是消息我是消息我是消息我是消息我是消息我是消息我是消息"},{id:"a",type:1,imgurl:"avatar1.jpg",tip:11,name:"西西",email:"1123@qq.com",time:new Date,message:"我是消息我是消息我是消息我是消息我是消息我是消息我是消息我是消息"},{id:"a",type:1,imgurl:"avatar2.jpg",tip:1,name:"哈哈",email:"1123@qq.com",time:new Date-16e3,message:"我是消息我是我是消息我是消息我是消是消息"},{id:"a",type:1,imgurl:"avatar3.jpg",tip:2,name:"张三",email:"1123@qq.com",time:new Date-6e4,message:"我是消息我是消息我是消息我是消息"},{id:"b",type:0,imgurl:"avatar4.jpg",tip:3,name:"李四",email:"1123@qq.com",time:new Date-36e5,message:"我是消息我是消息我是消息我是消息息我是消息"},{id:"a",type:1,imgurl:"avatar5.jpg",tip:4,name:"二号",email:"1123@qq.com",time:new Date-864e5,message:"我是消息我是消消息我是消息我是消息我是消息"},{id:"b",type:0,imgurl:"avatar6.jpg",tip:5,name:"哥哥",email:"1123@qq.com",time:new Date-144e4,message:"我是消息我1"},{id:"b",type:0,imgurl:"avatar6.jpg",tip:6,name:"哥哥",email:"1123@qq.com",time:new Date-864e5,message:"我是消息我2"},{id:"b",type:0,imgurl:"avatar6.jpg",tip:7,name:"哥哥",email:"1123@qq.com",time:new Date-864e5,message:"我是消息我3"},{id:"b",type:1,imgurl:"avatar6.jpg",tip:8,name:"哥哥",email:"1123@qq.com",time:new Date-864e5,message:"我是消息我4"},{id:"b",type:0,imgurl:"avatar6.jpg",tip:9,name:"哥哥",email:"1123@qq.com",time:new Date-144e4,message:"我是消息我5"},{id:"a",type:1,imgurl:"avatar6.jpg",tip:10,name:"哥哥",email:"1123@qq.com",time:new Date-864e5,message:"我是消息我6"}]}};t.default=i},ea94:function(e,t,a){"use strict";var i=a("fc68"),n=a.n(i);n.a},ee52:function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"myFootBar",props:["pageIndex"],data:function(){return{list:[{iconPath:"/static/images/footbar/index1.png",selectedIconPath:"/static/images/footbar/index.png",text:"消息",url:"/pages/index/index"},{iconPath:"/static/images/footbar/fi1.png",selectedIconPath:"/static/images/footbar/fi.png",text:"联系人",url:"/pages/friend/friend"},{iconPath:"/static/images/footbar/star1.png",selectedIconPath:"/static/images/footbar/star.png",text:"动态",url:"/pages/dynamic/dynamic"},{iconPath:"/static/images/footbar/run2.png",selectedIconPath:"/static/images/footbar/run1.png",text:"运动",url:"/pages/run/run"}],home:0}},methods:{toIndex:function(e){this.home=e,uni.navigateTo({url:this.list[e].url})}}};t.default=i},fc68:function(e,t,a){var i=a("a75c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("26902011",i,!0,{sourceMap:!1,shadowMode:!1})}}]);