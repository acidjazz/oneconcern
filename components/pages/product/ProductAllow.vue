<template lang="pug">
.section.section-ProductAllow
  .title One Concern's product allow you to:

  .allows
    .allow(v-for="allow in allows")
      .allow-svg(v-html="allow.icon")
      .allow-copy {{ allow.copy }}
</template>

<script>
export default {
  props: {
    allows: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/guide/includes/*'

.allows
  display flex
  flex-grow 1
  max-width 1000px
  margin auto
  flex-direction row
  flex-wrap wrap
  padding-top 30px
.allow
  width 50%
  display flex
  padding 30px 0
  align-items center

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
  .section-ProductAllow > .title
    font-s1()
  .allow
    width 100%
    padding 10px
  .allow-copy
    margin 0 20px



</style>
