 <template lang="pug">
nav.navbar(:class="{dark: darken}")
  router-link.navbar-logo(to="/")
  .navbar-menu
    router-link.navbar-item(
      v-for="name, route in menu",
      :key="route",
      :class="{active: $route.name === route}"
      :to="`/${route}`")
      span {{ name }} 
      .line
    a.navbar-item(href="https://medium.com/@oneconcerninc",target="_new") Recent Updates
    a.navbar-item(href="https://jobs.lever.co/oneconcern",target="_new") Join The Team
    CtaButton(link="mailto:contact@oneconcern.com",name="REQUEST A DEMO",theme="white")

  .clear
</template>

<script>
import CtaButton from '~/components/button/CtaButton'
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
      darken: false,
      menu: {
        about: 'Who We Are',
        mission: 'What We Believe',
        // join: 'Join the Team',
        // updates: 'Recent Updates',
        // customer: 'Become a Customer',
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

</style>
