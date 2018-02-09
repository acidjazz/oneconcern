<template lang="pug">
.perks-benefits
  .title Perks and Benefits
  .perks-benefits-list
    .perks-benefits-item(v-for="perk in perks",v-in-viewport)
      .perks-benefits-inner
        .perks-benefits-icon(:style="`background-image: url(${perk.icon})`")
        .perks-benefits-title {{ perk.title }}
        .perks-benefits-copy {{ perk.copy }}
</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
  props: {
    perks: {
      type: Array,
    },
  }
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/guide/includes/*'

.perks-benefits
  background-color slate
  padding 60px 0
  text-align center
  color white

.perks-benefits-list
  padding 30px 0 0 0
  display flex
  flex-wrap wrap
  max-width 1000px
  margin auto
  flex-direction row

.perks-benefits-item
  width 33.33%
  for i in 1..3
    &:nth-child(3n+{i})
      inViewportBottom(i*.2)

.perks-benefits-inner
  padding 20px 40px

.perks-benefits-icon
  width 70px
  height 50px
  margin 0 auto 10px auto
  background-size contain
  background-repeat no-repeat
  background-position 50% 50%

.perks-benefits-title
  font-s1()
  padding 0 0 6px 0
.perks-benefits-copy
  font-s2()
  line-height 20px
  color not-white

@media all and (min-width: 1px) and (max-width: 1000px)
  .perks-benefits-item
    width 100%

</style>
