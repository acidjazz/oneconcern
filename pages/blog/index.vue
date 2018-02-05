<template lang="pug">
#Blog.page
  .hero.hero-above-fold
    .hero-svg
      include ../../static/watermark.svg
    .hero-title {{ copy }}
  FeaturedPosts(:posts="featured")
  RecentUpdates(:posts="posts")
  ViewOpenings(:image="dimage",v-if="dimage")
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import FeaturedPosts from '~/components/pages/blog/FeaturedPosts'
import RecentUpdates from '~/components/pages/blog/RecentUpdates'
import ViewOpenings from '~/components/modules/ViewOpenings'
const client = createClient()
export default {

  components: { FeaturedPosts, RecentUpdates, ViewOpenings },

  async asyncData () {
    const dhero = await client.getEntries({'content_type': 'hero','fields.page': 'about'})
    const hero = await client.getEntries({'content_type': 'hero','fields.page': 'blog'})
    const entries = await client.getEntries({'content_type': 'blog', order: '-fields.created'})

    let posts = []
    let featured = []
    let tags = {}

    for (let entry of entries.items) {

      let post = {
        id: entry.sys.id,
        featured: entry.fields.featured,
        type: entry.fields.type,
        date: entry.fields.created,
        image: entry.fields.image ? entry.fields.image.fields.file.url : false,
        title: entry.fields.title,
        author: {
          image: entry.fields.author ? entry.fields.author.fields.image.fields.file.url : false,
          name: entry.fields.author ? entry.fields.author.fields.name : false,
          position: entry.fields.author ? entry.fields.author.fields.position : false,
        },
        link: entry.fields.link,
      }

      posts.push(post)

      if (entry.fields.featured) {
        featured.push(post)
      }
    }

    return {
      dimage: dhero.items[0].fields.image.fields.file.url,
      copy: hero.items[0].fields.copy,
      posts: posts,
      featured, featured,
    }
  },
    
}
</script>
