<!--
 * @Description:面包屑
 * @Author: kcz
 * @Date: 2020-02-29 09:11:10
 * @LastEditors: kcz
 * @LastEditTime: 2020-03-01 14:35:31
 -->
<template>
  <a-breadcrumb>
    <!-- <a-breadcrumb-item><router-link to="/">首页</router-link></!-->
    <a-breadcrumb-item v-for="(item,index) in $route.matched" :key="index" v-show="index !== 0">
      <span v-if="index !== $route.matched.length - 1">{{item.meta.title}}</span>
      <router-link v-else :to="item.path">{{item.meta.title}}</router-link>
      </a-breadcrumb-item>
  </a-breadcrumb>
</template>
