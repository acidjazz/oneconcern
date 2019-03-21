<template lang="pug">
.blog-post
  .blog-post-inner
    .blog-post-left
      .blog-post-author(v-if="post.author.name")
        .blog-post-author-image(:style="`background-image: url(${post.author.image});`",v-in-viewport.once)
        .blog-post-author-name(v-in-viewport.once) {{ post.author.name }}
        .blog-post-author-position(v-in-viewport.once) {{ post.author.position }}
      .blog-post-date(v-in-viewport.once) {{ date(post.date) }}
      .blog-post-tags(v-in-viewport.once,v-if="is_en")
        span.blog-post-tag(v-for="tag, index in post.tags")
          nuxt-link.blog-post-tag-link(:to="`/blog/#${tag}`") {{ tag }}
          span(v-if="index+1 !== post.tags.length") ,&nbsp;
    .blog-post-content#blog-post-content(v-html="content")
</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
import locale from '@/mixins/locale'
import { mapGetters } from 'vuex'
export default {
  directives: { 'in-viewport': inViewportDirective },
  mixins: [ locale ],
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      md: false,
      content: 'Loading..',
      timer: false,
    }
  },
  computed: {
    ...mapGetters(['is_en', 'is_not_en', 'is_jp']),
  },
  mounted () {
    this.mdit()
    if (process.browser && this.content === 'Loading..') {
      this.timer = setInterval(this.mdit, 400)
    }
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = false
    }
  },
  methods: {
    mdit () {
      if (process.browser && window.markdownit && this.content === 'Loading..') {
        if (this.md === false) {
          this.md = new window.markdownit({html: true})
        }
        this.content = this.md.render(this.post.body, {html: true})
      }
    },
  },

  head () {
    return {
      script: [
        { src: '//cdnjs.cloudflare.com/ajax/libs/markdown-it/8.4.1/markdown-it.js' },
      ]
    }
  },

}
</script>

<style lang="stylus">
@import '../../../assets/stylus/guide/includes/*'

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
  font-s5()
  color mountain-mist

.blog-post-tag-link
  color orange
  text-decoration none
  &:hover
    text-decoration underline
.blog-post-content
  min-height 200px
  margin 0 0 0 200px
  overflow hidden
  font-s2()
  iframe
    display block
    margin auto
  img
    display block
    margin auto
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


