import _import from '@/utils/import'
const Layout = _import('layout/App')

export const asyncRouterMap = [
  // 权限页面 只有 admin 用户才可访问
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/Index',
    meta: {
      roles: ['admin']
    },
    children: [
      {
        path: 'index',
        component: _import('permission/Index'),
        name: 'permission',
        meta: {
          title: '权限控制',
          icon: 'iconfont iconfont-menu nice-icon-deploymentunit',
          roles: ['admin']
        }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]