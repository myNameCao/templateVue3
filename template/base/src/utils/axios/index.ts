import axios, { AxiosResponse } from 'axios'

import {
  requestSuccess,
  requestFail,
  responseSuccess,
  responseFail
} from '@conf/index'

export interface HttpResponse {
  status: number
  msg: string
  data: {
    code: number
    desc: string
    [key: string]: any
  }
}

// 暂时的方式

enum Method {
  GET = 'GET',
  POST = 'POST'
}

// export type Method = 'GET' | 'POST'

// 文件的类型
export type ResponseType =
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'text'
  | 'stream'

interface fun {
  (res: AxiosResponse): void
}

// 默认参数
interface defaultOption {
  path: string
  headers?: {
    [header: string]: string
  }
  responseType?: ResponseType
  host?: string
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
type httpServerOptions = getOption | postOption

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
