<!--
 * @Description: 布局内容router-view主要判断是否需要缓存
 * 这里增加了 multiTab 的判断，当开启了 multiTab 时
 * 应当全部组件皆缓存，否则会导致切换页面后页面还原成原始状态
 * 若确实不需要，可改为 return meta.keepAlive ? inKeep : notKeep
 * @Author: kcz
 * @Date: 2020-02-29 16:03:58
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-29 21:31:38
 -->
<template>
      <keep-alive v-if="$config.multiTab">
        <router-view />
      </keep-alive>
      <router-view v-else></router-view>
</template>
<script>
export default {
  name: 'RouteView'
}
</script>
