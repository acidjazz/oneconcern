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
  FeaturedPosts(:posts="featured",v-if="tag === ''",:copys="copys")
  RecentUpdates(:posts="posts",:title="tag === ''",v-if="tag !== ''",:copys="copys")
  RecentUpdates(:posts="allposts",:title="true",:copys="copys")
  PopularTags(v-if="tags && is_en",:tags="tags",:copys="copys")
  ViewOpenings(:copys="aboutCopys")
</template>

<script>
import { createClient } from '@/plugins/contentful.js'
import FeaturedPosts from '@/components/pages/blog/FeaturedPosts'
import RecentUpdates from '@/components/pages/blog/RecentUpdates'
import PopularTags from '@/components/pages/blog/PopularTags'
import ViewOpenings from '@/components/modules/ViewOpenings'
const client = createClient()
import { mapGetters } from 'vuex'
export default {
  components: { FeaturedPosts, RecentUpdates, ViewOpenings, PopularTags },
  data () {
    return {
      allposts: [],
      allfeatured: [],
      tag: '',
    }
  },
  computed: {
    ...mapGetters(['is_en', 'is_not_en', 'is_jp']),

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


  async asyncData ({ app, params, store }) {

    let iso = { en: 'en-US', jp: 'ja' }
    let locale = iso[store.state.i18n.locale]

    const hero = await client.getEntries({locale: locale, 'content_type': 'hero','fields.page': 'blog'})
    const entriesCreated = await client.getEntries({locale: locale, 'content_type': 'blog', order: '-fields.created'})
    const entriesFeatured = await client.getEntries({locale: locale, 'content_type': 'blog', order: '-fields.featured'})

    const aboutCopy = await client.getEntries({locale: locale, 'content_type': 'aboutCopy'})
    const blogCopy = await client.getEntries({locale: locale, 'content_type': 'blogCopy'})

    let copys = {}
    for (let entry of blogCopy.items)
      copys[entry.fields.name] = entry.fields.copy

    let aboutCopys = {}
    for (let entry of aboutCopy.items)
      aboutCopys[entry.fields.name] = entry.fields.copy

    let posts = []
    let featured = []
    let tags = {}

    for (let entry of entriesCreated.items) {

      let post = entryPost(entry)

      posts.push(post)

      for (let tag in post.tags) {
        if (post.tags[tag] in tags) {
          tags[post.tags[tag]]++
        } else {
          tags[post.tags[tag]] = 1
        }
      }

    }

    for (let entry of entriesFeatured.items) {

      let post = entryPost(entry)

      if (entry.fields.featured > 0) {
        featured.push(post)
      }

    }

    function entryPost(entry) {

      return {
        id: entry.sys.id,
        featured: entry.fields.featured,
        type: entry.fields.type,
        date: entry.fields.created,
        image: entry.fields.image ? entry.fields.image.fields.file.url : false,
        title: entry.fields.title,
        tags: entry.fields.tags,
        locale: entry.fields.locale,
        author: {
          image: entry.fields.author ? entry.fields.author.fields.image.fields.file.url : false,
          name: entry.fields.author ? entry.fields.author.fields.name : false,
          position: entry.fields.author ? entry.fields.author.fields.position : false,
        },
        link: entry.fields.link,
      }

    }

    return {
      copy: hero.items[0].fields.copy,
      allposts: posts,
      allfeatured: featured,
      unsortedTags: tags,
      aboutCopys: aboutCopys,
      copys: copys,
    }
  },

  mounted () {
    this.tag = this.$route.hash.replace('#', '')
  },

}
</script>
