<template lang="pug">
.section.section-OrangeBlock
  .subsections
    .subsection.subsection-one
      .ss-title(v-in-viewport.once) {{ copys.paradigmTitle }}
      .ss-copy(v-in-viewport.once) {{ copys.paradigmCopy }}
    .subsection.subsection-two
      .ss-title(v-in-viewport.once) {{ copys.resilienceTitle }}
      .ss-copy(v-in-viewport.once) {{ copys.resilienceCopy }}
      .ss-title(v-in-viewport.once) {{ copys.movementTitle }}
      .ss-copy(v-in-viewport.once) {{ copys.movementCopy }}
</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
  props: {
    copys: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/guide/includes/*'

.section-OrangeBlock
  background-color fire-bush
  color white
  text-align left

.subsections
  display flex

.subsection-one
  .ss-title
    font-s6()
    padding 0 0 10px 0
    inViewportBottom(0.1, 0.5)
  .ss-copy
    font-h4()
    inViewportBottom(0.2, 0.5)

.subsection-two
  .ss-title
    font-h4()
    padding 0 0 10px 0
    &:nth-child(3)
      padding 20px 0 10px 0
    inViewportBottom(0.3, 0.5)
  .ss-copy
    font-s6()
    line-height 20px
    inViewportBottom(0.4, 0.5)
</style>
