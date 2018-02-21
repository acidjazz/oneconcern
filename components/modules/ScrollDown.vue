<template lang="pug">
.scroll-down(:class="{visible: visible}")
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
      if (window.scrollY >= 100 && this.visible === true) {
        this.visible = false
      }
      if (window.scrollY <= 60 && this.visible === false) {
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

.scroll-down
  position absolute
  bottom 30px
  left 50%
  text-align center
  font-size 20px
  z-index 20
  width 13px
  height 13px
  border-bottom 2px solid transparent
  border-right 2px solid transparent
  transform translate(-50%, 0%) rotate(45deg)
  animation scrolldown 4s ease-in-out infinite
  transition border 0.5s ease
  opacity 0
  &.visible
    border-bottom 2px solid white
    border-right 2px solid white

@keyframes scrolldown
  0%
    transform translate(0, -10px) rotate(45deg)
    opacity 0
  50%
    opacity 1
  100%
    transform translate(0, 10px) rotate(45deg)
    opacity 0
</style>
