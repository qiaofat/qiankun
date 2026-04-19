const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package.json')
const path = require('path')
const publicPath = process.env.NODE_ENV === 'production' ? `/${name}` : '/'
module.exports = defineConfig({
  publicPath,
  outputDir: `dist/${name}`,
  productionSourceMap: false,
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    output: {
      libraryTarget: 'umd',
      library: `${name}-[name]`,
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/api': {
        target: 'http://192.168.0.125:9999',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
})
