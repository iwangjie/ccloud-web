import axios from 'axios'
import { message } from 'ant-design-vue'

// axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // 跨域请求发送Cookie
  timeout: 5000 // 请求超时时间
})

// 请求拦截
service.interceptors.request.use(
  config => {
    // 请求发出去之前的处理
    // 设置请求头
    config.headers[''] = ''
    return config
  },
  error => {
    // 请求失败的处理
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    // 响应JSON结构
    /* {
      code: Number,
      msg: String,
      data: Object
    } */
    const res = response.data

    // 自定义状态码不是200返回错误消息
    if (res.code !== 200) {
      message.error(res.msg).then()
      // 特殊状态码判断 比如：登录超时、无权限、重设token等
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('Error: ' + error)
    message.error(error.message()).then()
    return Promise.reject(error)
  }
)

export default service
