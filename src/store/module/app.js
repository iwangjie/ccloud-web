/*
 * @Description: 应用基础vuex配置
 * @Author: kcz
 * @Date: 2020-02-24 20:28:47
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-29 15:25:17
 */

export default {
  state: {
    collapsed: false,
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },
  mutations: {
    SET_COLLAPSED (state) {
      state.collapsed = !state.collapsed
    }
  },
  actions: {
    toggleCollapsed ({ commit }) {
      // 切换Collapsed，是否收缩菜单
      commit('SET_COLLAPSED')
    },
    // 修改token，并将token存入localStorage
    changeLogin (state, token) { // 这里的state对应上面状态state
      state.Authorization = token
      localStorage.setItem('Authorization', token)
    },
    clearLogin (state) { // 这里的state对应上面状态state
      localStorage.token = ''
      state.Authorization = ''
    }

  }
}
