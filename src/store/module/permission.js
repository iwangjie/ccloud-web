/*
 * @Description: 生成左侧菜单
 * @Author: kcz
 * @Date: 2020-02-29 15:46:35
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-29 19:42:00
 */

import { asyncRouterMap } from '@/router/router.config'
export default {
  state: {
    routers: []
  },
  mutations: {
    SET_ROUTERS (state, routers) {
      state.routers = routers
    }
  },
  actions: {
    GenerateRoutes ({ commit }) {
      return new Promise(resolve => {
        commit('SET_ROUTERS', asyncRouterMap[0].children)
        resolve(asyncRouterMap[0].children)
      })
    }
  }
}
