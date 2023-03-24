<template>
	<view class="main">
			<view class="animate__animated animate__bounceInLeft card">
				<view class="list">
					<navigator :url="'../userhome/userhome?id='+dynamic.userid">
						<image :src="dynamic.imgurl" mode=""></image>
					</navigator>
					
					<view class="names">
						<!-- <view v-html="item.name" class="name"></view> -->
						<view class="name">
							<view>
								{{dynamic.name}}
							</view>
							<view class="nameright" @tap="deletedynamic(dynamic.id,index)" v-if="dynamic.userid==uid">
								<i class="iconfont icon-gengduo" ></i>
							</view>
						</view>
						<view v-html="dynamic.time" class="time"></view>
					</view>
				</view>
				<view class="msg">
					<view class="message">
						{{dynamic.message}}
					</view>
					<view class="imgArea" v-if="dynamic.picture">
						<view @tap="previewImg(pic)" v-for="(pic,indexs) in dynamic.picture">
							<image  :src="pic" mode=""></image>
						</view>
					</view>
					
				</view>
				<view class="talk">
					<view class="talk-left" >
						<i class="iconfont icon-redu"></i>
						热度{{dynamic.talker}}
					</view>
					<view class="talk-right" >
						<i class="iconfont icon-pinglun"  @tap="isinput=true"></i>
					</view>
				</view>
				<view class="sendcomment" v-show="isinput">
					<input class="search" focus="true" v-model="message" placeholder="我也来句废话" placeholder-style="color: #aaa;"/>
					<view class="top-bar-right " @tap="sendcomment">
						发送
					</view>
				</view>
				
			</view>
			<view class="comment animate__animated animate__bounceInLeft" v-for="(item,index) in commentArr" @longpress="deletediscuss(item,index)">
				<view class="name" @tap="moveuser(item)">{{item.name}} : </view>
				<view class="message">
					{{item.message}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import myfun from '../../commons/js/myfun.js'
	export default {
		data() {
			return {
				isinput:false,
				nowPage:0,
				//本人信息
				uid:'',
				imgurl:'',
				token:'',
				myname:'',
				
				//动态信息
				id:'',
				dynamic:'',
				
				//评论
				commentArr:[],
				message:'',
			};
		},
		onLoad(e) {
			this.id=e.id
			this.getStorages()
			this.getDynamic()
			this.discussLoad()
		},
		// onReachBottom(){
		// 	this.discussLoad()
		// },
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
				}catch(e){
					//TODO handle the exception
				}
			},
			getDynamic(){
			    uni.request({
			    	url: this.serverUrl+'/dynamic/finddynamic',
			    	data:{
			    		id: this.id,	// 传参来的id
			    		token: this.token
			    	},
			    	method: 'POST',
					success: (data)=>{
						let status = data.data.status
						let res = data.data.result
						console.log(res)
						if(status===200){
							res.time=myfun.dataTime(res.time)
							this.dynamic=res
							console.log(res)
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
			discussLoad(){
				uni.request({
						url: this.serverUrl+'/discuss/discussload',
						data:{
							id:this.id,
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
								this.commentArr=this.commentArr.concat(res)
								this.nowPage++
								console.log(this.commentArr);
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
			sendcomment(){
				// console.log(this.message);
				uni.request({
					url: this.serverUrl+'/discuss/newdiscuss',
					data:{
						uid: this.uid,	// 传参来的id
						message:this.message,
						token: this.token,
						name: this.myname,
						id: this.id
					},
					method: 'POST',
					success: (data)=>{
						let status = data.data.status
						let res = data.data.result
						console.log(res);
						if(status===200){
							this.commentArr.push(res)
							console.log(this.commentArr)
							this.isinput=false
							
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
			deletediscuss(item,index){
				if(this.uid==item.userid){
					uni.showModal({
					    title: '提醒',
					    content: '是否删去本条评论',
					    success: r => {
							if (r.confirm) {
								uni.request({
									url: this.serverUrl+'/discuss/deletediscuss',
									data:{
										id: item.id,	// 传参来的id
										token: this.token,
									},
									method: 'POST',
									success: (data)=>{
										let status = data.data.status
										// let res = data.data.result
										if(status===200){
											let a=this.commentArr.splice(index, 1)
											// console.log(11);
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
				}
			},
			moveuser(item){
				uni.navigateTo({
					url:'../userhome/userhome?id='+item.userid
				})		
			}
		}
	}
</script>

<style lang="scss">
	.main {
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
			border-bottom: 1rpx solid rgb(201, 201, 201);
			.names {
				// float: left;
				margin-left: 10rpx;
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
				.time {
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
				.talk-right{
					padding-right: 40rpx;
				}
				i{
					font-size: 30rpx;
				}
				
			}
			.sendcomment{
				margin-top: 10rpx;
				display: flex;
				input{
					width: 80%;
					padding-top: 10rpx;
					background-color: rgb(236, 236, 236);
					border-radius: 10rpx;
					border: 2rpx solid rgb(158, 158, 158);
				}
				.top-bar-right {
					padding-right: 30rpx;
					font-size: $uni-font-size-lg;
					color: $uni-text-color;
					line-height: 60rpx;
					width: 120rpx;
					height: 60rpx;
					border-radius: 10rpx;
					text-align: center;
					background-color: rgb(236, 236, 236);
				}
			}
		}
		.comment{
			padding: 20rpx;
			background-color: rgb(250, 250, 250);
			// padding: 30rpx;
			display: flex;
			font-size: 30rpx;
			// border-top: 1rpx dashed rgb(158, 158, 158);
			.name{
				
			}
			.message{
				margin-left: 20rpx;
			}
		}
		.right-btn {
			float: right;
			width: 120rpx;
			height: 48rpx;
			border-radius: 24rpx;
			font-size: $uni-font-size-sm;
			line-height: 48rpx;
			text-align: center;
		}
		.send {
			background: $uni-color-primary;
			color: $uni-text-color;
		}
	}		
</style>
