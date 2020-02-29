<!--
 * @Description: 布局页面
 * @Author: kcz
 * @Date: 2020-02-23 21:12:19
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-29 09:31:52
 -->
<template>
  <div class="layout-main">
    <cMenu class="c-layout-left" />
    <div class="layout-right">
      <header class="layout-header">
        <!-- 头部左侧切换菜单按钮 start -->
        <div class="toggle-collapsed-btn" @click="toggleCollapsed">
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </div>
        <!-- 头部左侧切换菜单按钮 end -->
        <!-- 头部右侧装饰 start -->
        <div class="decorate">
          <a-dropdown :trigger="['click']">
            <a class="avatar" href="#">
              <div>
              <img src="http://cdn.kcz66.com/%E5%A4%B4%E5%83%8F.jpg" alt />
              <!-- <a-icon type="down" /> -->
              </div>
            </a>
            <a-menu slot="overlay">
              <a-menu-item key="0">
                <a href="http://www.alipay.com/">个人中心</a>
              </a-menu-item>
              <a-menu-item key="1">
                <a href="http://www.taobao.com/">修改密码</a>
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="3">退出</a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
        <!-- 头部右侧装饰 end -->
      </header>
      <div class="layout-content">
        <div class="router-info">
          <cBreadcrumb />
          <h3>首页</h3>
        </div>
        <div class="layout-router-view-box">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import cMenu from '@/components/Menu/index.vue'
import cBreadcrumb from './module/breadcrumb'
// console.log(cMenu)
export default {
  components: {
    cMenu,
    cBreadcrumb
  },
  computed: {
    ...mapGetters(['collapsed'])
  },
  methods: {
    toggleCollapsed () {
      this.$store.dispatch('toggleCollapsed')
    }
  }
}
</script>
