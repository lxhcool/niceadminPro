import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import ElementUI from 'element-ui'
import FullCalendar from 'vue-full-calendar'
import echarts from 'echarts/lib/echarts'
import VueMouseParallax from 'vue-mouse-parallax'
import http from '@/common/http'
import api from '@/common/apis'
import '@/theme/element-variables.scss'
import '@/assets/css/reset.css'

require('echarts/lib/chart/pie')
require('echarts/lib/chart/line')
require('echarts/lib/chart/lines')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueMouseParallax)
Vue.use(FullCalendar)
Vue.use(http)
Vue.use(api)
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
