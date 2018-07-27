<template lang="pug">
.section.section-OrangeBlock
  .subsections
    .subsection.subsection-one
      .ss-title(v-in-viewport.once) Shifting The Paradigm
      .ss-copy(v-in-viewport.once) We lead innovators to change the paradigm by going "all in" on an AI enabled resilience strategy that strengthens communities, protects people, places and assets, and rewards smarter infrastructure investments.
    .subsection.subsection-two
      .ss-title(v-in-viewport.once) Building Lasting Resilience
      .ss-copy(v-in-viewport.once) With One Concern, our clients take an integrated approach to building lasting resilience.  We integrate AI, machine learning, and deep learning with expertise ion natural science phenomena, emergency management, and our clients' own institutional knowledge.  By doing so, we enable clients to improve the robustness of their approach and the speed at which they're able to achieve success.
      .ss-title(v-in-viewport.once) Join the Movement
      .ss-copy(v-in-viewport.once) Together, we're leading the global resilience movement by taking a benevolent approach to technology and society.


</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
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
