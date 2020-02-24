<!--
 * @Description: 布局页面
 * @Author: kcz
 * @Date: 2020-02-23 21:12:19
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-24 20:47:08
 -->
<template>
  <div class="layout-main">
    <cMenu class="c-layout-left" />
    <div class="layout-right">
      <header class="layout-header">
        <div class="toggle-collapsed-btn" @click="toggleCollapsed">
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </div>
      </header>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import cMenu from '@/components/Menu/index.vue'
// console.log(cMenu)
export default {
  components: {
    cMenu
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
