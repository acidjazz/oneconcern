<template lang="pug">
#FeaturedCaseStudy
  .case-study-title(v-in-viewport) {{ copy.title }}
  .case-study-case
    .case-study-image(v-in-viewport,:style="`background-image: url(${copy.image})`")
    .case-study-copy
      .case-study-quote(v-in-viewport) "{{ copy.quote }}"
      .case-study-author(v-in-viewport) {{ copy.author }}
  .case-study-cta(v-in-viewport)
    CtaButton(
      :link="`blog/${slug(copy.blog.title)}-${copy.blog.id}`",
      name="see full case study",
      theme="dark-border")
</template>
<script>
import CtaButton from '~/components/buttons/CtaButton'
import inViewportDirective from 'vue-in-viewport-directive'
const getSlug = require('speakingurl')
export default {
  components: { CtaButton },
  directives: { 'in-viewport': inViewportDirective },

  props: {
    copy: {
      type: Object,
    },
  },
  methods: {
    slug (title) {
      return getSlug(title)
    },
  },

  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/guide/includes/*'
#FeaturedCaseStudy
  background-color not-white
  padding 60px 0

.case-study-title
  text-align center
  color fire-bush
  font-h4()
  padding 0 0 30px 0
  inViewportBottom(0)

.case-study-case
  width 620px
  margin auto

.case-study-image
  float left
  width 140px
  height 140px
  background-color fire-bush
  background-size cover
  background-position 50% 50%
  border-radius 70px
  inViewportBottom(0.1)

.case-study-copy
  padding 20px 0 0 180px

.case-study-quote
  font-s2b()
  inViewportBottom(0.2)
.case-study-author
  padding 10px 0 0 0
  font-s5()
  inViewportBottom(0.3)

.case-study-cta
  padding 60px 0 0 0
  text-align center
  inViewportBottom(0.4)

@media all and (min-width: 1px) and (max-width: 1000px)
  #FeaturedCaseStudy
    .case-study-case
      width auto
    .case-study-image
      float none
      margin auto
    .case-study-copy
      padding 20px
      text-align center
    .case-study-quote
      font-s2()
    .case-study-cta
      padding 30px 0 0 0

</style>
