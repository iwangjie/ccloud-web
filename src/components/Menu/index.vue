<!--
 * @Description: 菜单组件
 * @Author: kcz
 * @Date: 2020-02-23 21:15:27
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-29 19:50:52
 -->
<template>
  <div class="menu-main" :class="{'collapsed':collapsed}">
    <!-- <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button> -->
    <div class="logo">
      <img :src="logo">
      <span v-show="!collapsed">C-CLOUD</span>
    </div>
    <a-menu
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['sub1']"
      mode="inline"
      theme="dark"
      :inlineCollapsed="collapsed"
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
      logo,
      list: [
        {
          key: '1',
          title: '菜单1'
        },
        {
          key: '2',
          title: '菜单2',
          children: [
            {
              key: '2.1',
              title: '菜单2.1',
              children: [{ key: '2.1.1', title: '菜单2.1.1' }]
            }
          ]
        }
      ]
    }
  },
  components: {
    cSubMenu
  },
  computed: {
    ...mapGetters(['collapsed', 'routers'])
  },
  methods: {

  },
  mounted () {
    console.log(this.routers, 1231)
  }
}
</script>
