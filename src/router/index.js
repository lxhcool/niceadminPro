import Vue from 'vue'
import VueRouter from 'vue-router'
import _import from '@/utils/import'
const Layout = _import('layout/App')

Vue.use(VueRouter)

export const routerMap = [
  {
    path: '/404',
    component: _import('error/404'),
    hidden: true
  },
  {
    path: '/login',
    component: _import('login/Login'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: _import('home/Index'),
        meta: {
          title: '首页',
          icon: 'iconfont iconfont-menu nice-icon-dashboard',
          noCache: true
        }
      }
    ]
  }
]

export const router = new VueRouter({
  mode: 'history',
  routes: routerMap,
  scrollBehavior: () => ({ y: 0 })
})
