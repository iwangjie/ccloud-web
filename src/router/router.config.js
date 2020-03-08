/*
 * @Description: 路由配置文件
 * @Author: kcz
 * @Date: 2020-02-29 16:14:53
 * @LastEditors: kcz
 * @LastEditTime: 2020-03-01 14:40:21
 */

import Layout from '../views/layout/index.vue'
import RouterView from '../views/layout/RouterView.vue'

// 异步加载路由配置
export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        meta: {
          title: '首页',
          icon: 'pie-chart',
          hideBreadcrumb: true // 隐藏当前页面的面包屑
        },
        component: () => import('@/views/dashboard/index')
      },
      {
        path: '/announcement',
        name: 'Announcement',
        meta: {
          title: '公告管理',
          icon: 'file-text'
        },
        component: RouterView,
        children: [
          {
            path: '/announcementList',
            name: 'announcementList',
            meta: {
              title: '公告列表',
              icon: 'file-text'
            },
            component: () => import('@/views/announcement/announcementList')
          },
          {
            path: '/announcementAdd',
            name: 'announcementAdd',
            meta: {
              title: '发布公告',
              icon: 'file-text'
            },
            component: () => import('@/views/announcement/announcementAdd')
          }
        ]
      },
      {
        path: '/registrationCode',
        name: 'RegistrationCode',
        meta: {
          title: '注册码管理',
          icon: 'file-text'
        },
        component: RouterView,
        children: [
          {
            path: '/registrationCodeAdd',
            name: 'registrationCodeAdd',
            meta: {
              title: '生成注册码',
              icon: 'file-text'
            },
            component: () => import('@/views/registrationCode/registrationCodeAdd')
          }, {
            path: '/registrationCodeList',
            name: 'registrationCodeList',
            meta: {
              title: '注册码列表',
              icon: 'file-text'
            },
            component: () => import('@/views/registrationCode/registrationCodeList')
          }
        ]
      },
      {
        path: '/updateVersion',
        name: 'UpdateVersion',
        meta: {
          title: '更新管理',
          icon: 'file-text'
        },
        component: RouterView,
        children: [
          {
            path: '/addVersion',
            name: 'addVersion',
            meta: {
              title: '发布版本',
              icon: 'file-text'
            },
            component: () => import('@/views/updateVersion/addVersion')
          }, {
            path: '/versionList',
            name: 'versionList',
            meta: {
              title: '版本列表',
              icon: 'file-text'
            },
            component: () => import('@/views/updateVersion/versionList')
          }
        ]
      },
      {
        path: '/customDevelopment',
        name: 'CustomDevelopment',
        meta: {
          title: '动态扩展',
          icon: 'file-text'
        },
        component: RouterView,
        children: [
          {
            path: '/addCustomDevelopment',
            name: 'test2',
            meta: {
              title: '发布插件',
              icon: 'file-text'
            },
            component: () => import('@/views/home/index')
          }, {
            path: '/customDevelopmentList',
            name: 'test2',
            meta: {
              title: '插件管理',
              icon: 'file-text'
            },
            component: () => import('@/views/home/index')
          }
        ]
      },
      {
        path: '/logAdmin',
        name: 'LogAdmin',
        meta: {
          title: '日志管理',
          icon: 'file-text'
        },
        component: RouterView,
        children: [
          {
            path: '/accessLog',
            name: 'accessLog',
            meta: {
              title: '接口访问日志',
              icon: 'file-text'
            },
            component: () => import('@/views/home/index')
          }, {
            path: '/activationLog',
            name: 'activationLog',
            meta: {
              title: '注册码激活日志',
              icon: 'file-text'
            },
            component: () => import('@/views/home/index')
          }
        ]
      },
      {
        path: '/feedback',
        name: 'Feedback',
        meta: {
          title: '留言反馈管理',
          icon: 'file-text'
        },
        component: RouterView,
        children: [
          {
            path: '/feedbackList',
            name: 'feedbackList',
            meta: {
              title: '留言反馈列表',
              icon: 'file-text'
            },
            component: () => import('@/views/home/index')
          }
        ]
      },
      {
        path: '/analysis',
        name: 'Analysis',
        meta: {
          title: '数据分析管理',
          icon: 'file-text'
        },
        component: RouterView,
        children: [
          {
            path: '/userAnalysis',
            name: 'userAnalysis',
            meta: {
              title: '用户分析',
              icon: 'file-text'
            },
            component: () => import('@/views/home/index')
          }
        ]
      },
      {
        path: '/system',
        name: 'system',
        meta: {
          title: '系统设置',
          icon: 'file-text'
        },
        component: RouterView,
        children: [
          {
            path: '/UserConfig',
            name: 'userConfig',
            meta: {
              title: '个性化设置',
              icon: 'file-text'
            },
            component: () => import('@/views/home/index')
          }
        ]
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
]

// 默认加载路由配置
export const constantRouterMap = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      auth: false
    },
    component: () => import('@/views/user/login')
  },
  {
    path: '/404',
    component: () => import('@/views/exception/404')
  }
  // {
  //   path: '/',
  //   redirect: '/login'
  // }
]
