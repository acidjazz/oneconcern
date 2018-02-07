<template lang="pug">
#HumanRace

  .title {{ title }}

  .labels
    .label(
      v-for="entry, index in copy",
      :class="{active: index === active}"
      @click="active = index") {{ entry.title }}
  .body
    .image
      img(:src="copy[active].image")
    .copy
      .subtitle {{ copy[active].title }}
      p {{ copy[active].body }}
</template>

<script>
export default {
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
  .labels
    padding 30px
    .label
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
      img
        width auto
    .copy
      width 240px
      text-align left
      .subtitle
        color fire-bush
      p
        font-s2()
</style>
