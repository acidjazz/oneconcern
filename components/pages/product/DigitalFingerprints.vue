<template lang="pug">
#DigitalFingerprints
  .fingerprints-gradient
  .fingerprints
    .fingerprints-inner
      .fingerprints-title(v-in-viewport) {{ title }}
      .fingerprints-copy(v-in-viewport) {{ copy }}
    .clear
</template>
<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
  props: {
    title: {
      type: String,
    },
    copy: {
      type: String,
    },
  },
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/guide/includes/*'
#DigitalFingerprints
  background-image url(/digitalFingerprints.jpg)
  background-size cover
  background-position 50% 50%
  position relative
.fingerprints-gradient
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  background linear-gradient(90deg, rgba(black, 0.5), transparent)
.fingerprints
  width 900px
  margin auto
  padding 120px 0
  position relative
.fingerprints-inner
  width 340px
  float right
.fingerprints-title
  color fire-bush
  padding 0 0 20px 0
  font-h4()
  inViewportBottom(0)
.fingerprints-copy
  color white
  inViewportBottom(0.1)
@media all and (min-width: 1px) and (max-width: 1000px)
  #DigitalFingerprints
    .fingerprints
      width auto
    .fingerprints-inner
      width auto
      padding 20px
</style>
