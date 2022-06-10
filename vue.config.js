const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      // 如果请求的前缀 带有 /api 则走代理请求
      '/api': {
        // target 为服务器url
        target: 'https://localhost:9100/api',
        // 代理转发时重写路径   将开头的 '/api'  替换为 ''
        pathRewrite: {'^/api': ''},
        // 开启支持 WebSocket 默认为 true
        ws: true,
        // 控制请求头中的host值是否与服务器一致，默认为 true
        changeOrigin: true
      }
    }
  }
})
