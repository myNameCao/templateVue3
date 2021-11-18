import Cookies from 'js-cookie'
import CryptoJS from 'crypto-js'
import store from 'store'

import { options } from '@conf/index'
export function encrypt(str: string) {
  const key = CryptoJS.enc.Base64.parse(options.key) // key 要和后台一致
  const iv = CryptoJS.enc.Base64.parse(options.iv) // iv 要和后台一致
  return CryptoJS.DES.encrypt(CryptoJS.enc.Utf8.parse(str), key, {
    iv: iv,
    mode: CryptoJS.mode.CBC
  }).toString()
}
// 登录密码解密
export const decrypt = (str: string) => {
  const key = CryptoJS.enc.Base64.parse(options.key)
  const iv = CryptoJS.enc.Base64.parse(options.iv)
  const decryptObj = CryptoJS.DES.decrypt(str, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC
  })
  return decryptObj.toString(CryptoJS.enc.Utf8)
}
export const setCookie = (str: string, data: string, obj: any) => {
  Cookies.set(str, data, {
    expires: 1,
    domain: process.env.VUE_APP_CookieDomain,
    ...obj
  })
}
export const getCookie = (str: string) => {
  return Cookies.get(str)
}
export const clearCookie = (str: string) => {
  Cookies.remove(str, { path: '/', domain: process.env.VUE_APP_CookieDomain })
}
export const clearAllCookie = () => {
  // eslint-disable-next-line no-useless-escape
  const cookies = document.cookie.match(/[^ =;]+(?=\=)/g)
  if (cookies) {
    for (let i = cookies.length - 1; i >= 0; i--) {
      Cookies.remove(cookies[i], {
        path: '/',
        domain: process.env.VUE_APP_CookieDomain
      })
    }
  }
}
export const setStore = (str: string, data: any) => {
  store.set(str, data)
}

export const getStore = (str: string) => {
  return store.get(str)
}
