import requset from '../utils/request'
import url from './url'

// 导入所有js文件
const requireAll = requireContext => requireContext.keys().filter(value => {
  // 过滤index文件
  return !/index.js$/.test(value)
}).map(requireContext)

const req = require.context('./modules/', false, /\.js$/)
let api = requireAll(req)
// 重新映射到default下
api = api.map(item => item.default)
// 将数组合并
const allApiJson = Object.assign(...api)
// 将地址转成可执行函数
let allApi = {}
for (const k in allApiJson) {
  // 转成post方法函数
  if (allApiJson[k].method === 'post') {
    allApi[k] = (data) => {
      return requset({
        url: allApiJson[k].url,
        method: allApiJson[k].method,
        // 将json 转成 key=value&key=value 以fromdata传输
        // transformRequest:[function(data){
        //     let ret = ''
        //     for(let it in data){
        //         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        //     }
        //     return ret.substr(0,ret.length-1)
        // }],
        data
      })
    }
  } else {
    // 转成get方法函数
    allApi[k] = (params) => {
      return requset({
        url: allApiJson[k].url,
        method: allApiJson[k].method,
        params
      })
    }
  }
}
// 将url也存放到allApi里
allApi = Object.assign(allApi, url)
export default allApi
