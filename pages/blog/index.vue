<template lang="pug">
#Blog.page
  .hero.hero-above-fold
    .hero-svg
      include ../../static/watermark.svg
    .hero-title(v-if="tag !== ''")
      span Matching "{{ tag }}"
      nuxt-link.close(to="/blog")
        .fa.fa-times
    .hero-title(v-else) {{ copy }}
  FeaturedPosts(:posts="featured",v-if="tag === ''")
  RecentUpdates(:posts="posts",:title="tag === ''",v-if="tag !== ''")
  RecentUpdates(:posts="allposts",:title="true")
  PopularTags(:tags="tags",v-if="tags")
  ViewOpenings(:image="dimage",v-if="dimage")
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import FeaturedPosts from '~/components/pages/blog/FeaturedPosts'
import RecentUpdates from '~/components/pages/blog/RecentUpdates'
import PopularTags from '~/components/pages/blog/PopularTags'
import ViewOpenings from '~/components/modules/ViewOpenings'
const client = createClient()
export default {

  components: { FeaturedPosts, RecentUpdates, ViewOpenings, PopularTags },

  async asyncData ( context ) {

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
        tags: entry.fields.tags,
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

      for (let tag in post.tags) {
        if (post.tags[tag] in tags) {
          tags[post.tags[tag]]++
        } else {
          tags[post.tags[tag]] = 1
        }
      }

    }

    return {
      dimage: dhero.items[0].fields.image.fields.file.url,
      copy: hero.items[0].fields.copy,
      allposts: posts,
      allfeatured: featured,
      unsortedTags: tags,
    }
  },

  computed: {

    tags () {

      let sortable = []
      for (let tag in this.unsortedTags) {
        sortable.push([tag, this.unsortedTags[tag]])
      }
      sortable.sort( (a,b) => {
        return b[1] - a[1]
      })

      return sortable
    },

    posts () {
      if (this.tag !== '') {
        let posts = []
        for (let index in this.allposts) {
          if (this.allposts[index].tags && this.allposts[index].tags.indexOf(this.tag) !== -1) {
            posts.push(this.allposts[index])
          }
        }
        return posts
      }
      return this.allposts
    },

    featured () {
      if (this.tag !== '') {
        let posts = []
        for (let index in this.allfeatured) {
          if (this.allfeatured[index].tags && this.allfeatured[index].tags.indexOf(this.tag) !== -1) {
            posts.push(this.allfeatured[index])
          }
        }
        return posts
      }
      return this.allfeatured
    },

  },

  mounted () {
    this.tag = this.$route.hash.replace('#', '')
  },

  data () {
    return {
      allposts: [],
      allfeatured: [],
      tag: '',
    }
  },
    
}
</script>
