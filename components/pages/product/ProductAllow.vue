<template lang="pug">
.section.section-ProductAllow
  .title(v-in-viewport.once) {{ title }}
  .subtitle(v-in-viewport.once) {{ subtitle }}

  .allow-icons(v-in-viewport.once)
    .allow-icon(
      v-for="allow, index in allows"
      @click="active = index"
      :class="{'allow-icon-active': index === active}"
      v-html="allow.icon")

  .allow(v-in-viewport.once)
    transition(name="fil")
      .allow-body(v-for="allow, index in allows",:key="index",v-if="index === active")
        .allow-title(v-in-viewport.once) {{ allow.title }}
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
    subtitle: {
      type: String,
      required: true,
    },
    allows: {
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

.section-ProductAllow
  padding 20px
  margin 60px 0

  .title
    color white
    margin 0 0 20px 0
    inViewportBottom(0.1, 0.5)
  .subtitle
    max-width 700px
    margin auto
    color white
    font-s6()
    inViewportBottom(0.2, 0.5)

.allow-icons
  display flex
  flex-direction row
  justify-content center
  align-items center
  max-width 1000px
  border-bottom 3px solid transparent
  margin 60px auto 20px auto
  inViewportBottom(0.3, 0.5)

.allow-icon
  width 60px
  height 60px
  margin 0 40px
  cursor pointer
  border-bottom 3px solid transparent
  transition all 0.3s ease-in
  padding-bottom 20px
  &:hover
    svg fill not-white
  svg
    fill white

.allow-icon-active
  border-bottom 3px solid white
  svg
    fill fire-bush

.allow
  position relative
  height 140px
  color white
  max-width 600px
  margin auto
  text-align left
  inViewportBottom(0.4, 0.5)
.allow-body
  min-height 140px
.allow-title
  color fire-bush
  font-s7()
  margin 20px 0
.allow-copy
  font-s6()

.allow-body
  height 140px
  position absolute

@media all and (min-width: 1px) and (max-width: 1000px)
  .allow-icons
    max-width auto
    margin 60px auto 10px auto
  .allow-icon
    margin 0 20px

/*

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
  width 25%
  display flex
  padding 30px 0
  flex-direction column
  align-items center
  for i in 1..4
    &:nth-child({i})
      .allow-svg
        inViewportBottom((0.1 * i), 0.5)
      .allow-copy
        inViewportBottom((0.1 * i + 0.2), 0.5)

.allow .allow-svg
  margin-bottom 20px
.allow .allow-svg svg
  fill white
  width 60px
  height 60px


.allow-copy
  flex-align center
  color white
  font-s6()
  margin 0 20px
  text-align center


  .allows
    padding 10px
  .section-ProductAllow > .title
    font-s1()
  .allow
    width 100%
    padding 10px
  .allow-svg
    width 60px
    height 60px
    > svg
      width inherit !important
      height inherit !important
  .allow-copy
    margin 0 20px
*/
</style>
