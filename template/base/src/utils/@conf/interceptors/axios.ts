import Cookies from 'js-cookie'
import baseApi from '@lib/api'
// import { AxiosResponse } from 'axios'
import Toast, { loading, clearTip } from '@/utils/xyui'
import errorHander from './errorHander'

const list: number[] = []
// Add a request interceptor

export const requestSuccess = (res: any) => {
  //TODO  添加默认参数
  const { host, path } = baseApi[res.host || 'defaulteApi']
  const newRes = {
    ...res,
    method: res.method || 'GET',
    url: host + path[res.path],
    headers: { CXTOKEN: res.token || Cookies.get('CXTOKEN') || '' }
  }
  if (res.token === false) {
    newRes.headers['CXTOKEN'] = ''
  }
  if (res.loading) {
    res.uid = Date.now()
    res.uid = list.push(res.uid)
  }
  list.length && loading()
  return newRes
}

export const requestFail = (requestError: any) => {
  // 自定义发送请求失败逻辑，断网，请求发送监控等
  Toast.fail('网络连接失败,请重试......')
  return Promise.reject(requestError)
}

// Add a response interceptor
export const responseSuccess = (responseObj: any) => {
  // loading 的关闭
  list.splice(list.indexOf(responseObj.config.uid), 1)
  !list.length && clearTip()
  // 失败提示
  if (responseObj.data.success === false || responseObj.data.status === false) {
    if (!responseObj.config.noTip) {
      setTimeout(() => Toast.fail(responseObj.data.msg), 1500)
    }
    return Promise.reject(responseObj.data)
  }
  return responseObj.data
}

export const responseFail = (responseError: any) => {
  list.splice(list.indexOf(responseError.config.uid), 1)
  !list.length && clearTip()
  // 响应失败，可根据 responseError.message 和 responseError.response.status 来做监控处理
  const code: number = responseError.response.status
  const Fail = errorHander[code]
  Fail && Fail()
  return Promise.reject(responseError)
}
