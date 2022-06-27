const { defineConfig } = require('@vue/cli-service')
// const CompressionPlugin = require('compression-webpack-plugin')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: false,
  productionSourceMap: false,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      Object.assign(config.optimization.splitChunks.cacheGroups, {
        'element-ui': {
          name: 'element-ui',
          test: /[\\/]element-ui[\\/]/,
          priority: 0,
          chunks: 'initial',
        },
      })
      // 开启 gzip 压缩
      //   config.plugins.push(new CompressionPlugin())
    }
  },
})
