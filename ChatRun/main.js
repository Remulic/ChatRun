import Vue from 'vue'
import App from './App'
import io from './components/socket/weapp.socket.io.js'	// 通信模块
import '@/commons/js/request.js'

Vue.config.productionTip = false
// Vue.prototype.serverUrl = 'https://www.wenmou.xyz/api/'		// 后端API baseUrl
// Vue.prototype.socket = io('https://www.wenmou.xyz/socket.io')	// socket端口
Vue.prototype.serverUrl = 'http://47.113.229.23:4000'		// 后端API baseUrl
Vue.prototype.socket = io('http://47.113.229.23:4001')
// Vue.prototype.serverUrl = 'http://localhost:4000'		// 后端API baseUrl
// Vue.prototype.socket = io('http://localhost:4001')

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
