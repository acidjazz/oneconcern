<template lang="pug">
#BeforeAfter
  .before-after
    .ba-selections
      .ba-selection(
        @click="active = index",
        v-for="item, index in items",
        :class="{active: active === index }")
        .ba-selection-vector(v-html="item.vector")
        .ba-selection-title {{ item.title }}
    .ba-line(:class="`ba-line-${active}`")
    .ba-content
      p(v-for="p in par(items[active].copy)") {{ p }}
</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
  props: {
    items: {
      type: Array,
    }
  },
  methods: {
    par (copy) {
      return copy.split("\n")
    },
  },
  data () {
    return {
      active: 0,
    }
  },
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/guide/*'

#BeforeAfter
  background-color fire-bush
  padding 60px 0

.before-after
  width 700px
  margin auto

.ba-selections
  display flex
  justify-content space-around

.ba-selection
  cursor pointer

.ba-line
  width 100px
  background-color black
  height 1px
  transition transform 1s ease
  &.ba-line-0
    transform translate(65px, 0)
  &.ba-line-1
    transform translate(300px, 0)
  &.ba-line-2
    transform translate(535px, 0)

.ba-selection-title
  text-align center
  font-h4()
  padding 10px 0
  color white

.ba-selection-vector
  width 80px
  height 80px
  > svg
    width inherit
    height inherit
    fill none
    stroke white
    stroke-width 2
    stroke-linejoin round
    stroke-miterlimit 10

.ba-selection:nth-child(2) .ba-selection-vector > svg
  fill white

.ba-selection.active
  .ba-selection-title
    color blue-charcoal
  .ba-selection-vector > svg
    stroke blue-charcoal

.ba-selection:nth-child(2).active
  .ba-selection-vector > svg
    fill blue-charcoal


// .st0{fill:none;stroke:#505050;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}
// .st0{fill:none;stroke:#505050;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}
</style>
 
