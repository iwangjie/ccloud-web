<!--
 * @Description: 菜单组件
 * @Author: kcz
 * @Date: 2020-02-23 21:15:27
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-29 20:58:11
 -->
<template>
  <div class="menu-main" :class="{'collapsed':collapsed}">
    <!-- <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>-->
    <div class="logo">
      <img :src="logo" />
      <span v-show="!collapsed">C-CLOUD</span>
    </div>
    <a-menu
      :defaultOpenKeys="[defaultOpenKeys]"
      :defaultSelectedKeys="[defaultSelectedKeys]"
      mode="inline"
      theme="dark"
      :inlineCollapsed="collapsed"
      @click="to"
    >
      <template v-for="item in routers">
        <a-menu-item v-if="!item.children" :key="item.name">
          <a-icon :type="item.meta.icon" />
          <span>{{item.meta.title}}</span>
        </a-menu-item>
        <cSubMenu v-else :menu-info="item" :key="item.name" />
      </template>
    </a-menu>
  </div>
</template>

<script>
import cSubMenu from './module/cSubMenu'
import { mapGetters } from 'vuex'
import logo from '@/assets/logo.png'
export default {
  data () {
    return {
      // collapsed: false,
      logo
    }
  },
  components: {
    cSubMenu
  },
  computed: {
    ...mapGetters(['collapsed', 'routers']),
    defaultSelectedKeys () {
      return this.$route.name
    },
    defaultOpenKeys () {
      let key = ''
      const matched = this.$route.matched
      if (matched.length > 2) {
        key = matched[matched.length - 2].name
      }
      return key
    }
  },
  methods: {
    to (route) {
      // const path = '/' + route.keyPath.reverse().join('/')
      this.$router.push({
        name: route.key
      }).then(res => {
      //  当路由跳转成功时
        this.$store.dispatch('addTab', res)
      })
    }
  },
  mounted () {
    // console.log(this.$route, 1231)
  }
}
</script>
