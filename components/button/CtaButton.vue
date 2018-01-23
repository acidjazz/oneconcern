<template lang="pug">
router-link.cta-button(:to="link",:class="`theme-${theme}`",:data-text="name") {{ name }} 
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
    theme: {
      required: false,
      type: String,
      default: 'orange',
    },
  }
}
</script>

<style lang="stylus">
@import '../../assets/stylus/guide/*'

.cta-button
  position relative
  border-radius 20px 
  color fire-bush
  text-decoration none
  display inline-block
  padding 10px 22px 8px 22px
  transition background 0.2s linear 0s
  &.theme-orange
    color fire-bush
  &.theme-white
    color blue-charcoal
  &.theme-orange
    border 3px solid fire-bush
    background-image linear-gradient(-75deg, transparent 50%, fire-bush 50%)
  &.theme-white
    border 0px solid transparent
    background-image linear-gradient(-75deg, white 50%, fire-bush 50%)
  background-size 220% 220%
  background-position 100% 0%
  &.theme-orange:hover
    background-image linear-gradient(-90deg, transparent 50%, fire-bush 50%)
    background-position 0% 0%
  &.theme-white:hover
    background-image linear-gradient(-90deg, white 50%, fire-bush 50%)
    background-position 0% 0%
  font-s4()

.cta-button[data-text]::after
  content attr(data-text)
  position absolute
  top 0
  left 0
  padding 10px 22px 8px 22px
  color white
  clip rect(auto, 0px, auto, 0)
  transition clip 0.2s linear 0s
  &:hover::after
    clip rect(auto, 0px, auto, 0)

.cta-button:hover::after
  clip rect(auto, 200px, auto, 0)

</style>
