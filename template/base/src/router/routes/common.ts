/**
 * 路由页面配置
 * meta 标签配置
 * @param {String} title 网站标题
 * @param {String} requireAuth 是否需要登录
 *
 **/
import { RouteRecordRaw } from 'vue-router'

const common: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录', requireAuth: false },
    component: () => import('@view/common/login.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@view/common/page404.vue')
  }
]
export default common
