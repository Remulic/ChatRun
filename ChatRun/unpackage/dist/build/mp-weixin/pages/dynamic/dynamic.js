(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dynamic/dynamic"],{"094d":function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){}));var a=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.showModify=!1})},i=[]},7774:function(e,n,t){},b9a4:function(e,n,t){"use strict";t.r(n);var a=t("d99b"),i=t.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(o);n["default"]=i.a},d949:function(e,n,t){"use strict";t.r(n);var a=t("094d"),i=t("b9a4");for(var o in i)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(o);t("fb3e");var s=t("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=u.exports},d99b:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(t("ec9e"));var i={data:function(){return{pageIndex:2,dynamicArr:[],uid:"",token:"",markname:"小明",myname:"",name:"",nowPage:0,showModify:!1,data:"",images:"",newimages:[],content:""}},components:{myFootBar:function(){t.e("components/myFootBar").then(function(){return resolve(t("4079"))}.bind(null,t)).catch(t.oe)}},onLoad:function(){this.getStorages(),this.dynamicLoad()},methods:{getStorages:function(){try{var n=e.getStorageSync("user");n?(this.uid=n.id,this.imgurl=this.serverUrl+"/"+n.imgurl,this.token=n.token,this.myname=n.name):e.navigateTo({url:"../signin/signin"})}catch(t){}},dynamicLoad:function(){var n=this;e.request({url:this.serverUrl+"/dynamic/dynamicload",data:{pageSize:10,nowPage:this.nowPage,token:this.token},method:"POST",success:function(t){var i=t.data.status,o=t.data.result;console.log(o),200===i?(o.forEach((function(e){e.time=a.default.dataTime(e.time)})),n.dynamicArr=n.dynamicArr.concat(o),n.nowPage++,console.log(n.dynamicArr)):500===i?e.showToast({title:"服务器出错了...",icon:"none",duration:1500}):300===i&&e.navigateTo({url:"/pages/signin/signin?name="+n.myname})}})},chooseImage:function(){var n=this;e.chooseImage({count:9,sizeType:["compressed"],sourceType:["album"],success:function(e){0!=n.images.length?n.images=n.images.concat(e.tempFilePaths):n.images=e.tempFilePaths}})},modifySub:function(){var n=this;this.images&&this.imagesave(),setTimeout((function(){e.request({url:n.serverUrl+"/dynamic/newdynamic",data:{id:n.uid,message:n.data,picture:n.newimages,name:n.myname,token:n.token,imgurl:n.imgurl},method:"POST",success:function(t){var i=t.data.status,o=t.data.result;console.log(o),200===i?(o.picture=n.newimages,o.time=a.default.dataTime(new Date),n.dynamicArr.push(o),n.showModify=!1):500===i?e.showToast({title:"服务器出错了...",icon:"none",duration:1500}):300===i&&e.navigateTo({url:"/pages/signin/signin?name="+n.myname})}})}),100)},imagesave:function(){var n=this,t=a.default.fileName(new Date);this.images.forEach((function(a){e.uploadFile({url:n.serverUrl+"/files/upload",filePath:a,name:"file",formData:{url:t,name:(new Date).getTime()+n.uid+Math.ceil(10*Math.random())},success:function(e){a=n.serverUrl+"/"+e.data,n.newimages.push(a)}})}))},deletedynamic:function(n,t){var a=this;e.showModal({title:"提醒",content:"是否删去本条动态",success:function(i){i.confirm&&e.request({url:a.serverUrl+"/dynamic/deletedynamic",data:{id:n,token:a.token},method:"POST",success:function(n){var i=n.data.status;if(200===i){a.dynamicArr.splice(t,1);console.log(11)}else 500===i?e.showToast({title:"服务器出错了...",icon:"none",duration:1500}):300===i&&e.navigateTo({url:"/pages/signin/signin?name="+a.myname})}})}})},previewImg:function(n){e.previewImage({urls:n,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(e){},fail:function(e){}}})},showdodify:function(){this.showModify=!0,this.images="",this.newimages=[]},modify:function(n){e.navigateTo({url:"../discuss/discuss?id="+n.id})},changeTime:function(e){return a.default.dataTime(e)}}};n.default=i}).call(this,t("543d")["default"])},f4af:function(e,n,t){"use strict";(function(e){t("1a46");a(t("66fd"));var n=a(t("d949"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},fb3e:function(e,n,t){"use strict";var a=t("7774"),i=t.n(a);i.a}},[["f4af","common/runtime","common/vendor"]]]);