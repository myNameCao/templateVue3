type host = {
  host: string
  path: {
    [PATH: string]: string
  }
}

export type serverApi = {
  defaulteApi: host
  exam: host
}
const api: serverApi = {
  defaulteApi: {
    host: process.env.VUE_APP_API_defaulteApi,
    path: {
      login: '/auth/login'
    }
  },
  exam: {
    host: '',
    path: {}
  }
}

export default api
