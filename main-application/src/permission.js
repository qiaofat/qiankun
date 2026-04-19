import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })
let SWITCH_FLAG = false

const getAllRouter = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      SWITCH_FLAG = true
      resolve({
        routes: [{ path: '/micro-son/device' }]
      })
    }, 300)
  })
}

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  if (!SWITCH_FLAG) {
    const { routes } = await getAllRouter()
    routes.forEach((item) => {
      router.addRoute('portal', {
        path: item.path
      })
    })
    return next({
      ...to,
      replace: true
    })
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

// const addRoute = async () => {
//   const { routes } = await getAllRouter()
//   routes.forEach(item => {
//     router.addRoute('portal', {
//       path: item.path,
//     })
//   })
// }

// addRoute()
