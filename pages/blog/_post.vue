<template lang="pug">
#Post.page
  .hero.hero-above-fold
    .hero-svg
      include ../../static/watermark.svg
    .hero-title {{ post.title }}

  BlogPost(:post="post")
  ViewOpenings(:copys="aboutCopys")
</template>

<script>
import { createClient } from '@/plugins/contentful.js'
import BlogPost from '@/components/pages/blog/BlogPost'
import ViewOpenings from '@/components/modules/ViewOpenings'
const client = createClient()
export default {
  components: { BlogPost, ViewOpenings },
  async asyncData ({ app, route, params, store }) {
    let iso = { en: 'en-US', jp: 'ja' }
    let locale = iso[store.state.i18n.locale]
    let uparams = route.params.post.split('-')
    let id = uparams[uparams.length-1]
    const post = (await client.getEntries({locale: locale, 'content_type': 'blog', 'sys.id': id})).items[0]
    const aboutCopy = await client.getEntries({locale: locale, 'content_type': 'aboutCopy'})

    let aboutCopys = {}
    for (let entry of aboutCopy.items)
      aboutCopys[entry.fields.name] = entry.fields.copy

    return {
      aboutCopys: aboutCopys,
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

