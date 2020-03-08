/**
 *  注册码相关 API
 */

export default {

  /**
   * 根据条件分页获取公告列表
   * @returns {AxiosPromise}
   */
  generateRegistrationCode: {
    url: '/activationCode/generate',
    method: 'post'
  },

  /**
   * 根据条件分页获取公告列表
   * @returns {AxiosPromise}
   */
  getRegistrationCodeList: {
    url: '/activationCode/page',
    method: 'post'
  }

}
