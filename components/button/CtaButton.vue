<template lang="pug">
router-link.cta-button(:to="link") {{ name }}
</template>


<script>
export default {
  props: {
    link: {
      required: false,
      type: String,
      default: '/',
    },
    name: {
      required: false,
      type: String,
      default: 'BUTTON',
    },
  }
}
</script>

<style lang="stylus">

@import '../../assets/stylus/guide/*'

.cta-button
  text-decoration none
  font-s2()
  display inline-block
  padding 10px 30px 6px 30px
  border-radius 20px
  border 3px solid fire-bush
  color fire-bush
  transition all 0.2s ease-in-out
  &:hover
    background-color white
</style>
