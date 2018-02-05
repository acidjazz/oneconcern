<template lang="pug">
.featured
  .title(v-in-viewport) Featured
  .featured-posts
    .featured-post(v-for="post in posts")
      a.featured-post-image(
        v-if="post.type === 'link'",
        :style="`background-image: url(${post.image})`",
        v-in-viewport,:href="post.link",target="_new")
      router-link.featured-post-image(
        v-else,
        :style="`background-image: url(${post.image})`",
        v-in-viewport,:to="`/blog/${slug(post.title)}-${post.id}`")
      .featured-post-copy
        .featured-post-title(v-in-viewport) {{ post.title }}
        .featured-post-author(v-in-viewport) by {{ post.author.name }}, {{ post.author.position }}
        .featured-post-date(v-in-viewport) {{ post.date | moment("dddd, MMM Do, YYYY") }}
</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
const getSlug = require('speakingurl')
export default {
  directives: { 'in-viewport': inViewportDirective },
  props: {
    posts: {
      required: true,
      type: Array,
    }
  },
  methods: {
    slug (title) {
      return getSlug(title)
    },
  },
  filters: {
    moment: function(date, format) {
      if (process.browser) {
        return window.moment(date).format(format)
      }
      return date
    },
    slug: function(title) {
      return getSlug(title)
    },
  },
}
</script>

<style lang="stylus">

@import '../../../assets/stylus/guide/*'

.featured
  padding 60px 0
  background-color white

  .title
    text-align center
    font-h4()
    padding 0 0 60px 0
    inViewportBottom()
.featured-posts
  max-width 1000px
  margin auto

  display flex
  flex-wrap wrap

.featured-post
  width 50%
  display flex
  justify-content flex-start
  flex-direction column
  height 400px

.featured-post-image
  height 220px
  background-size cover
  background-position 50% 50%
  inViewportBottom()

.featured-post-copy
  padding-top 30px
.featured-post-title
  font-h4()
  padding 0 30px 0 30px
  inViewportBottom(0.1)
.featured-post-author,
.featured-post-date
  font-s2()
  color mountain-mist
.featured-post-author
  padding 10px 0 0 30px
  inViewportBottom(0.2)
.featured-post-date
  padding 0 0 0 30px
  inViewportBottom(0.3)

.featured-post:nth-child(even)
  .featured-post-image
    inViewportBottom(0.1)
  .featured-post-title
    inViewportBottom(0.2)
  .featured-post-author
    inViewportBottom(0.3)
  .featured-post-date
    inViewportBottom(0.4)


@media all and (min-width: 1px) and (max-width: 1000px)
  .featured-post
    width 100%

</style>
