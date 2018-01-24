<template lang="pug">
#Who.page
  .hero
    .hero-title Who ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada velit a lacus venenatis tempor. Integer eu consectetur metus. Nunc a volutpat tellus
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()
export default {
  async asyncData () {
    let entry = await client.getEntries({
      'content_type': 'hero',
      'fields.name': 'about'
    })

    return entry
  },
}
</script>

<style lang="stylus">
#Who
  .hero
    background-image url(https://picsum.photos/1280/740?image=122)
</style>
