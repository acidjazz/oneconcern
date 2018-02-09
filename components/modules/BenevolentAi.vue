<template lang="pug">
#BenevolentAi
  .ai-title  {{ copy.title }}
  .ai-description {{ copy.description }}
  .ai-carousel
    .ai-labels
      .ai-label(v-for="item in carousel") {{ item.title }}
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
}
</script>

<style lang="stylus">
@import '../../assets/stylus/guide/*'
#BenevolentAi
  width 600px
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
    justify-content center
  .ai-label
    font-s2()
    text-transform uppercase
    width 100px
</style>
