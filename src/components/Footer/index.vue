<!--
 * @Description: 页脚组件
 * @Author: kcz
 * @Date: 2020-02-29 09:42:06
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-29 10:01:09
 -->
<template>
  <div class="footer">
    <div class="links">
      <a><a-icon type="github" target="github" /></a>
      <a href="https://ant.design/" target="ant">Vue Antd</a>
    </div>
    <div class="copyright">
      Copyright
      <a-icon type="copyright" />
      <span>C-CLOUD开源项目组</span>
    </div>
  </div>
</template>
<style lang="less" scoped>
.footer {
  height: 90px;
  padding: 20px;
  .links {
    display: flex;
    justify-content: center;
    > a {
      margin: 0 12px;
      color: #999;
    }
  }
  .copyright {
    text-align: center;
    padding: 6px 0 0;
    color: #999;
    >span{
      padding-left: 5px;
    }
  }
}
</style>
