/*
 * @Description: 路由配置文件
 * @Author: kcz
 * @Date: 2020-02-29 16:14:53
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-29 16:20:29
 */

import Layout from '../views/layout/index.vue'

// 异步加载路由配置
export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '首页',
          icon: 'jkjk'
        },
        component: () => import('@/views/home/index')
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        meta: {
          title: '仪表盘',
          icon: 'jkjk'
        },
        component: () => import('@/views/dashboard/index')
      }
    ]
  }
]

// 默认加载路由配置
export const constantRouterMap = [
  {
    path: '/404',
    component: () => import('@/views/exception/404')
  }
]
