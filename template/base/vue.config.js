/* eslint-disable @typescript-eslint/no-var-requires */
let path = require('path')
let { name } = require('./package')
const { readFileSync } = require('fs')
const colorVar = require('./config/theme')

const lessToJs = require('less-vars-to-js')

const theme = lessToJs(
  readFileSync(
    path.join(__dirname, './src/assets/styles/scss/theme.less'),
    'utf8'
  )
)
let modifyVars = Object.assign(colorVar, theme)

module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    https: false,
    port: 8087,
    disableHostCheck: true
  },
  productionSourceMap: false, // vueEnv === 'Beta' || process.env.NODE_ENV !== 'production',
  publicPath: '/',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('@view', path.resolve(__dirname, 'src/views'))
      .set('@lib', path.resolve(__dirname, 'src/lib'))
      .set('@conf', path.resolve(__dirname, 'src/utils/@conf'))
      .set('@static', path.resolve(__dirname, 'src/assets'))
      .set('@comp', path.resolve(__dirname, 'src/components'))
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`
    }
  },
  css: {
    extract: false,
    sourceMap: false,
    loaderOptions: {
      // 向 CSS 相关的 loader 传递选项
      less: {
        modifyVars,
        javascriptEnabled: true
      }
    }
  }
}
