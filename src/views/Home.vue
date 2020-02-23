<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <element-u-i />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ElementUI from '@/components/ElementUI'

export default {
  name: 'Home',
  components: {
    ElementUI,
    HelloWorld
  }
}
</script>
