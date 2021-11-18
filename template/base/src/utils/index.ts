import axios from './axios'
export * from './env'
export * from './encrypt'
export * from './xyui'
export default axios
// MathQueue
export const MathQueue = (elementId: string) => {
  if (!window.MathJax) {
    return
  }
  window.MathJax.Hub.Queue([
    'Typeset',
    window.MathJax.Hub,
    document.getElementById(elementId)
  ])
}
