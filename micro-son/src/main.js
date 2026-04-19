import './public-path'
import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router'
import App from './App.vue'
import store from '@/store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(Router)

let app = null
let router = null
Vue.config.productionTip = false
function render(props = {}) {
  const { container } = props
  router = new Router({
    base: window.__POWERED_BY_QIANKUN__ || process.env.NODE_ENV === 'production' ? '/portal/micro-son' : '/',
    mode: 'history',
    routes
  })
  const VueRouterPush = Router.prototype.push
  Router.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch((err) => err)
  }

  app = new Vue({
    router,
    store,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#mirco-app') : '#mirco-app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// 接入协议
export async function bootstrap() {
  // console.log('vue: bootstrap')
}
export async function mount(props) {
  render(props)
}
export async function unmount() {
  // console.log('vue: unmount')
  app.$destroy()
  app.$el.innerHTML = ''
  app = null
  router = null
}
