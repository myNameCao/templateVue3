import './public-path'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import viewUI from './viewUI'

let instance: any
const render = (props: any): void => {
  const { container } = props
  instance = createApp(App)
  viewUI(instance)
  instance
    .use(router)
    .use(store)
    .mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}
export async function bootstrap() {
  /* eslint-disable */
  console.log('[questionbank] vue app bootstraped', 111)
  /* eslint-enable */
}
export async function mount(props: any) {
  /* eslint-disable */
  console.log('[questionbank] props from main framework', props)
  /* eslint-enable */
  render(props)
}
export async function unmount() {
  instance.unmount()
  instance.$el.innerHTML = ''
  instance = null
}
