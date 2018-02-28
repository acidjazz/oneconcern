<template lang="pug">
.popular-tags
  .title(v-in-viewport.once) Popular Tags
  .tags
    nuxt-link.tag(
      :to="`/blog/#${tag[0]}`",
      v-for="tag, index in tags",
      :key="index",
      v-if="index < limit",
      v-in-viewport.once)
      span.copy {{ tag[0] }}
      span.comma(v-if="index !== limit-1") , 
</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
  props: {
    limit: {
      type: Number,
      required: false,
      default: 12,
    },
    tags: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/guide/includes/*'
.popular-tags
  padding 60px 0
  background-color white
  .title
    font-h4()
    color blue-charcoal
    text-align center
    padding 0 0 30px 0
    inViewportBottom()

  .tags
    text-align center
    max-width 660px
    margin auto
    text-transform capitalize
    padding 0 20px
    .tag
      text-decoration none
      .copy
        color fire-bush
      .comma
        color blue-charcoal
      for i in 1..12
        &:nth-child({i})
          inViewportBottom(0.03*i)

</style>
