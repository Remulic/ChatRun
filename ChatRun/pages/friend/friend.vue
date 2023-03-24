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
				<view class="add" @tap="toSearch">
					<i class="iconfont icon-jia"></i>
				</view>
			</view>
		</view>
		
		<view class="search-user result">
			<view class="title">好友数{{userArr.length}}</view>
			<view class="list user animate__animated animate__fadeIn animate__faster "
						v-for="(item, index) in userArr"
						:keys="item.id">
				<view class="animate__animated animate__bounceInLeft">
					<navigator :url="'../userhome/userhome?id='+item._id">
						<image :src="item.imgurl" mode=""></image>
					</navigator>
					
					<view class="names">
						<view v-html="item.name" class="name"></view>
						<view v-html="item.email" class="email"></view>
					</view>
					<view @tap="modify(item)" class="right-btn send">
						发消息
					</view>
				</view>
			</view>
	
		</view>
		<myFootBar :pageIndex="pageIndex"></myFootBar>
	</view>
	
</template>

<script>
	import myFootBar from '@/components/myFootBar.vue'
	export default {
		data() {
			return {
				pageIndex: 1,
				userArr: [],
				uid: '',
				token: '',
				markname: '小明',
				myname: '',
				name: '',
			};
		},
		components:{myFootBar},
		onLoad() {
			this.getStorages()
			// console.log(this.uid)
			this.findMyFriend()
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
			findMyFriend(){
				uni.request({
					url: this.serverUrl+'/friend/findfriend',
					data:{
						uid: this.uid,	// 传参来的id
						token: this.token
					},
					method: 'POST',
					success: (data)=>{
						// console.log(this.uid)
						let status = data.data.status
						// console.log(status)
						let arr = data.data.result
						if(status===200){
							arr.map((item, index)=>{
								this.getUser(item)
							})		
						}else if(status===300){	// token过期
							uni.navigateTo({
								url:'/pages/signin/signin?name='+this.myname
							})
						}else if(status===500){
							uni.showToast({
							    title: '服务器出错了...',
									icon:'none',
							    duration: 1500
							});
						}
					}
				})
			},
			getUser(item){
				uni.request({
					url: this.serverUrl+'/user/detial',
					data:{
						id: item.friendID,	// 传参来的id
						token: this.token
					},
					method: 'POST',
					success: (data)=>{
						let status = data.data.status
						let res = data.data.result
						if(status===200){
							res.imgurl = this.serverUrl+ res.imgurl
							// 处理markname
							if(item.markname){
								res.name=item.markname
							}
							this.userArr.push(res)
							// console.log(this.user)
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
			modify(user){
				uni.navigateTo({
					url:'../chatroom/chatroom?id='+user._id+'&name='+user.name+'&img='+user.imgurl+'&type=0'
				})	
			},
			toSearch() {
				uni.navigateTo({
					url:'../search/search'
				})
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
		padding: 88rpx $uni-spacing-col-base;
		
		.result {
			padding-top: $uni-spacing-col-base;
			// padding-top: 70rpx;
			.title {
				font-size: 44rpx;
				font-weight: 600;
				color: $uni-text-color;
				line-height: 60rpx;
			}
			.list {
				width: 100%;
				height: 90rpx;
				padding: 20rpx 0;
				
				image {
					float: left;
					width: 80rpx;
					height: 80rpx;
					border-radius: $uni-border-radius-base;
				}
			}
			.names {
				float: left;
				padding-left: $uni-spacing-col-base;
				
				.name {
					font-size: 36rpx;
					color: $uni-text-color;
					line-height: 50rpx;
				}
			}
			.email {
				font-size: $uni-font-size-sm;
				color: $uni-text-color;
				line-height: 28rpx;
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
	}
</style>
