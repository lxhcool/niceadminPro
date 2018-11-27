import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'
import store from '../store'
import { getToken } from '../utils/auth'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

if (window.localStorage.getItem('isLogin')) {
  store.commit('setIsLogin', window.localStorage.getItem('isLogin'))
}

router.beforeEach((to, from, next) => {
  let isLogin = store.getters.isLogin
  if (isLogin === 'false') {
    isLogin = false
  } else if (isLogin === 'false') {
    isLogin = true
  }
  if (to.matched.some(r => r.meta.requiresAuth)) {
    if (!isLogin) {
      if (from.name === 'login') {
        next('/')
        return
      }
      router.push({
        name: 'login',
        params: { redirect: to.fullPath }
      })
    }
  }
  if (to.name === 'login') {
    if (isLogin) {
      next('/')
      return
    }
  }
  next()
})

export default router
