const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  baseUrl: './',
  outputDir: process.env.outputDir, // 构建输出目录 dist
  lintOnSave: true, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('api', resolve('src/api'))
      .set('utils', resolve('src/utils'))
      .set('store', resolve('src/store'))
      .set('router', resolve('src/router'))

    config.resolve.extensions
      .add('.js')
      .add('.vue')
      .add('.styl')
  },
  productionSourceMap: true,
  css: {
    sourceMap: false
  },
}
