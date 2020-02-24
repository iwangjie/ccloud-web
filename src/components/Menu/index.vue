<!--
 * @Description: 菜单组件
 * @Author: kcz
 * @Date: 2020-02-23 21:15:27
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-24 21:04:40
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
          <template v-for="item in list">
        <a-menu-item v-if="!item.children" :key="item.key">
          <a-icon type="pie-chart" />
          <span>{{item.title}}</span>
        </a-menu-item>
        <cSubMenu v-else :menu-info="item" :key="item.key" />
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
    ...mapGetters(['collapsed'])
  },
  methods: {

  },
  mounted () {
    console.log(this.collapsed)
  }
}
</script>
