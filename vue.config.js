const path = require('path');
const { defineConfig} = require('@vue/cli-service');
const { API_BASE_URL } = process.env

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '^/api': {
        target: API_BASE_URL, 
        ws: true, 
        changeOrigin: true, 
        pathRewrite: {
          '^/api': '', 
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@/': path.resolve(__dirname, 'src/')
      },
    },
  },
});
