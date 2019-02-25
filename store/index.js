export const state = () => ({
    demo: false,
    layoutCopy: {},
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
  layoutCopy(state, copy) {
    state.layoutCopy = copy
  },
}

import { createClient } from '@/plugins/contentful.js'
const client = createClient()
export const actions = {
  async nuxtServerInit ({ commit }, {req }) {
    const copy = await client.getEntries({'content_type': 'layoutCopy'})
    let copys = {}
    for (let entry of copy.items)
      copys[entry.fields.name] = entry.fields.copy
    commit('layoutCopy',  copys)
  }
}
