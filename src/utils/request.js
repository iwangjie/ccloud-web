import axios from 'axios'
import { Modal } from 'ant-design-vue'
import store from '../store'
import baseUrl from './baseUrl'
// import {getToken} from './auth'
// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api 的 base_url
  baseURL: baseUrl,
  // timeout: 5000, // 请求超时时间
  timeout: 9999999, // 请求超时时间
  withCredentials: false, // 额这项不能为true，不然不能携带跨域头
  crossDomain: true
})
// request拦截器
service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    // config.headers['token'] = store.getters.token // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    config.headers['Content-Type'] = 'application/json'
    if (sessionStorage.getItem('token')) {
      config.headers['CC-Authorization'] = sessionStorage.getItem('token')
    }
    console.log(store.getters.token)
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
let aTime = null
// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非0是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.code !== 0) {
      console.log(res)
      // res.message !== '未登录' && message.error(res.message, 5)

      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 401 || res.code === 50012 || res.code === 'E10010') {
        // 防止多次弹出登录信息失效框
        if (aTime !== null && (new Date().getTime() - aTime) < 2000) {
          return false
        }
        aTime = new Date().getTime()
        Modal.confirm({
          title: '登陆信息失效',
          content: '你已被登出，可以取消继续留在该页面，或者重新登录?',
          okText: '重新登录',
          cancelText: '取消',
          onOk () {
            store.dispatch('clearLogin').then(() => {
              location.reload() // 为了重新实例化vue-router对象 避免bug
            })
          },
          onCancel () {
            console.log('Cancel')
          }
        })
      } else {
        Modal.error({
          title: '系统错误',
          content: '系统出错了。。。。'
        })
      }
      // const error = 'error'
      return Promise.reject(response)
    } else {
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
