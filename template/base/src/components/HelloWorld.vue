<template>
  <div class="hello wh100">
    <h1>{{ msg }}</h1>
    helleo chris
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'HelloWorld',
    props: {
      msg: String
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
