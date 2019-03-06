<template lang="pug">
nav.navbar(:class="{dark: darken}")
  nuxt-link.navbar-logo(:to="localePath('index')")
  .navbar-burger(:class="{'is-active': burger}",@click="burger = !burger")
    span
    span
    span
  .navbar-menu
    nuxt-link.navbar-logo-mobile(:to="localePath('index')")
    nuxt-link.navbar-item(
      v-for="item, route in menu"
      v-if="is_en || is_not_en && locale_support.includes(route)",
      :key="route"
      :class="{active: $route.name && $route.name.indexOf(route) !== -1}"
      @click.native="burger = false"
      :to="localePath(route)")
      span {{ item.copy }}
      .line
    CtaButton(:name="$store.state.layoutCopy.ctaDemo",theme="white",:width=160,:callback="demo")
    .navbar-item
      a(
        href="/",
        :class="{'is-active': $store.state.i18n.locale === 'en'}").flag
        img(src="/flag_en.jpg")
      span &nbsp;
      a(
        href="/jp",
        :class="{'is-active': $store.state.i18n.locale === 'jp'}").flag
        img(src="/flag_jp.jpg")
  .clear
</template>

<script>
import CtaButton from '~/components/buttons/CtaButton'
import { mapGetters } from 'vuex'
export default {
  components: { CtaButton },
  data () {
    return {
      burger: false,
      darken: false,
      menu: {
        product: { copy: this.$store.state.layoutCopy.menuProduct },
        mission: { copy: this.$store.state.layoutCopy.menuMission },
        about: { copy: this.$store.state.layoutCopy.menuAbout },
        careers: { copy: this.$store.state.layoutCopy.menuCareers },
        blog: { copy: this.$store.state.layoutCopy.menuBlog },
      },
      locale_support: [ 'product', 'mission' ],
    }
  },
  computed: { ...mapGetters(['is_en', 'is_not_en', 'is_jp']), },
  watch: {
    '$route' (to, from) {
      if (to.name === 'index') {
        return true
      }
    }
  },

  created () {
    if (process.browser) {
      window.addEventListener('scroll', this.scroll)
      this.scroll()
   }
  },
  destroyed () {
    if (process.browser) {
      window.removeEventListener('scroll', this.scroll)
    }
  },
  methods: {
    demo () {
      this.$store.commit('demo', true)
    },
    scroll (event) {
      if (window.scrollY >= 100 && this.darken == false) {
        this.darken = true
      }
      if (window.scrollY <= 60 && this.darken == true) {
        this.darken = false
      }
    },
  },
}
</script>

<style lang="stylus">

@import '../../assets/stylus/guide/includes/*'

nav.navbar
  z-index 100
  position fixed
  padding 20px 45px 30px 45px
  top 0px
  left 0px
  right 0px
  transition 0.6s linear
  display flex
  justify-content flex-start
  &.dark
    padding 20px 45px 20px 45px
    background-color cinder
    .navbar-logo
      width 118px
      height 50px

.navbar-logo
  background-image url(/logo.png)
  background-size cover
  background-repeat no-repeat
  width 200px
  height 85px
  transition 0.6s ease

.navbar-logo-mobile
  display none
  margin 20px 0 0 20px
  background-image url(/logo.png)
  background-size cover
  background-repeat no-repeat
  width 118px
  height 50px

.navbar-menu
  border 1px solid right
  margin 10px 0 10px 0
  transition margin 0.6s linear
  display flex
  justify-content space-around
  max-width 900px
  margin-left auto
  align-items center
  flex-grow 1

.cta-button
  margin-top -5px

.navbar-item
  text-decoration none
  font-s2()
  color white
  position relative
  padding 8px
  transition color 0.2s ease, color 0.1s ease
  a
    color white
    text-decoration none
  &.active > .line
    left 0
    right 0
  &:not(.active):hover
    color fire-bush
  .line
    position absolute
    height 1px
    left 51%
    right 51%
    bottom 0
    background-color white
    transition all 0.2s ease-in-out 0.3s
  .flag
    img
      width 16px
    &.is-active
      border-bottom 1px solid white

.navbar-burger
  display none
  cursor pointer
  position relative
  margin-left auto
  width 40px
  height 40px
  transition transform 0.6s ease-in-out 0s
  span
    display block
    position absolute
    left 8px
    right 8px
    height 1px
    background-color white
    transition transform 0.6s ease-in-out 0s
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
  &.is-active
    transform rotate(90deg)
  &.is-active span
    &:nth-child(3)
      transform translateY(-6px) rotate(-45deg)

@media all and (min-width: 1001px) and (max-width: 1155px)
  .navbar-logo
    width 118px
    height 50px
  .navbar-item
    font-s5()

@media all and (min-width: 1px) and (max-width: 1000px)
  nav.navbar
    padding 20px
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
    top 0px
    right 0px
    left 0px
    margin 0 !important
    background-color cinder
    padding-right 90px
    animation fadeIn 0.6s linear 0s alternate both

  .navbar-item
    display none
    margin 30px 60px 30px 45px
    width 150px
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
  .navbar-burger.is-active + .navbar-menu
    height 100vh

</style>
