import Vuex from 'vuex'
const store = () => new Vuex.Store({
  state: {
    demo: false,
  },
  mutations: {
    demo (state, toggle) {
      state.demo = toggle
    },
  },
})

export default store
