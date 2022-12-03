import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/Global.css'
import 'element-ui/lib/theme-chalk/display.css'
import './assets/animate.min.css'
import 'element-ui/lib/theme-chalk/base.css'
import axios from 'axios'
import store from './store'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
