<template lang="pug">
#What
  PageHero(:lowres="lowres",:image="image",:copy="copy")
  ScrollDown
  ContentBlock(
    v-for="content, index in contents",
    :key="index",
    :direction="content.direction",
    :theme="content.theme",
    :copy="content.copy",
    :image="content.image",
    :ctaName="content.ctaName",
    :ctaLink="content.ctaLink")
  ViewOpenings(:copys="aboutCopys")
</template>

<script>
import { createClient } from '@/plugins/contentful.js'
const client = createClient()
import ContentBlock from '@/components/modules/ContentBlock'
import CtaButton from '@/components/buttons/CtaButton'
import ScrollDown from '@/components/modules/ScrollDown'
import ViewOpenings from '@/components/modules/ViewOpenings'
import PageHero from '@/components/modules/PageHero'
export default {
  components: { ContentBlock, CtaButton, ViewOpenings, ScrollDown, PageHero, },
  async asyncData ({ app, params, store }) {

    let iso = { en: 'en-US', jp: 'ja' }
    let locale = iso[app.i18n.locale]

    const aboutCopy = await client.getEntries({
      locale: locale,
      'content_type': 'aboutCopy'
    })

    const hero = await client.getEntries({
      locale: locale,
      'content_type': 'hero',
      'fields.page': 'mission'
    })
    const contentEntries = await client.getEntries({
      locale: locale,
      'content_type': 'contentBlock',
      'fields.page': 'mission',
      order: 'fields.order',
    })
    let contents = []
    for (let content of contentEntries.items) {
      contents.push({
        copy: content.fields.copy,
        direction: content.fields.direction,
        order: content.fields.order,
        theme: content.fields.theme,
        image: content.fields.image.fields.file.url,
        ctaName: content.fields.ctaName,
        ctaLink: content.fields.ctaLink,
      })
    }

    let aboutCopys = {}
    for (let entry of aboutCopy.items) {
      aboutCopys[entry.fields.name] = entry.fields.copy
    }

    return {
      lowres: hero.items[0].fields.lowres.fields.file.url,
      image: hero.items[0].fields.image.fields.file.url,
      copy: hero.items[0].fields.copy,
      contents: contents,
      aboutCopys: aboutCopys,
    }

  }
}
</script>
