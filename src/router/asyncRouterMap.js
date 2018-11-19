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
          icon: 'nice-icon-deploymentunit',
          roles: ['admin']
        }
      }
    ]
  },
  // 组件
  {
    path: '/components',
    component: Layout,
    redirect: 'noredirect',
    name: 'components',
    meta: {
      title: '组件',
      icon: 'nice-icon-manage'
    },
    children: [
      {
        path: 'button',
        component: _import('components/button/Index'),
        name: 'button',
        meta: { title: '按钮' }
      },
      {
        path: 'nav',
        component: _import('components/nav/Index'),
        name: 'nav',
        meta: { title: '导航菜单' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]