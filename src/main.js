import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
<<<<<<< HEAD
  router,
  render: h => h(App),
}).$mount('#app')
=======
    router,
    store,
    render: h => h(App),
}).$mount('#app')
>>>>>>> 60f4d18d7158732aa427d352d8e10c475ee575d0
