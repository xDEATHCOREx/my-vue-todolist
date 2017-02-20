import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
new Vue({
	el : '#app',
	render : h => h(App)
})
Vue.use(ElementUI)
var cats = ['dave', 'henry', 'martha'];
console.log(cats);
