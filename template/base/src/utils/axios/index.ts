import axios, { AxiosResponse } from 'axios'
import api from '@lib/api'

import {
  requestSuccess,
  requestFail,
  responseSuccess,
  responseFail
} from '@conf/index'

// 返回参数 格式
export interface HttpResponse extends AxiosResponse {
  status: number
  msg?: string
  data: any
}

// 暂时的方式
enum Method {
  GET = 'GET',
  POST = 'POST'
}
// 文件的类型
export type ResponseType =
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'text'
  | 'stream'

interface fun {
  (res: HttpResponse): void
}

// 默认参数
interface defaultOption {
  path: string
  headers?: {
    [header: string]: string
  }
  responseType?: ResponseType
  host?: keyof typeof api
  token?: string | false
  loading?: boolean
  noTip?: boolean
  success?: fun
  error?: fun
}

// GET  参数
interface getOption extends defaultOption {
  method: 'GET'
  params?: {
    [param: string]: any
  }
}

// POST 参数
interface postOption extends defaultOption {
  method: 'POST'
  data?: {
    [data: string]: any
  }
}
export type httpServerOptions = postOption | getOption

// 站点统一的配置
const instance = axios.create({
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' }
})

// // 注入请求拦截
instance.interceptors.request.use(requestSuccess, requestFail)

// // 注入响应拦截
instance.interceptors.response.use(responseSuccess, responseFail)

export default async (p: httpServerOptions) => {
  return instance(p)
    .then(res => {
      p.success && p.success(res)
      return res
    })
    .catch(err => {
      p.error && p.error(err)
      return err
    })
} //web请求: ajax封装
