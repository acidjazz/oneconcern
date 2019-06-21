<template lang="pug">
#BeforeAfter
  .before-after
    .ba-selections
      .ba-selection(
        v-in-viewport.once,
        @click="active = index",
        v-for="item, index in items",
        :class="{active: active === index }")
        .ba-selection-vector(v-html="item.vector")
        .ba-selection-title {{ item.title }}
    .ba-line(:class="`ba-line-${active}`")
    transition(name="fade",mode="out-in")
      .ba-content(
        :class="{'ba-content-jp': $store.state.i18n.locale === 'jp'}"
        v-for="item, index in items",
        :key="index",
        v-if="index === active")
        p(v-for="p in par(item.copy)") {{ p }}
</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
  props: {
    items: {
      type: Array,
      required: true,
    }
  },
  data () {
    return {
      active: 0,
    }
  },
  methods: {
    par (copy) {
      return copy.split("\n")
    },
  },
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/guide/includes/*'

#BeforeAfter
  background-color fire-bush
  background carrot-fire
  background-size 200% 200%
  padding 60px 0
  height 500px

.before-after
  width 700px
  margin auto

.ba-selections
  display flex
  justify-content space-around

.ba-selection
  cursor pointer
  for i in 1..3
    &:nth-child({i})
      inViewportBottom(i * 0.1)

.ba-line
  width 100px
  background-color black
  height 1px
  inViewportWidth(0.3, 1, 0px, 100px)
  transition 1s ease
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
  transition color 0.5s ease 0s

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
    transition stroke 0.5s ease 0.2s

.ba-selection:nth-child(2) .ba-selection-vector > svg
  fill white
  transition fill 0.5s ease 0.2s

.ba-selection.active
  .ba-selection-title
    color midnight-express
  .ba-selection-vector > svg
    stroke midnight-express

.ba-selection:nth-child(2).active
  .ba-selection-vector > svg
    fill midnight-express

.ba-content
  width 700px
  color white
  font-s1()
  &.ba-content-jp
    font-size 20px

@media all and (min-width: 1px) and (max-width: 1000px)
  #BeforeAfter
    .before-after
      width auto
    .ba-line
      display none
    .ba-selection-vector
      width 60px
      height 60px
    .ba-selection-title
      border-bottom 1px solid transparent
    .ba-selection.active
      .ba-selection-title
        border-bottom 1px solid midnight-express
    .ba-content
      width auto
      font-s2()
      padding 20px



</style>

