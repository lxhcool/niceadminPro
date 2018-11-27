/* Layout */
import Layout from '@/views/layout/App'

/** 非layout路由组件 */
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: '登录',
    requiresAuth: false
  },
  component: resolve => { require(['../views/login/Login.vue'], resolve) }
}

export const page404 = {
  path: '*',
  name: 'page_404',
  meta: {
    title: '所请求的页面不存在或已被删除'
  },
  component: resolve => { require(['../views/error/404'], resolve) }
}

/** layout组件子组件 */
export const menuRouter = [
  {
    path: '/',
    redirect: 'dashboard',
    name: 'home',
    meta: {
      title: '主页'
    },
    component: Layout,
    children: [
      {
        path: 'dashboard',
        meta: {
          title: '仪表盘',
          requiresAuth: true
        },
        name: 'dashboard',
        component: resolve => { require(['../views/dashboard/Index'], resolve) }
      }
    ]
  },
  {
    path: '/components',
    meta: {
      title: '组件',
      requiresAuth: true
    },
    name: 'components',
    component: Layout,
    children: [
      {
        path: 'button',
        meta: {
          title: '按钮',
          requiresAuth: true,
          name: 'components_button'
        },
        component: resolve => { require(['../views/components/button/Index'], resolve) }
      },
      {
        path: 'nav',
        meta: {
          title: '菜单导航',
          requiresAuth: true,
          name: 'components_nav'
        },
        component: resolve => { require(['../views/components/nav/Index'], resolve) }
      }
    ]
  },
  {
    path: '/set',
    meta: {
      title: '设置',
      requiresAuth: true
    },
    name: 'set',
    component: Layout,
    children: [
      {
        path: '/system',
        meta: {
          title: '系统设置',
          requiresAuth: true
        },
        name: 'system',
        component: Layout,
        children: [
          {
            path: 'website',
            meta: {
              title: '网站设置',
              requiresAuth: true,
              name: 'set_website'
            },
            component: resolve => { require(['../views/set/system/website/Index'], resolve) }
          }
        ]
      },
      {
        path: '/mySetting',
        meta: {
          title: '我的设置',
          requiresAuth: true
        },
        name: 'mySetting',
        component: Layout,
        children: [
          {
            path: 'userInfo',
            meta: {
              title: '基本资料',
              requiresAuth: true,
              name: 'set_userInfo'
            },
            component: resolve => { require(['../views/set/user/info/Index'], resolve) }
          },
          {
            path: 'password',
            meta: {
              title: '修改密码',
              requiresAuth: true,
              name: 'set_password'
            },
            component: resolve => { require(['../views/set/user/password/Index'], resolve) }
          }
        ]
      }
    ]
  }
]

export const routes = [
  loginRouter,
  ...menuRouter,
  page404
]

// const routes = [
//   {
//     path: '/',
//     meta: {
//       title: '主页'
//     },
//     component: resolve => require(['@/views/layout/App'], resolve),
//     children: [{
//       path: '/',
//       meta: {
//         title: '控制台'
//       },
//       component: resolve => require(['@/views/home/Index'], resolve)
//     },
//     {
//       path: '/components',
//       redirect: 'noredirect',
//       meta: {
//         title: '组件'
//       },
//       component: resolve => require(['@/views/layout/App'], resolve),
//       children: [{
//         path: '/button',
//         meta: {
//           title: '按钮'
//         },
//         component: resolve => require(['@/views/components/button/Index'], resolve)
//       }, {
//         path: '/nav',
//         meta: {
//           title: '菜单导航'
//         },
//         component: resolve => require(['@/views/components/nav/Index'], resolve)
//       }]
//     },
//     {
//       path: '/set',
//       redirect: 'noredirect',
//       meta: {
//         title: '设置'
//       },
//       component: resolve => require(['@/views/layout/App'], resolve),
//       children: [{
//         path: '/system',
//         redirect: 'noredirect',
//         meta: {
//           title: '系统设置'
//         },
//         component: resolve => require(['@/views/layout/App'], resolve),
//         children: [{
//           path: '/website',
//           meta: {
//             title: '网站设置'
//           },
//           component: resolve => require(['@/views/set/system/website/Index'], resolve)
//         }]
//       }, {
//         path: '/user',
//         redirect: 'noredirect',
//         meta: {
//           title: '我的设置'
//         },
//         component: resolve => require(['@/views/layout/App'], resolve),
//         children: [{
//           path: '/info',
//           meta: {
//             title: '基本资料'
//           },
//           component: resolve => require(['@/views/set/user/info/Index'], resolve)
//         },
//         {
//           path: '/password',
//           meta: {
//             title: '修改密码'
//           },
//           component: resolve => require(['@/views/set/user/password/Index'], resolve)
//         }
//         ]
//       }]
//     }
//     ]
//   },
//   {
//     path: '/login',
//     meta: {
//       title: '登录'
//     },
//     component: resolve => require(['@/views/login/Login'], resolve)
//   }
// ]

// const router = new Router({
//   mode: 'history',
//   routes: routes
// })

// 判断是否登录
// router.beforeEach(function (to, from, next) {
//   if (to.path == '/login') {
//     sessionStorage.removeItem('user')
//   }
//   let user = JSON.parse(sessionStorage.getItem('user'));
//   if (!user && to.path != '/login') {
//     next({ path: '/login' })
//   } else {
//     next()
//   }
// })

// export default router