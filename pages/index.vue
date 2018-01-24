<template lang="pug">
#Who
  Carousel(:data="carousel")
</template>

<script>

import Carousel from '~/components/modules/Carousel.vue'

import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  components: { Carousel },

  async asyncData () {

    let entries = await client.getEntries({
      'content_type': 'carousel',
      order: 'fields.order',
    })

    let carousel = []
    for (let item of entries.items) { 
      carousel.push({
        image: item.fields.image.fields.file.url,
        title: item.fields.title,
        description: item.fields.description,
        cta: {
          name: item.fields.ctaName,
          link: item.fields.ctaLink,
        }
      })
    }

    return {
      entries: entries,
      carousel: carousel,
    }

  }

}
</script>
