import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './core/'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
import './permission'

import './styles/index.less'
Vue.use(VueAxios, axios)
axios.defaults.baseURL = process.env.VUE_APP_API_ROOT
Vue.config.productionTip = false

Vue.prototype.$axios = axios // 全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs // 全局注册，使用方法为:this.qs

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
