<template>
  <div class="wrap">
    <div class="loginBox">
      <div class="bottomBtn">
        <div class="logoBtn">
          <a-button type="primary" @click="go"> 登录 </a-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import axios, { encrypt } from '@/utils'
  // import webUrl from '@lib/api'

  export default {
    name: '',
    data() {
      return {}
    },
    beforeUnmount() {
      document.onkeypress = null
    },
    methods: {
      async go() {
        let data = {
          LoginID: '13731323181',
          Password: encrypt('123456')
        }

        let { code } = await axios({
          path: 'login',
          method: 'POST',
          data: data
        })
        console.log(code)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .school_dia {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999;
    .school_div {
      width: 480px;
      height: 400px;
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 0px 6px 20px 0px rgba(0, 108, 205, 0.15);
      z-index: 999999;
      .title_p {
        height: 122px;
        line-height: 122px;
        font-size: 28px;
        font-weight: 550;
        color: #333333;
        background-size: 480px 122px;
        background-repeat: no-repeat;
        text-align: center;
      }
      .content_div {
        padding: 0 30px;
        height: 248px;
        overflow: auto;
        .btn {
          width: 100%;
          height: 48px;
          line-height: 48px;
          padding: 0 24px;
          margin-bottom: 12px;
          text-align: left;
          background: #ffffff;
          border: 1px solid #e7e9ed;
          overflow: hidden;
          text-overflow: ellipsis;
          word-wrap: nowrap;
          border-radius: 9px;
          .icon {
            float: right;
            margin-top: 14px;
            width: 16px;
            height: 16px;
          }
        }
      }
    }
  }
  .wrap {
    width: 100%;
    height: 100%;
    background-size: cover;
    position: relative;
  }
  .loginBox {
    height: 420px;
    width: 400px;
    padding: 32px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0px 6px 20px 0px #2088e6;
    position: absolute;
    top: 23%;
    right: 18%;
    .logo {
      width: 100%;
      text-align: center;
      margin-bottom: 42px;
      margin-left: -6px;
      img {
        display: inline-block;
        width: 129px;
        height: 38px;
      }
    }
    .logoData {
      .zh {
        height: 80px;
        position: relative;
        span {
          display: inline-block;
          width: 100%;
          color: #ffbf00;
          text-align: right;
        }
      }
    }
    .bottomBtn {
      width: 100%;
      button {
        width: 100%;
        height: 40px;
        background: #0080ff;
        font-size: 16px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: #ffffff;
        margin-bottom: 20px;
      }
      .play {
        display: flex;
        justify-content: space-between;
        span:first-child {
          font-size: 14px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          color: #0080ff;
          cursor: pointer;
        }
        span:last-child {
          color: none;
          cursor: pointer;
        }
      }
    }

    .baselogo {
      position: absolute;
      bottom: 0;
      text-align: center;
      width: 100%;
      color: white;
    }
  }
</style>
