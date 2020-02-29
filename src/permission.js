/*
 * @Description: 判断用户是否登录，决定是否跳转到登录页
 * @Author: kcz
 * @Date: 2020-02-29 16:36:47
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-29 16:40:16
 */
import router from './router'
// import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  next()
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
