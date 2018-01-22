<template lang="pug">
.content-block(:class="`content-block-theme-${theme} content-block-order-${order}`")
  .content-block-image(:style="`background-image: url(${image})`")
  .content-block-copy
    .content-block-title {{ copy }}
</template>

<script>
export default {
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
  &.content-block-order-image
    flex-direction row
  &.content-block-order-copy
    flex-direction row-reverse
  &.content-block-theme-charcoal .content-block-copy
    background-color blue-charcoal
  &.content-block-theme-fire .content-block-copy
    background-color fire-bush
.content-block-image
  width 60%
  background-repeat no-repeat
  background-size cover
.content-block-copy
  width 40%
  display flex
  align-items center
  justify-content center
  > .content-block-title
    font-h4()
    color white
    padding 50px
</style>
