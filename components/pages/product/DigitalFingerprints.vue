<template lang="pug">
#DigitalFingerprints
  .fingerprints
    .fingerprints-inner
      .fingerprints-title {{ title }}
      .fingerprints-copy {{ copy }}
    .clear
</template>
<script>
export default {
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
  padding 60px 0
.fingerprints-inner
  width 240px
  float right
.fingerprints-title
  color fire-bush
  padding 0 0 20px 0
.fingerprints-copy
  color white
  font-s2()
</style>
