<template lang="pug">
.blog-post
  .blog-post-inner
    .blog-post-left
      .blog-post-author
        .blog-post-author-image(:style="`background-image: url(${post.author.image});`",v-in-viewport)
        .blog-post-author-name(v-in-viewport) {{ post.author.name }}
        .blog-post-author-position(v-in-viewport) {{ post.author.position }}

      .blog-post-date(v-in-viewport) {{ post.date | moment("dddd, MMM Do, YYYY") }}
      .blog-post-tags(v-in-viewport)
        span.blog-post-tag(v-for="tag in post.tags") 
          span {{ tag }}
          | ,&nbsp;
    .blog-post-content(v-html="$md.render(post.body)")
</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  props: {
    post: {
      type: Object,
    },
  },
  directives: { 'in-viewport': inViewportDirective },
  filters: {
    moment: function(date, format) {
      if (process.browser) {
        return window.moment(date).format(format)
      }
      return date
    },
  },
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/guide/*'

.blog-post
  background-color white
  padding 60px 0
.blog-post-inner
  max-width 1000px
  margin auto
  position relative
  left -100px

.blog-post-left
  float left
  width 160px

.blog-post-author-image
  width 100px
  height 100px
  background-size cover
  overflow hidden
  border-radius 50px

.blog-post-author-name
  padding 6px 0 0 0
  font-s2b()
  inViewport()
.blog-post-author-position
  font-s2()
  inViewport(0.1)
.blog-post-date
  font-s3()
  inViewport(0.2)
  color mountain-mist
  padding 10px 0
.blog-post-tags
  inViewport(0.3)
  font-s3()
  color mountain-mist
.blog-post-tag span
  color orange
.blog-post-content
  margin 0 0 0 200px
  overflow hidden
  font-s2()
  img
    max-width 100%

@media all and (min-width: 1px) and (max-width: 1000px)
  .blog-post
    padding 10px 0
  .blog-post-inner
    left auto

  .blog-post-left
    float none
    margin auto
    width auto
    padding 20px
    border-bottom 1px solid mountain-mist
  .blog-post-author-image
    width 40px
    height 40px
    float left
  .blog-post-author-name
    padding 0 0 0 46px
  .blog-post-author-position
    padding 0 0 0 46px
  .blog-post-date
    padding 6px 0
  .blog-post-content
    margin auto
    padding 0 20px
</style>


