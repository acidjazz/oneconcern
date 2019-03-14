/*
 * locale.js - mixin to provide currently locale
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
export default {
  computed: {

    rfc () {
      let iso = { en: 'en-US', jp: 'ja' }
      return iso[this.$store.state.i18n.locale]
    },
    locale () { return this.$store.state.i18n.locale },
  },
  methods: {
    blog_path (post) {
      return `${this.locale === 'en' ? '/' : '/' + this.locale + '/'}blog/${this.slug(post.title)}-${post.id}`
    }
  },
}
