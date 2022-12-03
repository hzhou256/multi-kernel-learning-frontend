const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const path = require('path')

const HOST = '0.0.0.0'
const PORT = '8080'
module.exports = {
  devServer: {
    host: HOST,
    port: PORT,
    proxy: { // 配置跨域
      '/api': {
        // 要访问的跨域的api的域名
        target: 'http://www.ncrna.lbci.net/',
        // target: 'http://localhost:8002/',
        changOrigin: true,
        ws: false,
        timeout: 5 * 60 * 1000, // 设置超时5分钟
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return
    return {
      plugins: [
        new PrerenderSPAPlugin({
          // 网页包的路径将应用程序输出到prerender
          staticDir: path.join(__dirname, 'dist'),
          // Routes to render 对应自己router
          routes: ['/', '/index', '/Home', '/App'],
          renderer: new Renderer({
            inject: {
              foo: 'bar'
            },
            navigationOptions: {
              timeout: 0
            },
            // 渲染时显示浏览器窗口。对调试有用。
            headless: false,
            // // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
            renderAfterDocumentEvent: 'render-event'
          })
        })
      ]
    }
  }
}
