/*
 * @Description: 判断用户是否登录，决定是否跳转到登录页
 * @Author: kcz
 * @Date: 2020-02-29 16:36:47
 * @LastEditors: kcz
 * @LastEditTime: 2020-03-01 14:54:22
 */
import router from './router'
import { asyncRouterMap, constantRouterMap } from './router/router.config'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style

router.addRoutes(constantRouterMap)

let registerRouteFresh = true
router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  // 读取本地路由
  if (registerRouteFresh) {
    router.addRoutes(asyncRouterMap)
    store.dispatch('GenerateRoutes')
    registerRouteFresh = false
    // 跳转首页
    next(to)
  } else {
    // 如果通过name指向空路由时，指向404页面
    if (to.matched.length === 0) {
      next({ path: '/404' })
    }
    if (sessionStorage.getItem('token') === null && (to.meta.auth || to.meta.auth === undefined)) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
