<template lang="pug">
#IEWarning(v-if="show") 
  .close(@click="show = false")
    .fa.fa-times
  .copy To ensure you have the best possible experience using One Concern’s website, please download and install the latest version of one of the following supported browsers:
  .browsers
    a.browser(href="https://www.google.com/chrome/",target="_new")
      .fa.fa-2x.fa-chrome
    a.browser(href="https://www.mozilla.org/en-US/firefox/",target="_new")
      .fa.fa-2x.fa-firefox
    a.browser(href="https://www.apple.com/safari/",target="_new")
      .fa.fa-2x.fa-safari
    a.browser(href="https://www.microsoft.com/en-us/windows/microsoft-edge",target="_new")
      .fa.fa-2x.fa-edge
</template>

<style lang="stylus">
@import '../../assets/stylus/guide/includes/*'
#IEWarning
  position absolute
  z-index 100
  background-color blue-charcoal
  color white
  top 0
  left 0
  width 100%
  padding 0 0 30px 0
  text-align cneter
  .close
    cursor pointer
    position absolute
    top 20px
    right 20px
  .copy
    padding 60px 60px 20px 60px
    max-width 900px
    margin auto
  .browsers
    text-align center
    .browser
      color fire-bush
      display inline-block
      margin 0 20px
</style>


<script>
export default {

  mounted () {
    if (process.browser) {
      const isIE11 = !!window.MSInputMethodContext && !!document.documentMode
      this.show = isIE11
    }
  },

  data () {
    return {
      show: false,
    }
  },

}
</script>
