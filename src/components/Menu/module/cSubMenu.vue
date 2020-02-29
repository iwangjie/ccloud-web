<!--
 * @Description: 单文件递归菜单
 * @Author: kcz
 * @Date: 2020-02-24 19:07:07
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-29 19:51:46
 -->
<template functional>
  <a-sub-menu :key="props.menuInfo.name">
    <span slot="title">
      <a-icon :type="props.menuInfo.meta.icon" /><span>{{ props.menuInfo.meta.title }}</span>
    </span>
    <template v-for="item in props.menuInfo.children">
      <a-menu-item v-if="!item.children" :key="item.name">
        <a-icon :type="item.meta.icon" />
        <span>{{ item.meta.title }}</span>
      </a-menu-item>
      <cSubMenu v-else :key="item.name" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>
<script>
export default {
  name: 'cSubMenu',
  props: ['menuInfo']
}
</script>
