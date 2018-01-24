<template lang="pug">
.content-block(
  v-in-viewport
  :class="`content-block-theme-${theme} content-block-order-${order}`")
  .content-block-image(:style="`background-image: url(${image})`")
  .content-block-copy
    .content-block-title {{ copy }}
</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
  props: {
    order: {
      type: String,
      default: 'row',
    },
    copy: {
      required: true,
      type: String,
    },
    image: {
      required: true,
      type: String,
    },
    theme: {
      required: false,
      type: String,
      default: 'charcoal',
    },
  },
}
</script>

<style lang="stylus">
@import '../../assets/stylus/guide/*'

.content-block
  width 100vw
  height 640px
  display flex
  overflow hidden

  &.content-block-order-image
    flex-direction row
  &.content-block-order-copy
    flex-direction row-reverse
  &.content-block-theme-charcoal,
  &.content-block-theme-charcoal .content-block-copy,
    background-color blue-charcoal
  &.content-block-theme-fire,
  &.content-block-theme-fire .content-block-copy
    background-color fire-bush

  // &.above-viewport, &.below-viewport
  &.below-viewport
    .content-block-image
      width 65%
    .content-block-copy
      width 35%
      .content-block-title
        opacity 0
  &.above-viewport
    .content-block-image
      width 65%
    .content-block-copy
      width 35%
      .content-block-title
        opacity 0.5



  &.in-viewport 
    .content-block-image
      width 60%
    .content-block-copy
      width 40%
      .content-block-title
        opacity 1

.content-block-image
  background-repeat no-repeat
  background-size cover
  background-position 50% 50%
.content-block-copy
  display flex
  align-items center
  justify-content center
  overflow hidden
  > .content-block-title
    font-h4()
    color white
    flex-shrink 0
    padding 50px
    max-width 300px
    transition opacity 2s ease 0.2s

.content-block-image, .content-block-copy
  transition width 1s ease
</style>
