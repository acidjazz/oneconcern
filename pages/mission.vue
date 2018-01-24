<template lang="pug">
#What 
  .hero(:style="`background-image: url(${image})`")
    .hero-title {{ copy }}
  ContentBlock(
    v-for="content, index in contents",
    :key="index",
    :direction="content.direction",
    :theme="content.theme",
    :copy="content.copy",
    :image="content.image",
    :ctaName="content.ctaName",
    :ctaLink="content.ctaLink")

  .section.section-openings(:style="`--bg: url(${dimage});`")
    .title We’re assembling a team
    .title of world class individuals.
    .title Interested in joining our team? 
    CtaButton(
      name="VIEW OPENINGS",
      theme="white-border-black",
      link="https://jobs.lever.co/oneconcern"
    )

</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()
import ContentBlock from '~/components/modules/ContentBlock'
import CtaButton from '~/components/buttons/CtaButton'
export default {
  components: { ContentBlock, CtaButton },
  async asyncData () {
    const dhero = await client.getEntries({'content_type': 'hero','fields.page': 'about'})
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
      image: hero.items[0].fields.image.fields.file.url,
      dimage: dhero.items[0].fields.image.fields.file.url,
      copy: hero.items[0].fields.copy,
      contents: contents,
    }
 
  }
}
</script>
