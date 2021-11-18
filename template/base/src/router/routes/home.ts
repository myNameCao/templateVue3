/**
 * 路由页面配置
 * meta 标签配置
 * @param {String} title 网站标题
 * @param {String} requireAuth 是否需要登录
 *
 **/
const homePage = [
  {
    path: '/',
    name: 'HomePage',
    meta: { title: '首页', requireAuth: true },
    component: () => import('@view/homePage.vue')
  }
]
export default homePage
