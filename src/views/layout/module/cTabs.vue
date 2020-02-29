<!--
 * @Description:多标签页
 * @Author: kcz
 * @Date: 2020-02-29 13:35:07
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-29 21:06:54
 -->
<template>
  <a-tabs hideAdd v-model="activeKey" type="editable-card">
    <a-tab-pane v-for="item in tabs" :key="item.name" :tab="item.meta.title"></a-tab-pane>
  </a-tabs>
</template>
<script>
export default {
  name: 'cTabs',
  computed: {
    tabs () {
      return this.$store.getters.tabs
    },
    activeKey () {
      return this.$route.name
    }
  }
}
</script>
