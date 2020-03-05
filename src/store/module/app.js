/*
 * @Description: 应用基础vuex配置
 * @Author: kcz
 * @Date: 2020-02-24 20:28:47
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-29 21:19:59
 */

import router from '@/router'
import { asyncRouterMap } from '@/router/router.config'
import store from '@/store'

export default {
  state: {
    collapsed: false,
    token: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : '',
    tabs: []
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    },
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
    },
    REMOVE_TAB (state, name) {
      // 移除tab页
      state.tabs = state.tabs.filter(item => item.name !== name)
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
    removeTab ({ commit }, name) {
      // 移除tab页
      commit('REMOVE_TAB', name)
    },
    // 修改token，并将token存入localStorage
    changeLogin ({ commit }, token) {
      commit('SET_TOKEN', token)
      sessionStorage.setItem('token', token)

      // 登录用户路由配置
      router.addRoutes(asyncRouterMap)
      store.dispatch('GenerateRoutes')
    },
    clearLogin ({ commit }) {
      commit('SET_TOKEN', '')
      sessionStorage.token = ''
    }

  }
}
