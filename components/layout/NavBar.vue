<template lang="pug">
nav.navbar
  router-link.navbar-logo(to="/")
  .navbar-menu
    router-link.navbar-item(
      v-for="name, route in menu",
      :key="route",
      :class="{active: $route.name === route}"
      :to="route")
      span {{ name }} 
      .line
    router-link.navbar-item.cta(to="/")
      .back
      .cover
      .text REQUEST A DEMO
  .clear
</template>

<script>
export default {
  data () {
    return {
      menu: {
        who: 'Who We Are',
        what: 'What we Believe',
        join: 'Join the Team',
        updates: 'Recent Updates',
        customer: 'Become a Customer',
      },
    }
  },
}
</script>

<style lang="stylus">

@import '../../assets/stylus/guide/*'

nav.navbar
  position fixed
  padding 20px 45px 30px 45px
  top 0px
  left 0px
  right 0px
  transition background-color 1s ease
  &.dark
    background-color cinder

.navbar-logo
  background-image url(/logo.png)
  background-size cover
  background-repeat no-repeat
  width 146px
  height 62px
  float left

.navbar-menu
  float right
  border 1px solid right
  margin 20px 0 0 0

.navbar-item
  text-decoration none
  margin-right 25px
  font-s2()
  color white
  position relative
  display inline-block
  padding 8px
  transition background-color 0.2s ease, color 0.1s ease
  &.active > .line
    left 0
    right 0
  &:not(.active):hover
    background-color rgba(white, 0.5)
  &.cta
    color blue-charcoal
    border-radius 20px 
    position relative
    overflow hidden
    margin-bottom -10px
    width 173px
    height 22px
    &:hover .cover
      transform translate(-10px, 0) skewX(-20deg)
    &:hover .text
      color white
    .text
      tplr()
      text-align center
      position absolute
      line-height 42px
      transition 0.15s ease
    .cover
      top 0
      left 0
      bottom 0
      width 220px
      position absolute
      background-color fire-bush
      transform translate(-220px, 0) skewX(-15deg)
      transition 0.2s ease
    .back
      tplr()
      position absolute
      background-color white

  .line
    position absolute
    height 1px
    left 50%
    right 50%
    bottom 0
    background-color white
    transition all 0.2s ease-in-out 0.3s

</style>
