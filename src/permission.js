/*
 * @Description: 判断用户是否登录，决定是否跳转到登录页
 * @Author: kcz
 * @Date: 2020-02-29 16:36:47
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-29 19:32:37
 */
import router from './router'
import { asyncRouterMap } from './router/router.config'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style

// 异步路由暂时写在这里吧,等有了登录，在登录在加载
router.addRoutes(asyncRouterMap)
store.dispatch('GenerateRoutes')

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  next()
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
