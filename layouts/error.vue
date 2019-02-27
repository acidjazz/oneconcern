<template lang="pug">
#ErrorPage
  .error-page(v-if="error.statusCode === 404")
    .error-title {{ error.message }}
    CtaButton(link="",name="Home")
  .error-page(v-else)
    pre.error-pre
      code.json {{ error }}
</template>

<script>
import CtaButton from '~/components/buttons/CtaButton'
export default {
  components: { CtaButton },
  props: {
    error: {
      type: Object,
      required: true,
    }
  },
  layout: 'default',
  head () {
    return  {
      script: [
        { src: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js' }
      ],
      link: [
        { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/agate.min.css' },
      ]
    }
  },
  mounted () {
    if (process.browser && window.hljs) {
      window.hljs.initHighlightingOnLoad()
    }
  },
}
</script>

<style lang="stylus">
@import '../assets/stylus/guide/includes/*'
.error-page
  display flex
  align-items center
  justify-content center
  height 100vh
  flex-direction column
  .error-title
    color fire-bush
    margin-bottom 30px
    font-h4()
  .error-pre code
    border-radius 5px
</style>
