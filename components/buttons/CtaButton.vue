<template lang="pug">
router-link.cta-button(
  v-if="link.indexOf(':') === -1",
  :to="link",
  :class="`theme-${theme}`",
  :data-text="name") {{ name }} 
a.cta-button(
  v-else,
  :href="link",
  :target="target"
  :class="`theme-${theme}`",
  :data-text="name") {{ name }} 
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
      default: 'white',
    },
  },

  computed: {
    target () {
      return this.link.indexOf('mailto') === -1 ? '_new' : '_self'
    },
  },

}
</script>

<style lang="stylus">
@import '../../assets/stylus/guide/*'

.cta-button
  text-align center
  position relative
  border-radius 30px 
  color fire-bush
  text-decoration none
  display inline-block
  padding 10px 22px 8px 22px
  background-size 235% 235%
  background-position 100% 0%
  transition background 0.2s linear 0s
  &.theme-orange-border
    color fire-bush
  &.theme-white
    color blue-charcoal
  &.theme-orange-border
    border 3px solid fire-bush
    background-image linear-gradient(-75deg, transparent 50%, fire-bush 50%)
  &.theme-white-border,
  &.theme-white-border-black
    border 3px solid white
    color white
    background-image linear-gradient(-75deg, transparent 50%, fire-bush 50%)
  &.theme-white-border-black
    color white
    background-image linear-gradient(-75deg, transparent 50%, blue-charcoal 50%)
  &.theme-white
    border 0px solid transparent
    background-image linear-gradient(-75deg, white 50%, fire-bush 50%)
  &.theme-orange-border:hover
    background-image linear-gradient(-90deg, transparent 50%, fire-bush 50%)
    background-position 0% 0%
  &.theme-white:hover
    background-image linear-gradient(-90deg, white 50%, fire-bush 50%)
    background-position 0% 0%
  &.theme-white-border:hover,
  &.theme-white-border-black:hover
    background-image linear-gradient(-90deg, transparent 50%, fire-bush 50%)
    background-position 0% 0%
  &.theme-white-border-black:hover
    background-image linear-gradient(-75deg, transparent 50%, blue-charcoal 50%)
  font-s4()

.cta-button[data-text]::after
  position absolute
  content attr(data-text)
  top 0
  left 0
  right 0
  padding 10px 22px 8px 22px
  color white
  clip rect(auto, 0px, auto, 0)
  transition clip 0.2s linear 0s
  line-height 13px
  &:hover::after
    clip rect(auto, 0px, auto, 0)

.cta-button:hover::after
  clip rect(auto, 200px, auto, 0)

</style>
