(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-signup-signup"],{"19c4":function(t,i,a){"use strict";var e=a("d75c"),n=a.n(e);n.a},"373e":function(t,i,a){"use strict";a.r(i);var e=a("dd9b"),n=a("5e32");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(o);a("19c4");var s=a("f0c5"),r=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"7a3249be",null,!1,e["a"],void 0);i["default"]=r.exports},"49a0":function(t,i,a){"use strict";a("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,a("ac1f"),a("00b4");var e={data:function(){return{type:"password",isuser:!1,employ:!1,isemail:!1,invalid:!1,look:!1,ispwd:!1,email:"",isok:!1,user:"",psw:""}},computed:{isOk:function(){return this.isuser&&this.isemail&&this.psw.length>5?this.isok=!0:this.isok=!1}},methods:{looks:function(){this.look?(this.type="password",this.look=!this.look):(this.type="text",this.look=!this.look)},isEmail:function(){this.email?/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-z0-9]+\.([a-zA-z]{2,4})$/.test(this.email)?(this.invalid=!1,this.matchEmail()):(this.isemail=!1,this.invalid=!0):(this.invalid=!1,this.isemail=!1,this.isOk)},matchUser:function(){var t=this;this.user.length>0?uni.request({url:this.serverUrl+"/signup/judge",data:{data:this.user,type:"name"},method:"POST",success:function(i){var a=i.data.status;if(200===a){var e=i.data.result;e>0?(t.employ=!0,t.isuser=!1):(t.employ=!1,t.isuser=!0),t.isOk}else 500===a&&uni.showToast({title:"服务器出错了...",icon:"none",duration:1500})}}):(this.employ=!1,this.isuser=!1,this.isOk)},matchEmail:function(){var t=this;uni.request({url:this.serverUrl+"/signup/judge",data:{data:this.email,type:"email"},method:"POST",success:function(i){var a=i.data.status;if(200===a){var e=i.data.result;e>0?(t.invalid=!0,t.isemail=!1):(t.invalid=!1,t.isemail=!0),t.isOk}else 500===a&&uni.showToast({title:"服务器出错了...",icon:"none",duration:1500})}})},getPsw:function(t){this.psw=t.detail.value,this.isOk},signUp:function(){var t=this;this.matchEmail(),this.matchUser(),this.isOk&&uni.request({url:this.serverUrl+"/signup/add",data:{name:this.user,mail:this.email,psw:this.psw},method:"POST",success:function(i){var a=i.data.status;200===a?uni.navigateTo({url:"/pages/signin/signin?user="+t.user}):500===a&&uni.showToast({title:"服务器出错了...",icon:"none",duration:1500})}})},backOnePage:function(){uni.navigateBack({delta:1})}}};i.default=e},"5e32":function(t,i,a){"use strict";a.r(i);var e=a("49a0"),n=a.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=n.a},"9e9e":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 公共样式 */.contents[data-v-7a3249be]{padding-top:0}\r\n/* 顶部 */.top-bar[data-v-7a3249be]{z-index:100;width:92%;height:%?88?%;position:fixed;top:0;left:0;background:hsla(0,0%,100%,.96);border-bottom:%?1?% solid rgba(39,20,50,.1);padding-left:%?32?%;padding-right:%?32?%;padding-top:0;box-shadow:%?1?% %?1?% %?20?% %?2?% rgba(117,112,117,.2)}.top-bar .top-bar-left[data-v-7a3249be]{float:left}.top-bar .top-bar-left uni-image[data-v-7a3249be]{width:%?68?%;height:%?68?%;margin-top:%?10?%;border-radius:%?16?%}.top-bar .top-bar-center[data-v-7a3249be]{float:left}.top-bar .top-bar-center .logo[data-v-7a3249be]{display:inline-block;padding-top:%?18?%;font-size:%?24?%;color:#ffe431}.top-bar .top-bar-center .title[data-v-7a3249be]{line-height:%?88?%}.top-bar .top-bar-right[data-v-7a3249be]{float:right;box-shadow:%?8?% %?10?% %?25?% %?-5?% rgba(117,112,117,.3);border-radius:%?40?%}.top-bar .top-bar-right .search[data-v-7a3249be]{display:inline-block;width:%?70?%;height:%?78?%;padding-left:%?12?%}.top-bar .top-bar-right .add[data-v-7a3249be]{width:%?78?%;height:%?78?%;display:inline-block}.top-bar .top-bar-right i[data-v-7a3249be]{width:%?52?%;height:%?52?%;display:inline-block;font-size:%?19?%;padding:%?24?% %?5?% %?5?% %?15?%}\r\n/* 底部 */.bottom[data-v-7a3249be]{position:fixed;bottom:%?20?%;width:100%;height:%?104?%;box-sizing:border-box;padding:%?12?% %?32?%;padding-bottom:env(safe-area-inset-bottom)}.bottom .bottom-btn[data-v-7a3249be]{height:%?80?%;margin:0 auto;background:#ffe431;border-radius:%?20?%;text-align:center;line-height:%?80?%;font-size:%?32?%;color:#272832}.btn1[data-v-7a3249be]{height:%?80?%;border-radius:%?20?%;text-align:center;line-height:%?80?%;font-size:%?32?%;color:#272832}\r\n/* 顶部 */.top-bar[data-v-7a3249be]{box-shadow:none;border-bottom:none}.top-bar .top-bar-left[data-v-7a3249be]{width:%?88?%;height:100%}.top-bar .top-bar-left i[data-v-7a3249be]{display:inline-block;margin-top:%?25?%}.top-bar .top-bar-right[data-v-7a3249be]{float:right;padding-right:%?8?%;margin-top:%?4?%;background-color:#ffe431}.top-bar .top-bar-right .text[data-v-7a3249be]{font-size:%?32?%;font-weight:500;color:hsla(0,0%,100%,.6);line-height:%?88?%}\r\n/* logo */.logo .moni-img-logo[data-v-7a3249be]{padding-top:%?256?%;width:%?194?%;height:%?92?%;font-size:%?60?%;margin:0 auto;text-align:center;color:#ffe431}.logo .moni-img-logo i[data-v-7a3249be]{color:#ffe431;font-size:%?80?%}\r\n/* 主体 */.main[data-v-7a3249be]{padding:%?54?% %?60?% %?120?%}.main .title[data-v-7a3249be]{text-align:center;font-size:%?40?%;color:rgba(39,40,50,.6);line-height:%?56?%}.main .title span[data-v-7a3249be]{font-size:%?50?%;color:#ffe431}.main .slogan[data-v-7a3249be]{text-align:center;font-size:%?40?%;color:rgba(39,40,50,.6);line-height:%?56?%}.main .slogan span[data-v-7a3249be]{font-size:%?50?%;color:#ffe431}.main .inputs[data-v-7a3249be]{padding-top:%?48?%}.main .inputs uni-input[data-v-7a3249be]{padding-top:%?40?%;height:%?88?%;font-size:%?32?%;fonf-weight:500;color:#272832;line-height:%?88?%;border-bottom:%?1?% solid rgba(39,20,50,.1)}.main .inputs-div[data-v-7a3249be]{position:relative}.main .employ[data-v-7a3249be], .main .invalid[data-v-7a3249be]{position:absolute;top:%?40?%;right:0;font-size:%?28?%;fonf-weight:500;color:#ff5d5b;line-height:%?88?%}.main .ok[data-v-7a3249be]{position:absolute;right:0;top:%?70?%;width:%?42?%;height:%?32?%;color:#5799ff}.submit[data-v-7a3249be]{margin:0 auto;width:85%;height:%?96?%;background:#ffe431;box-shadow:%?0?% %?5?% %?32?% %?-36?% rgba(255,220,49,.4);border-radius:%?20?%;font-size:%?32?%;font-weight:500;color:#272832;line-height:%?96?%;text-align:center;box-shadow:%?8?% %?10?% %?25?% %?-5?% rgba(117,112,117,.3)}.submit1[data-v-7a3249be]{margin:0 auto;width:85%;height:%?96?%;background:rgba(39,40,50,.2);box-shadow:%?0?% %?5?% %?32?% %?-36?% rgba(255,220,49,.4);border-radius:%?20?%;font-size:%?32?%;font-weight:500;color:#fff;line-height:%?96?%;text-align:center;box-shadow:%?8?% %?10?% %?25?% %?-5?% rgba(117,112,117,.3)}\r\n/* 底部logo */.bot-logo[data-v-7a3249be]{display:flex;justify-content:center;align-items:center;width:100%;position:fixed;bottom:%?15?%;right:0;color:rgba(39,40,50,.6);font-size:.8rem}.bot-logo i[data-v-7a3249be]{display:inline-block;font-size:1.1rem;margin-right:%?1?%;margin-top:%?-3?%}',""]),t.exports=i},d75c:function(t,i,a){var e=a("9e9e");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("ebb7a62c",e,!0,{sourceMap:!1,shadowMode:!1})},dd9b:function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"contents animate__animated animate__fadeIn animate__faster"},[a("v-uni-view",{staticClass:"top-bar"},[a("v-uni-view",{staticClass:"top-bar-left",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.backOnePage.apply(void 0,arguments)}}},[a("i",{staticClass:"iconfont icon-xiazai6"})])],1),a("v-uni-view",{staticClass:"logo"},[a("v-uni-view",{staticClass:"moni-img-logo"},[a("v-uni-view",{staticClass:"animate__animated animate__bounceInDown",staticStyle:{display:"inline-block"}},[t._v("i")]),a("v-uni-view",{staticClass:"animate__animated animate__bounceInLeft",staticStyle:{display:"inline-block"}},[a("i",{staticClass:"iconfont icon-paobu logo"})])],1)],1),a("v-uni-view",{staticClass:"main"},[a("v-uni-view",{staticClass:"title"},[a("span",[t._v("注册中心")])]),a("v-uni-view",{staticClass:"inputs"},[a("v-uni-view",{staticClass:"inputs-div"},[a("v-uni-input",{staticClass:"user",attrs:{type:"text",placeholder:"用户名","placeholder-style":"color: #aaa; font-weight:400;"},on:{blur:function(i){arguments[0]=i=t.$handleEvent(i),t.matchUser.apply(void 0,arguments)}},model:{value:t.user,callback:function(i){t.user=i},expression:"user"}}),t.employ?a("v-uni-view",{staticClass:"employ"},[t._v("用户已存在")]):t._e(),t.isuser?a("i",{staticClass:"iconfont icon-profile ok"}):t._e()],1),a("v-uni-view",{staticClass:"inputs-div"},[a("v-uni-input",{staticClass:"email",attrs:{type:"text",placeholder:"邮箱","placeholder-style":"color: #aaa; font-weight:400;"},on:{blur:function(i){arguments[0]=i=t.$handleEvent(i),t.isEmail.apply(void 0,arguments)}},model:{value:t.email,callback:function(i){t.email=i},expression:"email"}}),t.invalid?a("v-uni-view",{staticClass:"invalid"},[t._v("无效邮箱")]):t._e(),t.isemail?a("i",{staticClass:"iconfont icon-atsign ok"}):t._e()],1),a("v-uni-view",{staticClass:"inputs-div"},[a("v-uni-input",{staticClass:"psw",attrs:{type:t.type,maxlength:"140",stepautocomplete:"off",value:"",placeholder:"密码","placeholder-style":"color: #aaa; font-weight:400;"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.getPsw.apply(void 0,arguments)}}}),t.ispwd?a("v-uni-view",{staticClass:"employ"},[t._v("已存在")]):t._e(),t.look?t._e():a("i",{staticClass:"iconfont icon-yanjing ok",staticStyle:{color:"#808080"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.looks.apply(void 0,arguments)}}}),t.look?a("i",{staticClass:"iconfont icon-yanjing ok",staticStyle:{color:"rgba(255, 228, 49, 1)"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.looks.apply(void 0,arguments)}}}):t._e()],1)],1)],1),a("v-uni-view",{class:{submit:t.isok,submit1:!t.isok},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.signUp.apply(void 0,arguments)}}},[t._v("点击注册")])],1)},n=[]}}]);