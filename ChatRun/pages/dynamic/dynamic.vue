<template>
	<view class="main content animate__animated animate__fadeIn animate__faster">
		<!-- 顶部 -->
		<view class="top-bar">
			<navigator :url="'../userhome/userhome?id='+uid" hover-class="none" class="top-bar-left">
				<image :src="imgurl"></image>
			</navigator>
			<view class="top-bar-right">
				<!-- <view class="search" @tap="toSearch">
					<i class="iconfont icon-searchsousuo"></i>
				</view> -->
				<view class="add" @tap="showdodify">
					<i class="iconfont icon-jia"></i>
				</view>
			</view>
		</view>
		
		<view class="search-user result">
			<view class="title"></view>
			<view class="list user animate__animated animate__fadeIn animate__faster "
						v-for="(item, index) in dynamicArr"
						:keys="item.id">
				<view class="animate__animated animate__bounceInLeft card">
					<view class="listhead">
						<navigator :url="'../userhome/userhome?id='+item.userid">
							<image :src="item.imgurl" mode=""></image>
						</navigator>
						
						<view class="names">
							<!-- <view v-html="item.name" class="name"></view> -->
							<view class="name">
								<view>
									{{item.name}}
								</view>
								<view class="nameright" @tap="deletedynamic(item.id,index)" v-if="item.userid==uid">
									<i class="iconfont icon-gengduo" ></i>
								</view>
							</view>
							<view v-html="item.time" class="email"></view>
						</view>
					</view>
					<view class="msg">
						<view class="message">
							{{item.message}}
						</view>
						<view class="imgArea" v-if="item.picture">
							<view @tap="previewImg(pic)" v-for="(pic,indexs) in item.picture">
								<image  :src="pic" mode=""></image>
							</view>
						</view>
						
					</view>
					<view class="talk">
						<view class="talk-left" >
							<i class="iconfont icon-redu"></i>
							热度{{item.talker}}
						</view>
						<view class="talk-right" >
							<i class="iconfont icon-pinglun"  @tap="modify(item)"></i>
						</view>
					</view>
				</view>
				
			</view>
			<!-- 弹出层 -->
			<view v-show="showModify" class="modify animate__animated animate__slideInUp animate__faster">
				<view class="modify-header ">
					<view class="close" @tap="showModify=false">取消</view>
					<!-- <view class="title">{{modifyTitle}}</view> -->
					<view class="define" @tap="modifySub">发表</view>
				</view>
				<view class='modify-main'>
				    <textarea class='modify-text' placeholder='这一刻的想法...' autoHeight="true" placeholder-style='color:#888'  v-model="data"/><!-- bindinput="getInputValue" -->
				    <view class='modify-img'>
				        <view v-for="(item,index) in images"  ><!-- @tap="ViewImage" -->
				            <image  :src='item' mode='aspectFill' />
				        </view>
				        <view @tap='chooseImage'><i class='iconfont icon-jiahao1'></i></view>
				    </view>
				</view>
			</view>
		</view>
		<myFootBar :pageIndex="pageIndex"></myFootBar>
	</view>
</template>

