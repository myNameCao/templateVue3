import common from './common'
import home from './home'

import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [...common, ...home]

export default routes
