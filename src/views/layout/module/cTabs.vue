<!--
 * @Description:多标签页
 * @Author: kcz
 * @Date: 2020-02-29 13:35:07
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-29 21:38:16
 -->
<template>
  <a-tabs hideAdd v-model="activeKey" @edit="handleDelete" :type="tabs.length > 1 ? 'editable-card' : 'card'">
    <a-tab-pane v-for="item in tabs" :key="item.name" :tab="item.meta.title"></a-tab-pane>
  </a-tabs>
</template>
<script>
export default {
  name: 'cTabs',
  data () {
    return {
    }
  },
  computed: {
    tabs () {
      return this.$store.getters.tabs
    },
    activeKey: {
      get () {
        return this.$route.name
      },
      set (name) {
        this.$router.push({
          name
        })
      }
    }
  },
  methods: {
    handleDelete (name) {
      // 移除tab
      // 如果移除是当前标签则后退一步历史记录
      if (this.activeKey === name) {
        history.back()
      }
      this.$store.dispatch('removeTab', name)
    }
  }
}
</script>
