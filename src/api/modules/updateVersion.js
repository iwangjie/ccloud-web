/**
 *  更新相关 API
 */

export default {

  /**
   * 根据条件分页获取公告列表
   * @returns {AxiosPromise}
   */
  getUpdateVersionList: {
    url: '/update/page',
    method: 'post'
  },

  saveUpdateVersion: {
    url: '/update/save',
    method: 'post'
  }

}
