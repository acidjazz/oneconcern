<template lang="pug">
.scrolldown(:class="{visible: visible}")
  .scrolldown-chevron
  .scrolldown-chevron
  .scrolldown-chevron
</template>

<script>
export default {
  created () {
    if (process.browser) {
      window.addEventListener('scroll', this.scroll)
    }
    setTimeout(() => { this.visible = true }, 1000)
  },
  destroyed () {
    if (process.browser) {
      window.removeEventListener('scroll', this.scroll)
    }
  },
  methods: {
    scroll (event) {
      if (window.scrollY >= 100 && this.visible == true) {
        this.visible = false
      }
      if (window.scrollY <= 60 && this.visible == false) {
        this.visible = true
      }
    },
  },

  data () {
    return {
      visible: false,
    }
  }
}
</script>


<style lang="stylus">
@import '../../assets/stylus/guide/includes/*'

.scrolldown
  position absolute
  bottom 60px
  left 50%
  margin-left -12px
  width 24px
  height 24px
  transition opacity 1s ease
  opacity 0
  &.visible
    opacity 1

.scrolldown-chevron
  position absolute
  width 28px
  height 8px
  opacity 0
  transform scale3d(0.5, 0.5, 0.5)
  animation move 6s ease-out infinite

.scrolldown-chevron:first-child
  animation: move 6s ease-out 2s infinite

.scrolldown-chevron:nth-child(2)
  animation: move 6s ease-out 4s infinite

.scrolldown-chevron:before,
.scrolldown-chevron:after 
  content ' '
  position absolute
  top 0
  height 100%
  width 51%
  background rgba(fire-bush, 0.8)

.scrolldown-chevron:before 
  left 0
  transform skew(0deg, 30deg)

.scrolldown-chevron:after
  right 0
  width 50%
  transform skew(0deg, -30deg)

@keyframes move
  25% 
    opacity 1
  33% 
    opacity 1
    transform translateY(30px)
  67%
    opacity 1
    transform translateY(40px)
  100% 
    opacity 0
    transform translateY(55px) scale3d(0.5, 0.5, 0.5)
</style>
