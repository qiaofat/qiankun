import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    check: false,
    expend: false,
    serviceList: [
      {
        name: '子应用1',
        serviceName: 'micro-son',
        serviceEntry: '//localhost:8081'
      }
    ]
  },
  mutations: {
    UPDATE_COUNT(state, active) {
      state.check = active
    }
  }
})
export default store
