/*
 * @Description: 应用基础vuex配置
 * @Author: kcz
 * @Date: 2020-02-24 20:28:47
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-29 21:04:29
 */

export default {
  state: {
    collapsed: false,
    tabs: [],
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },
  mutations: {
    SET_COLLAPSED (state) {
      // 切换菜单收缩状态
      state.collapsed = !state.collapsed
    },
    ADD_TAB (state, tab) {
      // 添加tab页
      // 判断需要添加的路由是否已经存在tabs里

      for (const i in state.tabs) {
        if (state.tabs[i].name === tab.name) {
          // 如果已经存在直接return
          return false
        }
      }
      state.tabs.push(tab)
      console.log(state.tabs)
    },
    REMOVE_TAB (state, tab) {
      // 移除tab页
    }
  },
  actions: {
    toggleCollapsed ({ commit }) {
      // 切换Collapsed，是否收缩菜单
      commit('SET_COLLAPSED')
    },
    addTab ({ commit }, tab) {
      // 添加tab页
      commit('ADD_TAB', tab)
    },
    removeTab ({ commit }, tab) {
      // 移除tab页
      commit('REMOVE_TAB', tab)
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
