<template lang="pug">
footer.footer
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


<style lang="stylus">
@import '../../assets/stylus/guide/*'
footer.footer

  position fixed
  bottom 20px
  left 45px
  right 45px

  color white

.footer-left
  float left
  margin-top 10px
  font-s3()
.footer-right
  float right
  font-s2()

.footer-item
  display inline-block
  margin-right 10px
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
