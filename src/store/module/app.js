/*
 * @Description: 应用基础vuex配置
 * @Author: kcz
 * @Date: 2020-02-24 20:28:47
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-24 20:38:08
 */

export default {
  state: {
    collapsed: false
  },
  mutations: {
    SET_COLLAPSED (state) {
      state.collapsed = !state.collapsed
    }
  },
  actions: {
    toggleCollapsed ({ commit }) {
      // 切换Collapsed
      commit('SET_COLLAPSED')
    }
  }
}
