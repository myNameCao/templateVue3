import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(
    window.__POWERED_BY_QIANKUN__ ? '/app/vue3' : process.env.BASE_URL
  ),
  routes
})

export default router
