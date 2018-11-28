import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'
import store from '../store'
import { getToken } from '../utils/auth'
Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

if (window.localStorage.getItem('isLogin')) {
  store.commit('setIsLogin', window.localStorage.getItem('isLogin'))
}
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  let isLogin = window.localStorage.getItem('isLogin')
  if (isLogin === 'false') {
    isLogin = false
  } else if (isLogin === 'false') {
    isLogin = true
  }
  if (isLogin) {
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})

export default router
