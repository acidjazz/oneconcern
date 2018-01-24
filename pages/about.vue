<template lang="pug">
#Who.page
  .hero(:style="`background-image: url(${image})`")
    .hero-title {{ copy }}
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()
export default {
  async asyncData () {
    const entry = await client.getEntries({
      'content_type': 'hero',
      'fields.page': 'about'
    })
    return {
      image: entry.items[0].fields.image.fields.file.url,
      copy: entry.items[0].fields.copy,
    }
  },
}
</script>
