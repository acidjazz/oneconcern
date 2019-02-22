export const state = () => ({
    demo: false,
})

export const mutations = {
  demo (state, toggle) {
    state.demo = toggle
    if (toggle === true) {
      document.getElementsByTagName('html')[0].classList.add('is-clipped')
    } else {
      document.getElementsByTagName('html')[0].classList.remove('is-clipped')
    }
  },
}
