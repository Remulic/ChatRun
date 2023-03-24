<template>
	<view class="main content animate__animated animate__fadeIn animate__faster">
		<!-- 顶部 -->
		<view class="top-bar">
			<navigator :url="'../userhome/userhome?id='+uid" hover-class="none" class="top-bar-left">
				<image :src="imgurl"></image>
			</navigator>
			<!-- 音乐 -->
			<view class="top-bar-right" :class="{'playing':isplay}"  @click="ctrlMusic">
			        <i class="music iconfont icon-yinfu"></i>
			</view>
		</view>
		
		<view class="roking" >
			<navigator :url="'../ranking/ranking'" hover-class="none" class="top-bar-left">
				<i class="iconfont icon-paihang"></i>
			</navigator>
		</view>
		
		<view class="body">
		    <view v-if="!isstart" class="control" @tap="start">
				<view  class="buttons">
					<i class="iconfont icon-sanjiao3"></i>
				</view>
			</view>
			<view v-else class="controlRun">
				<view  class="buttons left animate__animated animate__bounceInLeft" @tap="stop"> 
					<i v-show="isrun" class="iconfont icon-zanting "></i>
					<i v-show="!isrun" class="iconfont icon-sanjiao3 "></i>
				</view>
				<view  class="buttons right animate__animated animate__bounceInRight " @longpress="end">
					<i class="iconfont icon-checkbox-full"></i>
				</view>
			</view>
			<view class="runData">
				<view class="kime">
					<view class="data">{{meters}}</view>
					<view>公里</view>
				</view>
				
				<view class="time">
					<view class="data">{{time}}</view>
					<view>用时</view>
				</view>
			</view>   
		</view>
		
		<view class="content">
		      <map style="width: 100%; height: 800rpx;" 
			  show-location 
			  :layer-style='5'  
			  :show-location='true'  
			  :latitude="latitude" 
			  :longitude="longitude"  
			  :polyline="polyline"
			  :scale="scale"  >
		       </map>
		    </view>
			
		<!--  -->	
		<myFootBar :pageIndex="pageIndex"></myFootBar>
	</view>
	
</template>

