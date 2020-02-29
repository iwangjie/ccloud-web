/*
 * @Description: 生成左侧菜单
 * @Author: kcz
 * @Date: 2020-02-29 15:46:35
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-29 16:11:39
 */

export default {
  state: {
    routers: []
  },
  mutations: {
    SET_ROUTERS (state, routers) {

    }
  },
  actions: {
    GenerateRoutes ({ commit }) {
      return new Promise(resolve => {
        commit('SET_ROUTERS', JSON.stringify(asyncRouterMap))
        resolve(asyncRouterMap)
      })
    }
  }
}
