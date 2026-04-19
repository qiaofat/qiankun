import deviceIndex from '@/views/device/son-view.vue'
const routes = [
  {
    path: '/',
    redirect: '/device'
  },
  {
    path: '/device',
    component: deviceIndex
  }
]

export default routes
