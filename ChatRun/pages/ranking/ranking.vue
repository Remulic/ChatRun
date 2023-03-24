<template>
	<view class="main">
		<view class="top-bar">
				<view @click="backOnePage"  class="top-bar-left">
					<i class="iconfont icon-xiazai6"></i>
				</view>
				<view class="top-bar-right">
					<view class="distance" @tap="init('distance')">
						<text>距离</text> 
					</view>
					<view class="runTime" @tap="init('runTime')">
						<text>时间</text>
					</view>
				</view>
		</view>
		
		<view class="search-user result">
			<view class="title">{{rok}}排行榜-    -您的排名{{paiming}}</view>
			
			<view class="list user animate__animated animate__fadeIn animate__faster "
						v-for="(item, index) in userArr"
						:keys="item.id">
				<view class="animate__animated animate__bounceInLeft">	
					<view class="num">
						{{index+1}}.
					</view>
					<navigator :url="'../userhome/userhome?id='+item.userID">
						<image :src="item.imgurl" mode=""></image>
					</navigator>
					
					<view class="names">{{item.name}}</view>
					<view class="rundata">
						<view v-if="isRun" class="distance">{{item.distance}}千米</view>
						<view v-else  class="runtime">{{item.runTime}}分钟</view>
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userArr: [],
				uid: '',
				token: '',
				pagesize: 20,
				class: 'distance',
				rok:'运动距离',
				isRun:true
			};
		},
		onLoad() {
			this.getStorages()
			this.getRanking()
		},
		computed: {
		    paiming:function() {
		        return this.userArr.findIndex(item=>item.userID=this.uid)+1
		    }
		},
		methods: {
			getStorages() {
				try{
					const value = uni.getStorageSync('user')
					if(value) {
						this.uid = value.id
						this.token = value.token
					}else {
						uni.navigateTo({
							url: '../signin/signin',
						})
					}
				}catch(e){
					//TODO handle the exception
				}
			},
			getRanking(){
				uni.request({
					url: this.serverUrl+'/run/allrundate',
					data:{
						pagesize: this.pagesize,
						class: this.class,
						token: this.token
					},
					method: 'POST',
					success: (data)=>{
						this.userArr=[]
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
						id: item.userID,	// 传参来的id
						token: this.token
					},
					method: 'POST',
					success: (data)=>{
						let status = data.data.status
						let res = data.data.result
						if(status===200){
							item.imgurl = this.serverUrl+ res.imgurl
							item.name=res.name
							this.userArr.push(item)
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
			init(item){
				this.class=item
				this.rok=item=='distance'?'运动距离':'运动时间'
				this.isRun=item=='distance'?true:false
				this.getRanking()
				
			},
			backOnePage() {
				uni.navigateBack({
					delta:1
				})
			},
		}
	}
</script>

<style lang="scss">
	@import '../../commons/css/mycss.scss';
	.top-bar {
		background: $uni-color-primary;
		height: 88rpx;
		line-height: 88rpx;
		.top-bar-left {
			z-index: 10000;
			width: 88rpx;
			height: 100%;
			float: left;
			i {
				display: inline-block;
			}
		
		}
		.top-bar-right {
			padding-right: 8rpx;
			box-shadow: none;
			display: flex;
			.runTime{
				float: right;
				width: 80rpx;
				box-shadow: 8rpx 10rpx 25rpx -5rpx rgba(117, 112, 117, 0.3);
				border-radius: 40rpx;
				// height: 48rpx;
			}
			.distance{
				float: right;
				width: 80rpx;
				margin-right: 20rpx;
				box-shadow: 8rpx 10rpx 25rpx -5rpx rgba(117, 112, 117, 0.3);
				border-radius: 40rpx;
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
				font-size: 36rpx;
				
				.name {
					// line-height: 50rpx;
				}
			}
			.num{
				font-size: 60rpx;
				float: left;
				color: rgb(148, 148, 37);
			}
			.rundata{
				float: right;
				font-size: 50rpx;
				color: rgb(148, 148, 37);
			}
			.right-btn {
				
				
			}
			.send {
				background: $uni-color-primary;
				color: $uni-text-color;
			}
		}
	}
</style>
