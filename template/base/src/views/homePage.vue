<template>
  <div class="home wh100">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import HelloWorld from '@comp/HelloWorld.vue' // @ is an alias to /src
  export default defineComponent({
    name: 'Home',
    components: {
      HelloWorld
    }
  })
</script>

<style lang="less" scoped>
  .home {
    background-color: @block_bgcolor;
    border: @border-width-base red solid;
  }
</style>
