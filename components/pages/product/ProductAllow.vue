<template lang="pug">
.section.section-ProductAllow
  .title {{ title }}

  .allows
    .allow(v-for="allow in allows")
      .allow-svg(v-in-viewport.once,v-html="allow.icon")
      .allow-copy(v-in-viewport.once) {{ allow.copy }}
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
    allows: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/guide/includes/*'

.section-ProductAllow
  padding 20px

.allows
  display flex
  flex-grow 1
  max-width 1000px
  margin auto
  flex-direction row
  flex-wrap wrap
  padding 30px
  padding-bottom 0px
.allow
  width 50%
  display flex
  padding 30px 0
  align-items center
  for i in 1..4
    &:nth-child({i})
      .allow-svg
        inViewportBottom((0.1 * i), 0.5)
      .allow-copy
        inViewportBottom((0.1 * i + 0.2), 0.5)

.allow-svg
  width 100px
  height 100px
  > svg
    width inherit
    height inherit

.allow-copy
  flex-align center
  color white
  font-s6()
  margin 0 40px
  text-align left

.title
  color white

@media all and (min-width: 1px) and (max-width: 1000px)
  .allows
    padding 10px
  .section-ProductAllow > .title
    font-s1()
  .allow
    width 100%
    padding 10px
  .allow-copy
    margin 0 20px
</style>
