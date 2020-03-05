<!--
 * @Description: 布局页面
 * @Author: kcz
 * @Date: 2020-02-23 21:12:19
 * @LastEditors: kcz
 * @LastEditTime: 2020-03-01 18:52:49
 -->
<template>
  <div class="layout-main">
    <!-- 左侧菜单组件 start -->
    <cMenu class="c-layout-left"/>
    <!-- 左侧菜单组件 end -->
    <!-- 右侧区域 start -->
    <div class="layout-right">
      <header class="layout-header">
        <!-- 头部左侧切换菜单按钮 start -->
        <div class="toggle-collapsed-btn" @click="toggleCollapsed">
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'"/>
        </div>
        <!-- 头部左侧切换菜单按钮 end -->
        <!-- 头部右侧装饰 start -->
        <div class="decorate">
          <div class="decorate-btn-box">
            <span>
              <a-icon type="github"/>
            </span>
            <span>
              <a-icon type="fullscreen"/>
            </span>
          </div>
          <a-dropdown overlayClassName="avatar-dropdown">
            <div class="decorate-avatar-box">
              <div class="avatar">
                <!-- 头像 -->
                <img src="http://cdn.kcz66.com/%E5%A4%B4%E5%83%8F.jpg" alt/>
              </div>
              <span>呆萌小妹</span>
            </div>

            <a-menu slot="overlay">
              <a-menu-item key="0">
                <a-icon type="user"/>
                个人中心
              </a-menu-item>
              <a-menu-item key="1">
                <a-icon type="setting"/>
                修改密码
              </a-menu-item>
              <a-menu-divider/>
              <a-menu-item key="3" @click="logout">
                <a-icon type="logout"/>
                退出
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
        <!-- 头部右侧装饰 end -->
      </header>
      <!-- 多标签组件 start -->
      <cTabs v-if="$config.multiTab"/>
      <!-- 多标签组件 end -->
      <div class="layout-content">
        <div class="router-info" v-if="$config.showBreadcrumb && !$route.meta.hideBreadcrumb">
          <!-- 面包屑组件 start -->
          <cBreadcrumb/>
          <!-- 面包屑组件 end -->
          <h3>{{$route.meta.title}}</h3>
        </div>
        <!-- 内容主体区域 start -->
        <div class="layout-router-view-box">
          <router-view></router-view>
        </div>
        <!-- 内容主体区域 end -->
      </div>

      <!-- 页脚 start -->
      <div class="layout-footer">
        <cFooter/>
      </div>
      <!-- 页脚 end -->
    </div>
    <!-- 右侧区域 end -->
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import cMenu from '@/components/Menu/index.vue'
import cFooter from '@/components/Footer/index.vue'
import cBreadcrumb from './module/breadcrumb'
import cTabs from './module/cTabs'
// import * from ''
// console.log(cMenu)
export default {
  components: {
    cMenu,
    cBreadcrumb,
    cFooter,
    cTabs
  },

  computed: {
    ...mapGetters(['collapsed'])
  },
  methods: {
    toggleCollapsed () {
      this.$store.dispatch('toggleCollapsed')
    },
    logout () {
      this.$store.dispatch('clearLogin')
      this.$router.push('/login')
    }
  },
  mounted () {
    // 默认添加第一个标签页
    this.$store.dispatch('addTab', this.$route)
  }
}
</script>
