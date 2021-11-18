export type Api = {
  [HOST: string]: {
    host: string
    path: {
      [PATH: string]: string
    }
  }
}
const api: Api = {
  defaulteApi: {
    host: process.env.VUE_APP_API_defaulteApi,
    path: {
      login: '/auth/login'
    }
  }
}
export default api
