import router from '@/router'

interface fun {
  (): void
}

type ERROR = {
  [string: number]: fun
}
const error: ERROR = {
  401: () => {
    history.pushState('', '登录', '/login')
  },
  404: () => {
    router.replace({ path: '/404' })
  },
  500: () => {
    router.replace({ path: '/500' })
  }
}
export default error
