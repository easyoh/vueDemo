const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

module.exports = {
  publicPath: './',
  //文件名hash
  filenameHashing: false,
  // productionGzip: true,
  //生成source map
  productionSourceMap: false,
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '学习积累',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      //chunks: ['chunk-vendors', 'chunk-common', 'index']
      cdn: {
        js: [
          'https://cdn.bootcss.com/vue/2.6.11/vue.min.js',
          'https://cdn.bootcss.com/vue-router/3.0.2/vue-router.min.js',
          'https://cdn.bootcss.com/axios/0.19.2/axios.min.js',
          'https://cdn.bootcss.com/echarts/4.8.0/echarts.min.js',
          'https://cdn.bootcss.com/element-ui/2.13.0/index.js'
        ],
        css: [
          'https://cdn.bootcss.com/element-ui/2.13.0/theme-chalk/index.css'
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/adapter/': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/adapter/': '/'
        }
      }
    }
  },
  configureWebpack: config => {

    // 开发时也使用cdn是为了方便和版本统一 当然也可以本地时用node_modules，发布用cdn
    config.externals = {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'axios': 'axios',
      'element-ui': 'ELEMENT',
      "echarts": "echarts"
    }

    // 为生产环境修改配置
    if (process.env.NODE_ENV === 'production') {

      config.plugins.push(
        // 使用UglifyJsPlugin去掉console 可以略微降低文件大小
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true, //生产环境自动删除console
            },
            warnings: false,
          },
          sourceMap: false,
          parallel: true //使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
        })
      );
    }
    const plugins = [];

    // Begin 生成 gzip 压缩文件
    plugins.push(
      new CompressionPlugin({
        test: productionGzipExtensions, //需要压缩的文件正则
        threshold: 0, //文件大小大于这个值时启用压缩
        deleteOriginalAssets: false, //压缩后保留原文件
        minRatio: 0.8// 只有压缩率小于这个值的资源才会被处理
      })
    )
    // End 生成 gzip 压缩文件

    config.plugins = [...config.plugins, ...plugins];
  },
}