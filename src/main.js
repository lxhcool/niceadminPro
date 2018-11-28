import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import ElementUI from 'element-ui'
import VueMouseParallax from 'vue-mouse-parallax'
import http from '@/common/http'
import api from '@/common/apis'
import '@/theme/index.scss'
import '@/assets/css/reset.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueMouseParallax)
Vue.use(http)
Vue.use(api)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
