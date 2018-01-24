<template lang="pug">
#What 
  .hero(:style="`background-image: url(${image})`")
    .hero-title {{ copy }}
  //ContentBlock(
    v-for="content, index in contents",
    :key="index",
    :order="content.order",
    :theme="content.theme",
    :copy="content.copy",
    :image="content.image")
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()
import ContentBlock from '~/components/modules/ContentBlock'
export default {
  components: { ContentBlock },
  async asyncData () {
    const entry = await client.getEntries({
      'content_type': 'hero',
      'fields.name': 'mission'
    })
    return {
      image: entry.items[0].fields.image.fields.file.url,
      copy: entry.items[0].fields.copy,
    }
 
  }
}
</script>
