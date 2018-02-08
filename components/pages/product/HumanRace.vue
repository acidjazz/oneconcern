<template lang="pug">
#HumanRace

  .title(v-in-viewport) {{ title }}

  .labels
    .label(
      v-in-viewport
      v-for="entry, index in copy",
      :class="{active: index === active}"
      @click="active = index") {{ entry.title }}
    .content
      transition(name="humanrace")
        .body(
          v-for="entry, index in copy",
          v-if="index === active",
          :key="index")
          .image(
            v-in-viewport,
            :class="`image-${index}`")
            img(:src="entry.image")
          .copy
            .subtitle(v-in-viewport) {{ entry.title }}
            p(v-in-viewport) {{ entry.body }}
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
    font-c4()
    inViewportBottom()
  .labels
    padding 30px
    .label
      inViewportBottom(0.1)
      font-s2()
      display inline-block
      cursor pointer
      width 160px
      transition color 0.5s ease
      &:nth-child(1)
        border-right 1px solid white
        padding 0 10px 0 0
      &:nth-child(2)
        padding 0 0 0 10px
      &.active
        color fire-bush
  .content
    margin 30px auto 0 auto
    width 900px
    height 340px
    overflow hidden
    .body
      width 900px
      height 340px
      overflow hidden
      margin auto
      display flex
      .image
        inViewportBottom(0.2)
        width 470px
        height 340px
        &.image-0
          img
            width 470px
        &.image-1
          img
            width 320px
            margin-right 30px
            float right
      .copy
        width 300px
        text-align left
        .subtitle
          color fire-bush
          inViewportBottom(0.3)
          font-s6b()
        p
          font-s6()
          inViewportBottom(0.4)

.humanrace-enter-active
  transition 0.4s ease 0.4s

.humanrace-leave-active
  transition 0.4s ease 0s

.humanrace-enter, .humanrace-leave-to
  opacity 0

.humanrace-leave, .humanrace-enter-to
  opacity 1


@media all and (min-width: 1px) and (max-width: 1000px)
  #HumanRace
    .labels
      padding 20px 0
      .label
        font-s2()
        width 40%
    .content
      width auto
      height auto
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
          .subtitle.below-viewport,
          p.below-viewport
            opacity 1
            transform translate(0, 0)

</style>
