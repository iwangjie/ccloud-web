<!--
 * @Description: 单文件递归菜单
 * @Author: kcz
 * @Date: 2020-02-24 19:07:07
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-24 19:57:08
 -->
<template functional>
  <a-sub-menu :key="props.menuInfo.key">
    <span slot="title">
      <a-icon type="mail" /><span>{{ props.menuInfo.title }}</span>
    </span>
    <template v-for="item in props.menuInfo.children">
      <a-menu-item v-if="!item.children" :key="item.key">
        <a-icon type="pie-chart" />
        <span>{{ item.title }}</span>
      </a-menu-item>
      <cSubMenu v-else :key="item.key" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>
<script>
export default {
  name: 'cSubMenu',
  props: ['menuInfo']
}
</script>
