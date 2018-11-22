import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [{
        path: '/',
        meta: {
            title: '主页'
        },
        component: resolve => require(['@/views/layout/App'], resolve),
        children: [{
                path: '/',
                meta: {
                    title: '控制台'
                },
                component: resolve => require(['@/views/home/Index'], resolve)
            },
            {
                path: '/components',
                redirect: 'noredirect',
                meta: {
                    title: '组件'
                },
                component: resolve => require(['@/views/layout/App'], resolve),
                children: [{
                    path: '/button',
                    meta: {
                        title: '按钮'
                    },
                    component: resolve => require(['@/views/components/button/Index'], resolve)
                }, {
                    path: '/nav',
                    meta: {
                        title: '菜单导航'
                    },
                    component: resolve => require(['@/views/components/nav/Index'], resolve)
                }]
            },
            {
                path: '/set',
                redirect: 'noredirect',
                meta: {
                    title: '设置'
                },
                component: resolve => require(['@/views/layout/App'], resolve),
                children: [{
                    path: '/system',
                    redirect: 'noredirect',
                    meta: {
                        title: '系统设置'
                    },
                    component: resolve => require(['@/views/layout/App'], resolve),
                    children: [{
                        path: '/website',
                        meta: {
                            title: '网站设置'
                        },
                        component: resolve => require(['@/views/set/system/website/Index'], resolve)
                    }]
                }, {
                    path: '/user',
                    redirect: 'noredirect',
                    meta: {
                        title: '我的设置'
                    },
                    component: resolve => require(['@/views/layout/App'], resolve),
                    children: [{
                            path: '/info',
                            meta: {
                                title: '基本资料'
                            },
                            component: resolve => require(['@/views/set/user/info/Index'], resolve)
                        },
                        {
                            path: '/password',
                            meta: {
                                title: '修改密码'
                            },
                            component: resolve => require(['@/views/set/user/password/Index'], resolve)
                        }
                    ]
                }]
            }
        ]
    },
    {
        path: '/login',
        meta: {
            title: '登录'
        },
        component: resolve => require(['@/views/login/Login'], resolve)
    }
]

const router = new Router({
    mode: 'history',
    routes: routes
})

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

export default router