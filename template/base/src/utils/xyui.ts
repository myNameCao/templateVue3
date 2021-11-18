//  工程中的 ui 库封装
import store from '@/store'
import { message, Modal } from 'ant-design-vue'

// export function Dialog() {}
// export function Notify() {}
export function loading() {
  store.commit('setLoading', true)
}
export function clearTip() {
  store.commit('setLoading', false)
}
export const Toast = {
  // str:传入的内容，1：消息框展示的时间比如2就是两秒之后消失以此类推
  // 提示
  fail(str: string) {
    message.info(str, 1)
  },
  // 错误
  error(str: string) {
    message.error(str, 1)
  },
  // 警告
  warn(str: string) {
    message.warning(str, 10000)
  },
  // 成功
  success(str: string) {
    message.success(str, 1)
  },
  modal({
    title,
    contents,
    classname,
    oktext
  }: {
    title: string
    contents: string
    classname?: string
    oktext?: string
  }) {
    return new Promise(resole => {
      Modal.confirm({
        title: title,
        content: contents,
        icon: 'exclamation-circle',
        okText: oktext || '确定',
        cancelText: '取消',
        okType: 'primary',
        class: classname || 'popupbox',
        mask: true,
        maskClosable: false,
        keyboard: false,
        centered: true,
        onCancel: () => {
          resole(false)
        },
        onOk: () => {
          resole(true)
        }
      })
    })
  }
}

export default Toast