<script>
	import myFootBar from '@/components/myFootBar.vue'
	import myfun from '../../commons/js/myfun.js'
	export default {
		data() {
			return {
				pageIndex: 2,
				dynamicArr: [],
				uid: '',
				token: '',
				markname: '小明',
				myname: '',
				name: '',
				nowPage:0,
				
				showModify: false,
				//提交数据
				data:'',
				images:'',
				newimages:[],
				content:''
			};
		},
		components:{myFootBar},
		onLoad() {
			this.getStorages()
			this.dynamicLoad()
		},
		onPullDownRefresh(){
			this.dynamicArr=[]
			this.nowPage=0
			this.dynamicLoad()
		},
		onReachBottom(){
			this.dynamicLoad()
		},
		methods:{
			getStorages() {
				try{
					const value = uni.getStorageSync('user')
					if(value) {
						this.uid = value.id
						this.imgurl = this.serverUrl+'/'+ value.imgurl
						this.token = value.token
						this.myname = value.name
					}else {
						uni.navigateTo({
							url: '../signin/signin',
						})
					}
					// console.log(value)
				}catch(e){
					//TODO handle the exception
				}
			},
			dynamicLoad(){
				uni.request({
						url: this.serverUrl+'/dynamic/dynamicload',
						data:{
							pageSize:10,
							nowPage:this.nowPage,
							token: this.token
						},
						method: 'POST',
						success: (data)=>{
							let status = data.data.status
							let res = data.data.result
							console.log(res);
							if(status===200){
								res.forEach(item=>{
									item.time=myfun.dataTime(item.time)
								})
								this.dynamicArr=this.dynamicArr.concat(res)
								if(res.length === 10){
									this.nowPage++ // 下一页
								} else {
									this.nowPage = -1 //获取完毕
								}
								console.log(this.dynamicArr);
							}else if(status===500){
								uni.showToast({
								    title: '服务器出错了...',
										icon:'none',
								    duration: 1500
								});
							}else if(status===300){	// token过期
								uni.navigateTo({
									url:'/pages/signin/signin?name='+this.myname
								})
							}
						}
					})	
			},
			
			//选图
			chooseImage() {
			    uni.chooseImage({
			        count: 9, //默认9
			        sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
			        sourceType: ['album'], //从相册选择
			        success: (res) => {
						if (this.images.length != 0) {
							this.images=this.images.concat(res.tempFilePaths)
						} else {
							this.images = res.tempFilePaths
						}  
			        }
			    });
			},
			//发表说说
			modifySub(){
				if(this.images){
					this.imagesave()
				}
				setTimeout(()=> {
					uni.request({
						url: this.serverUrl+'/dynamic/newdynamic',
						data:{
							id: this.uid,	// 传参来的id
							message:this.data,
							picture:this.newimages,
							name:this.myname,
							token: this.token,
							imgurl: this.imgurl
						},
						method: 'POST',
						success: (data)=>{
							let status = data.data.status
							let res = data.data.result
							console.log(res);
							if(status===200){
								res.picture = this.newimages
								res.time = myfun.dataTime(new Date()) 
								this.dynamicArr.push(res)
								// console.log(this.user)
								this.showModify=false
								
							}else if(status===500){
								uni.showToast({
								    title: '服务器出错了...',
										icon:'none',
								    duration: 1500
								});
							}else if(status===300){	// token过期
								uni.navigateTo({
									url:'/pages/signin/signin?name='+this.myname
								})
							}
						}
					})
				}, 100)
				
			},
			//图像保存处理
			imagesave(){
				let url = myfun.fileName(new Date())	// 当天的文件夹名
				this.images.forEach(item=>{
					let image=''
						uni.uploadFile({
							url: this.serverUrl+'/files/upload', //仅为示例，非真实的接口地址
							filePath: item,
							name: 'file',
							formData: {
								'url': url,	// 每天建一个文件夹
								name: new Date().getTime()+this.uid+Math.ceil(Math.random()*10)		//文件名
							},
							success: (uploadFileRes) => {
								item=this.serverUrl+'/'+uploadFileRes.data    // 存储到服务器的图片消息数据
								this.newimages.push(item)
							},
						});
				})
			},
			
			deletedynamic(id,index){
				uni.showModal({
				    title: '提醒',
				    content: '是否删去本条动态',
				    success: r => {
				    if (r.confirm) {
				        uni.request({
				        	url: this.serverUrl+'/dynamic/deletedynamic',
				        	data:{
				        		id: id,	// 传参来的id
				        		token: this.token,
				        	},
				        	method: 'POST',
				        	success: (data)=>{
				        		let status = data.data.status
				        		// let res = data.data.result
				        		if(status===200){
									let a=this.dynamicArr.splice(index, 1)
				        			console.log(11);
				        		}else if(status===500){
				        			uni.showToast({
				        			    title: '服务器出错了...',
				        					icon:'none',
				        			    duration: 1500
				        			});
				        		}else if(status===300){	// token过期
				        			uni.navigateTo({
				        				url:'/pages/signin/signin?name='+this.myname
				        			})
				        		}
				        	}
				        })
				        }
				    }
				})
			},
			//预览图片
			previewImg(pic){
				// let thisIndex = 0
				
				// this.dynamicArr[index].pic.map((item, key)=> {
					
				// 	if(item===pic) {
				// 		thisIndex = key
				// 	}
				// })
				// console.log(this.msgImgArr, this.msgs)
				// 预览图片
				uni.previewImage({
					// current: thisIndex,
					urls: pic,
					longPressActions: {
							itemList: ['发送给朋友', '保存图片', '收藏'],
							success: function(data) {
									// console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
							},
							fail: function(err) {
									// console.log(err.errMsg);
							}
					}
				});
			},
			showdodify(){
				this.showModify=true
				this.images=''
				this.newimages=[]
			},
			modify(dynamic){
				uni.navigateTo({
					url:'../discuss/discuss?id='+dynamic.id
				})	
			},
			changeTime(date) {
				return myfun.dataTime(date)
			},
		}
	}
