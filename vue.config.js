const path = require('path');
const { defineConfig, configureWebpack } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3000/', //接口的前缀
        ws: true, //代理websocked
        changeOrigin: true, //虚拟的站点需要更管origin
        pathRewrite: {
          '^/api': '', //重写路径
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@/': path.resolve(__dirname, 'src/'),
      },
    },
  },
});
