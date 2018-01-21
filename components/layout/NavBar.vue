<template lang="pug">
nav.navbar
  router-link.navbar-logo(to="/")
  .navbar-menu
    router-link.navbar-item(
      v-for="name, route in menu",
      :key="route",
      :class="{active: $route.name === route || (route === '/' && $route.name === 'index')}"
      :to="route")
      span {{ name }} 
      .line
    router-link.navbar-item.cta(to="/")
      span REQUEST A DEMO
      .line
  .clear
</template>

<script>
export default {

  created () {
    console.log(this.$route)
  },

  data () {
    return {
      menu: {
        '/': 'Who We Are',
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
  top 20px
  left 45px
  right 45px

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
  transition background-color 0.2s ease-in-out
  &.active > .line
    left 0
    right 0
  &:hover
    background-color rgba(white, 0.5)
  &.cta
    background-color white
    color blue-charcoal
    padding 11px 22px 8px 22px
    border-radius 20px 
  .line
    position absolute
    height 1px
    left 50%
    right 50%
    bottom 0
    background-color white
    transition all 0.2s ease-in-out

</style>