<script>
	import myFootBar from '@/components/myFootBar.vue'
	import { isProxy } from "vue";
	import myfun from '../../commons/js/myfun.js'
	
	export default {
		data() {
			return {
				pageIndex: 3,
				polyline : [],	//绘制路线
				meters: 0.00,	//路程
				time: "00:00",  //时间
				originalTime:0, //原始时间
				point:[],		//坐标
				isstart:0,      //是否开始
				isrun:1,		//是否运动中
				isplay:0,		//音乐播放
				isedn:0,		//是否结束
				latitude: '0', 	//纬度
				longitude: '0',	//经度
				scale:18,		//缩放级别
				bottomData:false,
				innerAudioContext:{},
				_locationChangeFn:''
			};
		},
		components:{myFootBar},
		onLoad() {
			this.getStorages()
			this.getuserLocation()
			this.musicCreate()
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
					// console.log(value)s
				}catch(e){
					//TODO handle the exception
				}
			},
			getuserLocation(){
				uni.getLocation({
					geocode:true,
					type: 'gcj02',
					success: (res) => {
						console.log(res,'获取当前位置')
						this.latitude=res.latitude
						this.longitude=res.longitude
					},
					fail: (err) => {
					    // 重新获取位置权限
					    uni.openSetting({
					        success(res) {
					            res.authSetting = {
					                "scope.userLocation": true
					            }
					        },
							fail:()=>{
							          uni.showToast({
							            title: '授权失败',
							            icon:'error',
							            duration:2000
							          })
							        }
					    })  
					}
				});
			},
			// 开始
			start(){
				this.isstart=!this.isstart
				if (this.isstart) {
				    console.log('start')
				    this.location()
					this.timer();
				}
			},
			// 暂停与继续
			stop(){
				this.isrun=!this.isrun
				if (this.isrun) {
				    console.log('start')
					this.timer()
				    this.location()
				}else{
				    console.log('stop')
					// this.location()
				}
				console.log(this._locationChangeFn)
				console.log(this.point)
			},
			//结束
			end(){
				this.isedn=1
			    console.log('end')
				if(this.isrun){
					this.stop()
				}else{
					this.location()
				}
			    this.endLoding()
			},
			// 音乐
			musicCreate(){
				this.innerAudioContext = uni.createInnerAudioContext()
				this.innerAudioContext.src = "https://codehhr.gitee.io/musics/new_life.mp3"
			},
			ctrlMusic(){
				this.isplay=!this.isplay
				console.log(this.isplay);
				    // 播放
				if (this.isplay) {
					this.innerAudioContext.play()
				    console.log("music playing !")
				    // 结束时循环
					this.innerAudioContext.onEnded(() => {
					  console.log("music end !")
					  this.isplay=!this.isplay
					  console.log("music replay !")
					  this.ctrlMusic()
					})
				}
				// 暂停
				else {
					this.innerAudioContext.stop()
				}
				
			},
			//坐标
			location() {
				if(this.isend==1){
					uni.stopLocationUpdate(this._locationChangeFn)
					uni.offLocationUpdate(this._locationChangeFn)
				}
				else{
					uni.startLocationUpdate({
					    success: (res) => {
					        uni.onLocationChange(this._locationChangeFn)
					    },
					    fail: (err) => {
					        // 重新获取位置权限
					        uni.openSetting({
					            success:(res) =>{
					                res.authSetting = {
					                    "scope.userLocation": true
					                }
					            }
					        })
					    }
					})
					this._locationChangeFn = (res)=> {
						if(this.isstart==0||this.isrun==0){
							this.point=[]
						}else{
							let lat = res.latitude;
							let lng = res.longitude;
							this.point.push({latitude: lat, longitude : lng});
							// console.log(this.point);
							this.drawline()
							this.distance()
						}
					}
				}
			},
			//绘制路线
			drawline() {
			    this.polyline=[{
			        points : this.point,
			        color : '#99FF00',
			        width : 4,
			        dottedLine : false
			    }]    
			},
			//计算距离
			distance() {
				  let len = this.point.length;
				  if (len>=2) {
					let newCover = {
					  latitude: this.point[len-1].latitude,
					  longitude:  this.point[len-1].longitude,
					};
					let oldCover = {
					  latitude: this.point[len-2].latitude,
					  longitude:  this.point[len-2].longitude,
					};
					let newMeters = myfun.getDistance(oldCover.latitude,oldCover.longitude,newCover.latitude,newCover.longitude)/1000;
					//计算距离
					//初始化数据
					// console.log(newMeters)
					this.meters+=myfun.getnum(newMeters)
					console.log(this.meters);
				}		
			},
			//计时器
			timer() {
			    if (this.isrun==0) {
			        return
			    }
				setTimeout(() => {
			        this.originalTime += 100;
					this.time = myfun.date_format(this.originalTime);
					this.timer()
					// console.log(this.originalTime);
			    }, 100);

			},
			//结束弹窗
			endLoding(){
			    uni.showModal({
			      title: '提醒',
			      content: '是否保存数据',
			      success: r => {
			        if (r.confirm) {
			            uni.showLoading({
			              title: '保存中',
			            })
			            this.getdata();
			            uni.hideLoading();
			          }
			        }
			    })
			},
			//获取总数据
			getdata(){
			    uni.request({
			    	url: this.serverUrl+'/run/findrundate',
			    	data:{
			    		id: this.uid,	// 传参来的id
			    		token: this.token
			    	},
			    	method: 'POST',
					success: (data)=>{
						let status = data.data.status
						let res = data.data.result
						console.log(res)
						if(status===200){
							let newmeters=this.meters+res.distance
							let newtime=myfun.getnum(this.originalTime/60000)+res.runTime
							console.log(newmeters,newtime);
							console.log(typeof newtime);
							
							this.update(newmeters,newtime)
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
			//更新数据
			update(newmeters,newtime){
				uni.request({
					url: this.serverUrl+'/run/updaterundate',
					data:{
						id:this.uid,
						distance: newmeters,
						runTime: newtime,
						token: this.token
					},
					method: 'POST',
					success: (data)=>{
						let status = data.data.status
						if(status===200){
							uni.showToast({
							    title: '修改成功',
									icon:'none',
							    duration: 1500
							});
						}else if(status===500){
							uni.showToast({
							    title: '服务器出错了...',
									icon:'none',
							    duration: 1500
							});
						}
					}
				})
			}
		},
	}
</script>

<style lang="scss">
	@import '../../commons/css/mycss.scss';
	.top-bar {
		background: $uni-color-primary;
		.top-bar-right {
			margin-top: 4rpx;
			
			/* 音符 */
			.music { 
			  // padding-left: 20rpx;
			  font-size: 40rpx;
			}
		}
		.playing {
		  animation: rotate 2s linear infinite;
		}
		/* 音符旋转动画 */
		@keyframes rotate {
		  from {
		      transform: rotate(360deg);
		  }
		  to {
		      transform: rotate(0deg);
		  }
		}
	}
	.roking{
		position: fixed;
		top:128rpx;
		right: 40rpx;
		i{
			font-size: 50rpx;
		}
	}
	.main {
		padding: 128rpx $uni-spacing-col-base;
		.body {
			padding-top: $uni-spacing-col-base;
			width: 100%;
			height: 60%;
			padding: 60rpx 0;
			font-size: 40px;
			i{
				font-size: 50rpx;
			}
			.control{
				display: flex;
				width: 100%;
				align-items: center;
				justify-content: center;
				.buttons {
				  width: 200px;
				  height: 200px;
				  border-radius: 50%;
				  background-color: rgb(252, 6, 6);
				  text-align: center;
				  line-height: 200rpx;
				  color: seashell;
				}
			}
			.controlRun{
				display: flex;
				width: 100%;
				align-items: center;
				justify-content: center;
				.buttons {
					width: 200px;
					height: 200px;
					border-radius: 50%;
					text-align: center;
					line-height: 200rpx;
					color: seashell;
					margin: 0 20rpx;
				}
				.left{
					background-color: rgb(12, 191, 84);
				}
				.right{
					background-color: rgb(252, 6, 6);
				}
			}
			.runData{
				margin-top: 40rpx;
				width: 100%;
				font-size: 20rpx;
				.kime{
					display: flex;
					justify-items: center;
					align-items: center;
					flex-direction: column;
					.data{
						font-size: 100rpx;
					}
				}
				.time{
					display: flex;
					justify-items: center;
					align-items: center;
					flex-direction: column;
					.data{
						font-size: 60rpx;
					}
				}
			}
			
		}
		
	}

</style>
