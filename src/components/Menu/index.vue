<!--
 * @Description: 菜单组件
 * @Author: kcz
 * @Date: 2020-02-23 21:15:27
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-24 19:57:17
 -->
<template>
  <div style="width: 256px">
    <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
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
export default {
  data () {
    return {
      collapsed: false,
      list: [
        {
          key: '1',
          title: 'Option 1'
        },
        {
          key: '2',
          title: 'Navigation 2',
          children: [
            {
              key: '2.1',
              title: 'Navigation 3',
              children: [{ key: '2.1.1', title: 'Option 2.1.1' }]
            }
          ]
        }
      ]
    }
  },
  components: {
    cSubMenu
  },
  methods: {
    toggleCollapsed () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>
