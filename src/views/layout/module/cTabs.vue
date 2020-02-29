<!--
 * @Description:多标签页
 * @Author: kcz
 * @Date: 2020-02-29 13:35:07
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-29 13:50:44
 -->
<template>
  <a-tabs hideAdd v-model="activeKey" type="editable-card">
    <a-tab-pane tab="pane.title" :key="22"></a-tab-pane>
  </a-tabs>
</template>
<script>
export default {
  name: 'cTabs',
  data () {
    return {
      activeKey: 22
    }
  }
}
</script>
