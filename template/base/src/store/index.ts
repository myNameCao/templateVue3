import { createStore } from 'vuex'

export default createStore({
  state: {
    loading: false //  全局loading
  },
  mutations: {
    setLoading(state, bol: boolean) {
      state.loading = bol
    }
  },
  actions: {},
  modules: {}
})
