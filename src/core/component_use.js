/*
 * @Description:
 * @Author: kcz
 * @Date: 2020-02-23 21:06:45
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-23 21:21:19
 */

/* eslint-disable */
/**
 * 该文件是为了按需加载，剔除掉了一些不需要的框架组件。
 * 减少了编译支持库包大小
 *
 * 当需要更多组件依赖时，在该文件加入即可
 */
import Vue from 'vue'
import {
  LocaleProvider,
  Layout,
  Input,
  Button,
  Form,
  Menu,
  Icon,
  Row,
  Col,
  Modal,
  message,
  notification
} from 'ant-design-vue'
// import VueCropper from 'vue-cropper'


Vue.use(LocaleProvider)
Vue.use(Layout)
Vue.use(Input)
Vue.use(Button)
Vue.use(Form)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Modal)

// Vue.use(VueCropper)
Vue.use(notification)


Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning