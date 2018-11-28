import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import ElementUI from 'element-ui'
import VueMouseParallax from 'vue-mouse-parallax'
import axios from 'axios'
import './theme/element-#00B38A/index.css'
import '@/assets/css/reset.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueMouseParallax)

// 配置野狗默认根路径
axios.defaults.baseURL = 'https://wd7833385346sutxth.wilddogio.com/'

// 配置axios全局使用
Vue.prototype.axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
