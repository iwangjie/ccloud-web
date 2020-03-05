'use strict'
/**
 * 端口配置，可以如下两种方式修改端口
 * 1、port = 8080
 * 2、yarn serve --port 8080
 * @type {string | number}
 */
const port = process.env.port || process.env.npm_config_port || 8081 // dev port
// 页面标题
const title = 'C-Cloud Web Ant'

/*
 * @Description:
 * @Author: kcz
 * @Date: 2020-02-23 21:02:17
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-23 21:04:10
 */
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1DA57A',
          'link-color': '#1DA57A',
          'border-radius-base': '2px'
        },
        javascriptEnabled: true
      }
    }
  },
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: title,
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }// ,
    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `subpage.html`.
    // subpage: 'src/subpage/main.js'
  }
}
