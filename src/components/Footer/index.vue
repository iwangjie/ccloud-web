<!--
 * @Description: 页脚组件
 * @Author: kcz
 * @Date: 2020-02-29 09:42:06
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-29 10:08:10
 -->
<template>
  <div class="footer">
    <div class="links">
      <a href="https://github.com/iwangjie/ccloud-web" target="github"><a-icon type="github" /></a>
      <a href="https://www.antdv.com/docs/vue/introduce/" target="ant">Vue Antd</a>
      <a href="https://github.com/iwangjie/ccloud-main" target="github">C Cloud Main</a>
    </div>
    <div class="copyright">
      Copyright
      <a-icon type="copyright" />
      <span>2020</span>
      <span>C-CLOUD开源项目组</span>
    </div>
  </div>
</template>
<style lang="less" scoped>
.footer {
  height: 90px;
  padding: 16px;
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
    padding: 10px 0 0;
    color: #999;
    >span{
      padding-left: 5px;
    }
  }
}
</style>
