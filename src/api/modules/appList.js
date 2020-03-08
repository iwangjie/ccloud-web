/**
 * APP相关接口
 */

/**
 * 根据相关参数获取当前用户下的所有APPid
 * @param data
 */
export default {
  getAppIds: {
    url: '/app/currUserAppList',
    method: 'post'
  }
}
