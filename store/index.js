
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
  async nuxtServerInit ({ commit }, { req, app } ) {

    let iso = { en: 'en-US', jp: 'ja' }
    let locale = iso[app.i18n.locale]

    const copy = await client.getEntries({locale: locale, 'content_type': 'layoutCopy'})
    let copys = {}
    for (let entry of copy.items)
      copys[entry.fields.name] = entry.fields.copy
    commit('layoutCopy',  copys)
  }
}

