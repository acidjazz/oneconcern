import Vuex from 'vuex'
const store = () => new Vuex.Store({
  state: {
    demo: true,
  },
  mutations: {
    demo (state, toggle) {
      state.demo = toggle
      if (toggle === true) {
        document.getElementsByTagName('html')[0].classList.add('is-clipped')
      } else {
        document.getElementsByTagName('html')[0].classList.remove('is-clipped')
      }
    },
  },
})

export default store
