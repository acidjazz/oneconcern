<template lang="pug">
footer.footer(:class="{solid: $route.name !== 'index'}",v-in-viewport)
  .footer-left &copy;2018 One Concern, Inc.  All Rights Reserved
  .footer-right
    .footer-item Contact Us
    a.footer-item(href="#")
      span.fa.fa-facebook.fa-inverse
    a.footer-item(href="#")
      span.fa.fa-twitter.fa-inverse
    a.footer-item(href="#")
      span.fa.fa-linkedin.fa-inverse
</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
}
</script>


<style lang="stylus">
@import '../../assets/stylus/guide/*'
footer.footer
  position fixed
  bottom 20px
  left 45px
  right 45px
  color white
  &.solid
    position static
    background-color not-white
    padding 60px 45px 200px 45px
    color blue-charcoal
    .footer-item
      span
        color white
        background-color blue-charcoal
        &:hover
          background-color fire-bush
  &.below-viewport
    .footer-left
      transform translate(-20px, 0)
    .footer-right
      transform translate(20px, 0)
  &.in-viewport
    .footer-left
      transform translate(0px, 0)
    .footer-right
      transform translate(0px, 0)

.footer-left
  float left
  margin-top 10px
  font-s3()
.footer-right
  float right
  font-s2()
.footer-left, .footer-right
  transition transform 2s ease

.footer-item
  display inline-block
  margin-right 20px
  span
    text-align center
    padding 4px
    width 20px
    height 20px
    line-height 20px
    border-radius 50%
    background-color white
    color blue-charcoal
    transition all 0.2s ease
    &:hover
      background-color fire-bush
      color white

</style>
