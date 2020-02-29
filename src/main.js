import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './core/'
import axios from 'vue-axios'
import qs from 'qs'

import './styles/index.less'
Vue.config.productionTip = false

Vue.prototype.$axios = axios // 全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs // 全局注册，使用方法为:this.qs

this.$axios.defaults.baseURL = process.env.API_ROOT

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
