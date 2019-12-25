import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Mock from '@/mock/index'
import api from '@/http/index'
import i18n from './i18n'
import store from './store/index'

Vue.use(elementUI)
Vue.use(api)
Vue.config.productionTip = false
console.log(store);

new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render:h=>h(App)
})
