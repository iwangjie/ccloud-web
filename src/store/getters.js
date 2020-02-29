/*
 * @Description: getters配置
 * @Author: kcz
 * @Date: 2020-02-24 20:30:47
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-29 19:33:54
 */

export default {
  collapsed: state => state.app.collapsed,
  routers: state => state.permission.routers,
  token: state => state.app.token,
  tabs: state => state.app.tabs,
}
