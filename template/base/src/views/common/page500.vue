<template>
  <div class="page_sigle">
    <div class="tip">
      <div>系统维护升级中</div>
    </div>
  </div>
</template>
<script>
  // import axios, { setCookie } from '@utils'
  export default {
    data() {
      return {}
    },
    mounted() {}
  }
</script>
<style lang="scss" scoped>
  .page_sigle {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .tip {
    position: absolute;
    font-size: 18px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #333333;
    text-align: center;
    .imgtip {
      width: 284px;
      height: 219px;
    }
  }
</style>
