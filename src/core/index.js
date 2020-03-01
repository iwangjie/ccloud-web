/*
 * @Description: 核心文件
 * @Author: kcz
 * @Date: 2020-02-23 21:09:10
 * @LastEditors: kcz
 * @LastEditTime: 2020-03-01 12:46:45
 */
import Vue from 'vue'
import './component_use'
import config from './config'
import api from '@/api/index'
Vue.prototype.$config = config
Vue.prototype.$api = api
