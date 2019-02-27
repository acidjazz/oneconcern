<template lang="pug">
.recent-updates
  .title(v-if="title") Recent Updates
  .recent-updates-list
    .recent-update(
      v-for="post, index in listing",
      :key="index",
      :class="{vp: title}",
      v-in-viewport.once)
      .recent-update-inner
        .recent-update-image(
          v-in-viewport.once
          v-if="post.image",
          :style="`background-image: url(${post.image})`")
        .recent-update-copy
          .recent-update-title(v-in-viewport.once) {{ post.title }}
          .recent-update-author(v-in-viewport.once,v-if="post.author.name") by {{ post.author.name }}, {{ post.author.position }}
          .recent-update-date(v-in-viewport.once) {{ post.date | moment("dddd, MMM Do, YYYY") }}
        .recent-update-cta(v-in-viewport.once)
          CtaButton(v-if="post.type === 'link'",
            :link="post.link",name="view article",theme="orange-border", :width=140)
          CtaButton(v-else,
            :link="`blog/${slug(post.title)}-${post.id}`",name="view article",theme="orange-border", :width=140)
      .recent-update-border(v-in-viewport.once)
  .recent-updates-more(v-in-viewport.once,v-if="posts.length > 4")
    CtaButton(v-if="!more", :callback="showmore",name="show more",theme="orange-border")
</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
const getSlug = require('speakingurl')
import CtaButton from '~/components/buttons/CtaButton'
export default {
  components: { CtaButton },
  directives: { 'in-viewport': inViewportDirective },
  filters: {
    moment: function(date, format) {
      if (process.browser) {
        return window.moment(date).format(format)
      }
      return date
    },
  },
  props: {
    posts: {
      required: true,
      type: Array,
    },
    title: {
      required: true,
      type: Boolean,
    },
  },
    data () {
    return {
      more: false,
    }
  },
  computed: {
    listing () {
      if (this.more === true) {
        return this.posts
      }
      return this.posts.slice(0, 4)
    },
  },

  methods: {
    slug (title) {
      return getSlug(title)
    },
    showmore () {
      this.more = true
    },
  },
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/guide/includes/*'

.recent-updates
  background-color blue-charocal
  padding 60px 0
  .title
    font-h4()
    color white
    text-align center
    padding 0 0 60px 0
    inViewportBottom()

.recent-updates-list
  max-width 800px
  margin auto
  display flex
  flex-direction column
  flex-wrap wrap

.recent-update
  height 122px
  for i in 1..4
    &.vp:nth-child({i})
      .recent-update-image
        inViewportBottom((i*0.1) + 0)
      .recent-update-title
        inViewportBottom((i*0.1) + 0.25)
      .recent-update-author
        inViewportBottom((i*0.1) + 0.5)
      .recent-update-date
        inViewportBottom((i*0.1) + 0.75)
      .recent-update-cta
        inViewportRight((i*0.1) + 1)
      .recent-update-border
        inViewportWidth((i*0.1) + 0.6, 0.5)

.recent-update-inner
  height 120px
  display flex
  align-items center
  flex-grow 0

.recent-update-image
  width 120px
  height 120px
  background-size cover
  background-position 50% 50%

.recent-update-copy
  padding 0 30px
  width 60%
  flex auto

.recent-update-title
  color white
  font-s2b()

.recent-update-author
  padding-top 6px
.recent-update-author,
.recent-update-date
  color mountain-mist
  font-s5()
.recent-update-cta
  margin-left auto

.recent-update-border
  width 100%
  background-color mountain-mist
  height 1px

.recent-update:nth-child(even) .recent-update-border
  margin-left auto

.recent-updates-more
  text-align center
  margin 60px 0 0 0
  inViewportBottom()

@media all and (min-width: 1px) and (max-width: 1000px)
  .recent-update
    height auto
  .recent-update-inner
    flex-direction column
    height auto
    align-items flex-start
  .recent-update-image
    margin 30px 30px 0 30px
    width calc(100% - 60px)
  .recent-update-copy
    padding 10px 0 0 30px
    width auto
  .recent-update-cta
    margin 20px auto

  .recent-update
    for i in 1..4
      &:nth-child({i})
        .recent-update-image
          inViewportBottom(0.1)
        .recent-update-title
          inViewportBottom(0.2)
        .recent-update-author
          inViewportBottom(0.3)
        .recent-update-date
          inViewportBottom( 0.4)
        .recent-update-cta
          inViewportBottom(0.5)
        .recent-update-border
          inViewportWidth(0.6, 0.5)

</style>
