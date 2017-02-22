import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI) //这句要写在前面
new Vue({
	el : '#app',
	render : h => h(App)
})


