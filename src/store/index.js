import Vue from 'vue'
import Vuex from 'vuex'
import app from './module/app'
import permission from './module/permission'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    app,
    permission
  }
})
