<template lang="pug">
#Post.page
  .hero.hero-above-fold
    .hero-svg
      include ../../static/watermark.svg
    .hero-title {{ post.title }}

  BlogPost(:post="post")
  ViewOpenings(:image="dimage",v-if="dimage")

</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import BlogPost from '~/components/pages/blog/BlogPost'
import ViewOpenings from '~/components/modules/ViewOpenings'
const client = createClient()
export default {
  components: { BlogPost, ViewOpenings },
  async asyncData (context) {
    let params = context.route.params.post.split('-')
    let id = params[params.length-1]
    const dhero = await client.getEntries({'content_type': 'hero','fields.page': 'about'})
    const post = (await client.getEntries({'content_type': 'blog', 'sys.id': id})).items[0]
    return {
      dimage: dhero.items[0].fields.image.fields.file.url,
      post: {
        title: post.fields.title,
        description: post.fields.description,
        body: post.fields.body,
        date: post.fields.created,
        image: post.fields.image.fields.file.url,
        tags: post.fields.tags,
        author: {
          image: post.fields.author ? post.fields.author.fields.image.fields.file.url : false,
          name: post.fields.author ? post.fields.author.fields.name : false,
          position: post.fields.author ? post.fields.author.fields.position : false,
        },
      }
    }
  },

}
</script>

