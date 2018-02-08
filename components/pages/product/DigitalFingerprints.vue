<template lang="pug">
#DigitalFingerprints
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
@import '../../../assets/stylus/guide/*'
#DigitalFingerprints
  background-image url(/digitalFingerprints.jpg)
  background-size cover
  background-position 50% 50%
.fingerprints
  width 600px
  margin auto
  padding 120px 0
.fingerprints-inner
  width 240px
  float right
.fingerprints-title
  color fire-bush
  padding 0 0 20px 0
  inViewportBottom(0)
.fingerprints-copy
  color white
  font-s2()
  inViewportBottom(0.1)
</style>
