import Vue from 'vue'
import App from './App'

// 模拟数据
import Json from './static/Json'
// 模拟请求数据
const json = (type) => {
	return new Promise(resolve =>{
		setTimeout(()=>{
			resolve(Json[type])
		},500)
	})
}
// 弹窗提示封装
const msg = (title, duration = 1500, mask = false, icon = 'none') => {
	// title-标题为必填项
	if (Boolean(title) == false) {
		return
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	})
}
// 
// 挂载全局vue
Vue.prototype.$util = {
	msg,
	json
}
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
