<template lang="pug">
.section.section-ProductAwards
  .title(v-in-viewport.once) {{ title }}

  .award-icons(v-in-viewport.once)
    .award-icon(
      v-for="award, index in awards"
      @click="active = index"
      :class="{'award-icon-active': index === active}"
      v-html="award.icon")

  .award(v-in-viewport.once)
    transition(name="fil")
      .award-body(v-for="award, index in awards",:key="index",v-if="index === active")
        .award-copy(v-in-viewport.once) {{ award.copy }}
</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
  props: {
    title: {
      type: String,
      required: true,
    },
    awards: {
      type: Array,
      required: true,
    }
  },
  data () {
    return {
      active: 0,
    }
  },
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/guide/includes/*'

.section-ProductAwards
  padding 60px 20px
  background-color white
  color midnight-express

  .title
    margin 0 0 20px 0
    inViewportBottom(0.1, 0.5)

.award-icons
  display flex
  flex-direction row
  justify-content center
  align-items center
  max-width 1000px
  border-bottom 3px solid transparent
  margin 60px auto 20px auto
  inViewportBottom(0.3, 0.5)

.award-icon
  width 120px
  height 120px
  margin 0 40px
  cursor pointer
  border-bottom 3px solid transparent
  transition all 0.3s ease-in
  padding-bottom 20px
  &:hover
    svg fill not-white
  svg
    width inherit
    height inherit

.award-icon-active
  border-bottom 3px solid midnight-express
  svg
    fill fire-bush
    path, g
      fill fire-bush

.award
  position relative
  height 140px
  max-width 700px
  margin auto
  text-align left
  inViewportBottom(0.4, 0.5)
.award-body
  min-height 140px
.award-copy
  margin-top 40px
  font-s7()

.award-body
  height 140px
  position absolute

@media all and (min-width: 1px) and (max-width: 1000px)
  .award-icons
    max-width auto
    margin 60px auto 10px auto
  .award-icon
    margin 0 10px
    width 100%
    height 100%
</style>
