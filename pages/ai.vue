<template lang="pug">
#AI.page
  .hero
    .hero-svg
      include ../static/watermark.svg
    BenevolentAi(:copy="copy",:carousel="carousel")
</template>

<script>
import BenevolentAi from '~/components/modules/BenevolentAi'
import { createClient } from '~/plugins/contentful.js'
const client = createClient()
export default {
  components: {  BenevolentAi },

  async asyncData () {
    const AiCopy = await client.getEntries({'content_type': 'aiCopy'})
    const AiCarousel = await client.getEntries({'content_type': 'aiCarousel'})

    let Carousel = []

    for (let item of AiCarousel.items) {
      Carousel.push({
        title: item.fields.title,
        description: item.fields.description,
      })
    }

    return {
      copy: {
        title: AiCopy.items[0].fields.title,
        description: AiCopy.items[0].fields.description,
      },
      carousel: Carousel,
    }
  },
}
</script>
