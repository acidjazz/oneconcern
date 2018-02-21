<template lang="pug">
.content-block(
  v-in-viewport.once
  :class="`content-block-theme-${theme} content-block-direction-${direction}`")
  .content-block-image(:style="`background-image: url(${image})`")
  .content-block-copy
    .content-block-title
      | {{ copy }}
    .content-block-cta(v-if="ctaName")
      CtaButton(:link="ctaLink",:name="ctaName",theme="white-border")
</template>

<script>
import CtaButton from '~/components/buttons/CtaButton'
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  components: { CtaButton },
  directives: { 'in-viewport': inViewportDirective },
  props: {
    direction: {
      type: String,
      default: 'image-first',
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
    ctaName: {
      required: false,
      type: String,
    },
    ctaLink: {
      required: false,
      type: String,
    },
  },
}
</script>

<style lang="stylus">
@import '../../assets/stylus/guide/includes/*'
.content-block
  width 100vw
  height 640px
  display flex
  overflow hidden

  &.content-block-direction-image-first
    flex-direction row
  &.content-block-direction-copy-first
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
      .content-block-title,
      .content-block-cta
        opacity 0
  &.above-viewport
    .content-block-image
      width 65%
    .content-block-copy
      width 35%
      .content-block-title,
      .content-block-cta
        opacity 0.5

  &.in-viewport 
    .content-block-image
      width 60%
    .content-block-copy
      width 40%
      .content-block-title,
      .content-block-cta
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
  flex-direction column
  > .content-block-title
    font-h4()
    color white
    flex-shrink 0
    padding 50px
    max-width 350px
    transition opacity 2s ease 0.3s
    > .content-block-cta
      margin 60px 0 0 0
      transition opacity 2s ease 0.6s
      > a
        width 180px

.content-block-image, .content-block-copy
  transition width 1s ease

@media all and (min-width: 1px) and (max-width: 1000px)
  .content-block
    flex-direction column !important
    height auto
  .content-block-image,
  .content-block-copy
    width 100% !important
  .content-block-cta
    text-align center
</style>
