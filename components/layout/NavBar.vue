<template lang="pug">
nav.navbar(:class="{dark: darken}")
  router-link.navbar-logo(to="/")
  .navbar-burger(:class="{'is-active': burger}",@click="burger = !burger")
    span
    span
    span
  .navbar-menu
    router-link.navbar-logo-mobile(to="/")
    router-link.navbar-item(
      v-for="name, route in menu"
      :key="route"
      :class="{active: $route.name === route}"
      @click.native="burger = false"
      :to="`/${route}`")
      span {{ name }} 
      .line
    a.navbar-item(href="https://medium.com/@oneconcerninc",target="_new") Recent Updates
    a.navbar-item(href="https://jobs.lever.co/oneconcern",target="_new") Join the Team
    CtaButton(link="mailto:contact@oneconcern.com",name="REQUEST A DEMO",theme="white")
  .clear
</template>

<script>
import CtaButton from '~/components/buttons/CtaButton'
export default {
  components: { CtaButton },
  created () {
    if (process.browser) {
      window.addEventListener('scroll', this.scroll)
    }
  },
  destroyed () {
    if (process.browser) {
      window.removeEventListener('scroll', this.scroll)
    }
  },
  methods: {
    scroll (event) {
      if (window.scrollY >= 100 && this.darken === false) {
        this.darken = true
      }
      if (window.scrollY <= 60 && this.darken === true) {
        this.darken = false
      }
    },
  },
  data () {
    return {
      burger: false,
      darken: false,
      menu: {
        about: 'Who We Are',
        mission: 'What We Believe',
      },
    }
  },
}
</script>

<style lang="stylus">

@import '../../assets/stylus/guide/*'

nav.navbar
  z-index 100
  position fixed
  padding 20px 45px 30px 45px
  top 0px
  left 0px
  right 0px
  transition 0.6s linear
  &.dark
    padding 20px 45px 20px 45px
    background-color cinder
    .navbar-logo
      width 118px
      height 50px
    .navbar-menu
      margin 10px 0 0 0

.navbar-logo
  background-image url(/logo.png)
  background-size cover
  background-repeat no-repeat
  width 200px
  height 85px
  float left
  transition 0.6s ease

.navbar-logo-mobile
  display none
  margin 20px 0 0 45px
  background-image url(/logo.png)
  background-size cover
  background-repeat no-repeat
  width 118px
  height 50px

.navbar-menu
  float right
  border 1px solid right
  margin 20px 0 0 0
  transition margin 0.6s linear

.navbar-item
  text-decoration none
  margin-right 25px
  font-s2()
  color white
  position relative
  display inline-block
  padding 8px
  transition color 0.2s ease, color 0.1s ease
  &.active > .line
    left 0
    right 0
  &:not(.active):hover
    color fire-bush
  .line
    position absolute
    height 1px
    left 50%
    right 50%
    bottom 0
    background-color white
    transition all 0.2s ease-in-out 0.3s

.navbar-burger
  display none
  cursor pointer
  position relative
  float right
  margin 10px 0 10px 0
  width 40px
  height 40px
  span
    display block
    position absolute
    left 8px
    right 8px
    height 1px
    background-color white
    transition transform 0.6s ease 0s
    &:nth-child(1)
      top calc(50% - 6px)
    &:nth-child(2)
      top calc(50% - 0px)
    &:nth-child(3)
      top calc(50% + 6px)
  &.is-active span
    &:nth-child(1)
      transform translateY(6px) rotate(45deg)
  &.is-active span
    &:nth-child(2)
      opacity 0
  &.is-active span
    &:nth-child(3)
      transform translateY(-6px) rotate(-45deg)

@media all and (min-width: 1px) and (max-width: 1000px)
  .navbar-logo
    width 118px
    height 50px
  .navbar-burger
    display block
    z-index 10
  .navbar-logo
    z-index 10

  .navbar-menu
    display none
    position absolute
    z-index 1
    top -20px
    right 0px
    left 0px
    background-color cinder
    padding-right 90px
    animation fadeIn 0.6s linear 0s alternate both

  .navbar-item
    display none
    margin 30px 60px 30px 45px
    width 200px
    animation fadeInLeft 0.3s ease 0s alternate both
    for i in 1..10
      &:nth-child({i})
        animation-delay unit((0.1*i), 's')

  .navbar-menu .cta-button
    display none
    margin 30px 0 30px 45px
    width 140px

  .navbar-burger.is-active + .navbar-menu,
  .navbar-burger.is-active + .navbar-menu .navbar-logo-mobile,
  .navbar-burger.is-active + .navbar-menu .navbar-item,
  .navbar-burger.is-active + .navbar-menu .cta-button
    display block

</style>