</script>

<style lang="scss">
	@import '../../commons/css/mycss.scss';
	.top-bar {
		background: $uni-color-primary;
		.top-bar-right {
			margin-top: 4rpx;
			.add {
				padding-left: 20rpx;
			}
		}
	}
	.main {
		padding: 88rpx 5rpx;
		.result {
			padding-top: $uni-spacing-col-base;
			.title {
				font-size: 44rpx;
				font-weight: 600;
				color: $uni-text-color;
				line-height: 60rpx;
			}
			.list {
				width: 100%;
				// height: 90rpx;
				padding: 10rpx 0;
				display: flex;
				image {
					float: left;
					width: 80rpx;
					height: 80rpx;
					border-radius: $uni-border-radius-base;
				}
			}
			.card{
				padding: 20rpx;
				background: rgb(250, 250, 250);
				// padding: 30rpx;
				width: 100%;
				.names {
					// float: left;
					margin-left: 100rpx;
					.name {
						font-size: 36rpx;
						color: $uni-text-color;
						line-height: 50rpx;
						.nameright{
							position: relative;
							bottom: 60rpx;
							i{
								float: right;
								font-size: 35rpx;
							}
						}
						
					}
					.email {
						font-size: $uni-font-size-sm;
						color: $uni-text-color;
						line-height: 28rpx;
					}
				}
				.msg {
					font-size: 30rpx;
					float: left;
					width: 100%;
					padding: 20rpx 0;
				}
				.imgArea {
				    display: flex;
				    flex-wrap: wrap;
				    padding-right: 30rpx;
					// flex-direction
					width: 100%;
					// height: 160rpx;
					image {
					    width: 250rpx;
					    height: 250rpx;
					    margin: 0 10rpx 10rpx 0;
					}
				}
				.talk{
					font-size: 24rpx;
					color: rgb(250, 86, 10);
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					i{
						font-size: 30rpx;
					}
				}
			}
		}
	}
	.modify {
		position: fixed;
		z-index: 1;
		top: 90rpx;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #fff;
		
		.modify-header {
			width: 100%;
			height: 88rpx;
			padding-top: var(--status-bar-height);
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid $uni-border-color;
			box-shadow: 1rpx 1rpx 20rpx 2rpx rgba(117, 112, 117, 0.2);
			
			.close {
				padding-left: 32rpx;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 44rpx;
			}
			// .title {
			// 	flex: auto;
			// 	text-align: center;
			// 	font-size: 40rpx;
			// 	color: $uni-text-color;
			// 	line-height: 88rpx;
			// }
			.define {
				padding-right: $uni-spacing-col-base;
				font-size: 35rpx;
				color: $uni-color-success;
				line-height: 88rpx;
			}
		}
		.modify-main {
		    padding: 60rpx 60rpx;
			width: 100%;
			.modify-text {
			    min-height: 100rpx; 
			    // height: 180rpx;
			    overflow-y: visible;
			    font-size: 13pt;
			    line-height: 20pt;
			    color: #353535
			}
			.modify-img {
			    display: flex;
			    flex-wrap: wrap;
			    justify-content: flex-start;
			    align-content: space-between;
				image {
				    width: 160rpx;
				    height: 160rpx;
				    margin: 0 10rpx 10rpx 0;
				}
				i{
					font-size:160rpx;
					color: #ededed;
				}
			}
		}
	}
</style>
