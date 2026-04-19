import { registerMicroApps, addGlobalUncaughtErrorHandler, start } from 'qiankun'
import { Message } from 'element-ui'
import Router from '@/router'
import Store from '@/store'

const startQiankun = () => {
  const apps = Store.state.serviceList.map((v) => ({
    name: v.serviceName,
    entry: v.serviceEntry, // 需要区分是本地还是生产
    container: `#${v.serviceName}`,
    activeRule: `/portal/${v.serviceName}`,
    props: {
      appRouter: Router
    }
  }))

  // 根据接口返回的微服务列表，注册微服务
  registerMicroApps(apps, {
    beforeLoad(app) {
      console.log(app, '微服务注册成功')
      // 加载初次微服务耗时较长loading响应处理
      // 加载子应用前，加载进度条
      return Promise.resolve()
    },
    afterMount() {
      // 加载子应用前，进度条加载完成
      return Promise.resolve()
    }
  })

  addGlobalUncaughtErrorHandler((event) => {
    const { message } = event
    // 加载失败时提示
    if (message && message.includes('died in status LOADING_SOURCE_CODE')) {
      Message.error('微服务加载失败')
    }
  })

  // 启动微服务
  start()
}
export default startQiankun
