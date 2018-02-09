<template lang="pug">
#BenevolentAi
  .ai-title  {{ copy.title }}
  .ai-description {{ copy.description }}
  .ai-carousel
    .ai-labels
      .ai-label(
        v-for="item, index in carousel",
        @click="active = index",
        :class="{active: index === active}") {{ item.title }}
    .ai-line
      .ai-cursor(:class="`active-${active}`")
    .ai-body(
      v-for="item, index in carousel"
      v-if="index === active") {{ item.description }}
</template>

<script>
export default {
  props: {
    copy: {
      type: Object,
    },
    carousel: {
      type: Array,
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
@import '../../assets/stylus/guide/*'
#BenevolentAi
  width 630px
  position absolute
  top 50%
  transform translateY(-50%)
  left 50%
  margin-left -300px
  color white
  text-align center
.ai-title
  text-align center
  color fire-bush
  font-h4()
  padding 0 0 30px 0
.ai-description
  font-s2()
.ai-carousel
  padding 30px 0 0 0
.ai-labels
  display flex
  align-items center
  justify-content space-between
.ai-label
  font-s5()
  cursor pointer
  text-transform uppercase
  width 100px
  transition color .2s ease
  &:hover:not(.active)
    color rgba(fire-bush, 0.6)
  &.active
    color fire-bush

.ai-line
  border-bottom 1px solid fire-bush
  margin 10px 0 20px 0
.ai-cursor
  width 1px
  height 12px
  background-color fire-bush
  transition transform 1s ease
  &.active-0
    transform translate(50px, 0)
  &.active-1
    transform translate(225px, 0)
  &.active-2
    transform translate(400px, 0)
  &.active-3
    transform translate(575px, 0)
.ai-body
  font-s2()

</style>
