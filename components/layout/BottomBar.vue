<template lang="pug">
footer.footer(:class="{solid: fixed.indexOf($route.name) !== -1, white: $route.name === 'careers'}")
  .footer-left &copy;2018 One Concern, Inc.  All Rights Reserved
  .footer-right
    a.footer-item.footer-item-contact(href="mailto:contact@oneconcern.com") Contact Us
    a.footer-item(href="https://www.facebook.com/oneconcern",target="_new")
      span.fa.fa-facebook
    a.footer-item(href="https://twitter.com/oneconcerninc",target="_new")
      span.fa.fa-twitter
    a.footer-item(href="https://www.linkedin.com/company/oneconcern/",target="_new")
      span.fa.fa-linkedin
    a.footer-item(href="https://angel.co/one-concern",target="_new")
      span.fa.fa-angellist
</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
  data () {
    return {
      'fixed': ['index','ai','error'],
    }
  },
}
</script>

<style lang="stylus">
@import '../../assets/stylus/guide/includes/*'
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
    &.white
      background-color white
    .footer-item
      span
        color white
        background-color blue-charcoal
        &:hover
          background-color fire-bush

.footer-left
  float left
  margin-top 10px
  font-s3()
.footer-right
  float right
  font-s2()


.footer-item
  display inline-block
  margin-right 20px
  color white
  text-decoration none
  transition color 0.2s linear
  &:hover
   color fire-bush
  span
    margin-right -5px
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

footer.footer.solid .footer-item
  color blue-charcoal
  &:hover
   color fire-bush

@media all and (min-width: 1px) and (max-width: 1000px)
  .footer-left
    width 120px
    line-height 12px
    margin-top 0px
  footer.footer
    bottom 20px
    left 20px
    right 20px
  footer.footer.solid
    padding 20px 20px 100px 20px
  .footer-item-contact
    display none
  .footer-item
    margin-right 10px

</style>
