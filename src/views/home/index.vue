<!--
 * @Description:
 * @Author: kcz
 * @Date: 2020-02-28 20:31:55
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-29 21:30:52
 -->
<template>
  <a-card :loading="loading">
    <ul>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
    </ul>
  </a-card>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    console.log(234)
  }
}
</script>
