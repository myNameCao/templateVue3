type API = {
  [HOST: string]: {
    host: string
    path: {
      [PATH: string]: string
    }
  }
}
const api: API = {
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
