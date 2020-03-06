/**
 *  公告相关 API
 */

export default {

  /**
   * 根据条件分页获取公告列表
   * @returns {AxiosPromise}
   */
  getAnnouncementList: {
    url: '/notice/page',
    method: 'post'
  }

}
