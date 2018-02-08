<template lang="pug">
router-link.cta-button(
  v-if="link.indexOf(':') === -1",
  :to="`/${link}`",
  :class="`theme-${theme}`",
  :style="`width: ${width}px`",
  :data-text="name")
    .before: .copy {{ name }}
    .after: .copy {{ name }}
a.cta-button(
  v-else,
  :href="link",
  :target="target"
  :class="`theme-${theme}`",
  :style="`width: ${width}px`",
  :data-text="name")
    .before: .copy {{ name }}
    .after: .copy {{ name }}
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
      validate: (value) => { return this.themees.indexOf(value) },
    },
    width: {
      required: false,
      type: Number,
      default: 200,
    },
  },

  computed: {
    target () {
      return this.link.indexOf('mailto') === -1 ? '_new' : '_self'
    },
  },

  data () {
    return {
      themes: [
        'white',
        'white-border',
        'white-border-black',
        'orange-border',
        'dark-border',
      ]
    }
  },

}
</script>

<style lang="stylus">
@import '../../assets/stylus/guide/*'

.cta-button
  display inline-block
  text-align center
  position relative
  width 200px
  height 33px
  line-height 36px
  border-radius 33px
  text-decoration none
  text-transform uppercase
  overflow hidden
  z-index 1
  font-s4()
  > .before, > .after
    position absolute
    overflow hidden
    tplr()
  > .after
    left -20px
    right -20px
    transition transform 0.1s ease-in 0.05s
    transform translate(-220px, 0) skewX(-5deg)
  > .after > .copy
    transform translate(220px, 0) skewX(5deg)
    transition transform 0.1s ease-in 0.05s
  &:hover, &:active
    > .after
      transform translate(0px, 0) skewX(-20deg)
      transition transform 0.1s ease-in 0s
    > .after > .copy
      transform translate(0px, 0) skewX(20deg)
      transition transform 0.1s ease-in 0s

  &.theme-white
    > .before
      color blue-charcoal
      background-color white
    > .after
      color white
      background-color fire-bush
  &.theme-white-border
    border 3px solid white
    > .before
      color white
      background-color transparent
    > .after
      color white
      background-color fire-bush
  &.theme-white-border-black
    border 3px solid white
    > .before
      color blue-charcoal
      background-color transparent
    > .after
      color white
      background-color blue-charcoal

  &.theme-orange-border
    border 3px solid fire-bush
    > .before
      color fire-bush
    > .after
      color white
      background-color fire-bush
  &.theme-dark-border
    border 3px solid blue-charcoal
    > .before
      color blue-charcoal
    > .after
      color white
      background-color fire-bush


  /*
  &.theme-orange-border
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
  */

</style>
