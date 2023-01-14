const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = defineConfig({
  publicPath: "./",
  transpileDependencies: true,
  productionSourceMap: false, // 源码加密
  lintOnSave: false, // 关闭严格模式
  devServer: {
    port: 8080, // 端口号配置
    open: false, // 运行自启
    proxy: {
      "/api": {
        // target: 'http://192.168.2.115:8888/',
        target: "http://111.229.237.240:8080/", // 内网
        changOrigin: true,
        pathRewrite: {
          "^/api": "/",
        },
        ws: true,
        cookieDomainRewrite: {
          // localhost: '192.168.10.222:8080'
          localhost: "111.229.237.240:8080",
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        views: "@/views",
        assets: "@/assets",
      },
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
});
