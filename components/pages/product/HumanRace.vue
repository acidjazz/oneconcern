<template lang="pug">
#HumanRace

  .title(v-in-viewport) {{ title }}

  .labels
    .label(
      v-in-viewport
      v-for="entry, index in copy",
      :class="{active: index === active}"
      @click="active = index") {{ entry.title }}
  .body
    .image(v-in-viewport)
      img(:src="copy[active].image")
    .copy
      .subtitle(v-in-viewport) {{ copy[active].title }}
      p(v-in-viewport) {{ copy[active].body }}
</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
  props: {
    title: {
      type: String,
    },
    copy: {
      type: Array,
    }
  },

  data () {
    return {
      active: 0,
    }
  }
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/guide/*'
#HumanRace
  padding 60px 0
  background-color blue-charcoal
  text-align center
  color white
  .title
    font-h4()
    inViewportBottom()
  .labels
    padding 30px
    .label
      inViewportBottom(0.1)
      font-s1()
      display inline-block
      cursor pointer
      width 200px
      &:nth-child(1)
        border-right 1px solid white
        padding 0 10px 0 0
      &:nth-child(2)
        padding 0 0 0 10px
      &.active
        color fire-bush
  .body
    width 900px
    margin auto
    display flex
    .image
      inViewportBottom(0.2)
      img
        width auto
    .copy
      width 240px
      text-align left
      .subtitle
        color fire-bush
        inViewportBottom(0.3)
      p
        font-s2()
        inViewportBottom(0.4)

@media all and (min-width: 1px) and (max-width: 1000px)
  #HumanRace
    .labels
      padding 20px 0
      .label
        font-s2()
        width 40%

    .body
      width auto
      .image
        display none
        width 50%
        > img
          width 100%
      .copy
        width auto
        padding 20px

</style>
