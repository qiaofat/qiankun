import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index'
import ElementUI from 'element-ui'
import router from '@/router'
import './permission'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#portal')
