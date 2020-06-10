<template lang="pug">
#Privacy.page
  .hero.hero-above-fold
    .hero-svg
      include ../static/watermark.svg
    .hero-title {{ title }}
  .page-content
    .body(v-html="body")

</template>

<script>
import { createClient } from '@/plugins/contentful.js'
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
const client = createClient()
export default {
  async asyncData ({ app, params, store }) {
    let iso = { en: 'en-US', jp: 'ja' }
    let locale = iso[app.i18n.locale]
    const copy = await client.getEntries({locale: locale, content_type: 'legalCopy', 'fields.name': 'terms'})

    return {
      title: copy.items[0].fields.title,
      body: documentToHtmlString(copy.items[0].fields.body),
    }
  },

  methods: {
    is_array (param) { return Array.isArray(param) },
  },
}
</script>

<style lang="stylus">
.page-content
  background-color white
  padding 60px
</style>
