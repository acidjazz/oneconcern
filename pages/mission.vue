<template lang="pug">
#What 
  .hero(:style="`background-image: url(${lowres})`")
    img.hero-background(:src="image")
    .hero-title {{ copy }}
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
  ViewOpenings
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()
import ContentBlock from '~/components/modules/ContentBlock'
import CtaButton from '~/components/buttons/CtaButton'
import ScrollDown from '~/components/modules/ScrollDown'
import ViewOpenings from '~/components/modules/ViewOpenings'
export default {
  components: { ContentBlock, CtaButton, ViewOpenings, ScrollDown },
  async asyncData () {
    const hero = await client.getEntries({
      'content_type': 'hero',
      'fields.page': 'mission'
    })
    const contentEntries = await client.getEntries({
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

    return {
      lowres: hero.items[0].fields.lowres.fields.file.url,
      image: hero.items[0].fields.image.fields.file.url,
      copy: hero.items[0].fields.copy,
      contents: contents,
    }
 
  }
}
</script>
