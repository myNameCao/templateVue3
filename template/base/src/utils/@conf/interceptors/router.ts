import { getCookie } from '@/utils'
import { Router } from 'vue-router'

interface myRouter extends Router {
  matched: any
  meta?: { title: string }
}
export const routerBeforeEach = (
  to: myRouter,
  from: myRouter,
  next: (...args: unknown[]) => unknown
) => {
  const token = getCookie('CXTOKEN') || ''
  if (to.meta) {
    document.title = to.meta.title
  }
  if (to.matched.some((record: any) => record.meta.requireAuth) && !token) {
    next({ path: '/login' })
  } else {
    next()
  }
}
