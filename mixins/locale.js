/*
 * locale.js - mixin to provide currently locale
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
export default {
  data () {
    return {
      date_formats: {
        en: 'dddd, MMM Do, YYYY',
        jp: 'YYYY年MMMDo (dddd)',
      }
    }
  },
  computed: {
    rfc () {
      let iso = { en: 'en-US', jp: 'ja' }
      return iso[this.$store.state.i18n.locale]
    },
    locale () { return this.$store.state.i18n.locale },
    date_format () { return this.date_formats[this.locale] },

  },
  methods: {
    blog_path (post) {
      return `${this.locale === 'en' ? '/' : '/' + this.locale + '/'}blog/${this.slug(post.title)}-${post.id}`
    },
    date (date) {
      return this.$moment(date).locale(this.rfc).format(this.date_format)
    }
  }
}
