<template lang="pug">
#Carousel(tabindex="1",@keyup.down="next",@keyup.up="prev")
  transition(name="carousel")
    .carousel(
      v-for="carousel, cindex in data",
      :key="cindex",
      v-if="cindex === index")
      img.carousel-background(
        :src="carousel.image",
        :style="`background-image: url(${carousel.lowres})`")
      .carousel-gradient
      .carousel-copy
        .carousel-title {{ carousel.title }}
        .carousel-description {{ carousel.description }}
        .carousel-cta
          CtaButton(:link="`${$store.state.i18n.locale}/${carousel.cta.link}`",:name="carousel.cta.name",theme="orange-border")
  .carousel-dots
    .carousel-dot(
      @click="dot(cindex)",
      v-for="carousel, cindex in data"
      :class="{filled: cindex === index}")
      .carousel-dot-inner
</template>
<script>
import CtaButton from '~/components/buttons/CtaButton.vue'
export default {
  components: { CtaButton },
  props: {
    data: {
      required: true,
      type: Array,
    }
  },
  methods: {
    dot (index) {
      this.index = index
      clearInterval(this.timer)
    },
    next () {
      if (this.scrolling) return true
      this.index = (this.index === this.data.length - 1) ? 0 : this.index+1
      this.pause()
    },
    prev () {
      if (this.scrolling) return true
      this.index = (this.index === 0) ? this.data.length-1 : this.index-1
      this.pause()
    },
    pause () {
      clearInterval(this.timer)
      this.scrolling = true
      setTimeout(() => this.scrolling = false, 2000)
    },

    wheel (event) {
      clearInterval(this.timer)
      if (event.deltaY > 0) {
        this.next()
      } else {
        this.prev()
      }
      event.preventDefault()
      return false
    },
    swipe (event) {
      clearInterval(this.timer)
      if (event.direction === 2 || event.direction === 8)
        return this.next()
      if (event.direction === 4 || event.direction === 16)
        return this.prev()
    },
  },
  created () {

    this.timer = setInterval(() => {
      (this.index === this.data.length - 1) ? this.index = 0 : this.index++
    }, this.interval*1000)
  },

  mounted () {

    if (process.browser && window.Hammer) {
      this.element = document.getElementById('Carousel')
      this.element.addEventListener('wheel', this.wheel)
      this.hammer = new window.Hammer.Manager(this.element)
      this.hammer.add(new window.Hammer.Swipe())
      this.hammer.on('swipe', this.swipe)
    }
  },
  destroyed () {
    this.timer = false
    if (process.browser && this.element !== false && this.element !== null) {
      this.element.removeEventListener('wheel', this.wheel)
      if (this.hammer) {
        this.hammer.off('swipe', this.swipe)
      }
    }
  },
  data () {
    return {
      scrolling: false,
      index: 0,
      timer: false,
      interval: 6,
      element: false,
      hammer: false,
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/guide/includes/*'

#Carousel
  width 100vw
  height 100vh
  overflow hidden
  position fixed

.carousel
  width 100vw
  height 100vh
  overflow hidden

.carousel-gradient
  width 100vw
  height 100vh
  position absolute
  background linear-gradient(90deg, rgba(black, 0.5), transparent)
  tplr()

.carousel-background
  width 100vw
  height 100vh
  background-repeat no-repeat
  background-size cover
  background-position 50% 50%
  object-fit cover

.carousel-copy
  position absolute
  bottom 80px
  left 45px
  color white
  width 480px

.carousel-title
  font-h1()
  margin-bottom 20px
.carousel-description
  font-h2()
  margin-bottom 25px
.carousel-dots
  position absolute
  top 50%
  transform translateY(-50%)
  right 45px
.carousel-dot
  backface-visibility hidden
  transform translate3d(0,0,0)
  z-index 1
  cursor pointer
  width 15px
  height 15px
  border 2px solid white
  border-radius 15px
  margin-bottom 15px
  overflow hidden
  .carousel-dot-inner
    background-color white
    width 100%
    height 100%
    transform translate(0px, 15px)
    transition transform 1.6s ease
  &:hover
    background-color rgba(white, 0.2)
  &.filled .carousel-dot-inner
    transform translate(0px, 0.1px)
  &:last-child
    margin-bottom 0

.carousel-enter-active
  transition all 4s ease 0s
  > .carousel-background
    transition all 4s ease 0s
  > .carousel-copy > .carousel-title
    transition all 1s ease 0.8s
  > .carousel-copy > .carousel-description
    transition all 1s ease 0.9s
  > .carousel-copy > .carousel-cta
    transition all 1s ease 1s

.carousel-leave-active
  transition all 2s ease 0s
  > .carousel-background
    transition all 0.6s linear 0s
  > .carousel-copy > .carousel-title
    transition opacity 0.6s ease 0s
  > .carousel-copy > .carousel-description
    transition opacity 0.6s ease 0.2s
  > .carousel-copy > .carousel-cta
    transition opacity 0.6s ease 0.4s

.carousel-enter
  opacity 0
  > .carousel-background
    transform scale(1.2)
  > .carousel-copy > .carousel-title,
  > .carousel-copy > .carousel-description,
  > .carousel-copy > .carousel-cta,
    transform translate(-60px, 0)
    opacity 0

.carousel-leave-to
  > .carousel-background
    opacity 0
  > .carousel-copy > .carousel-title,
  > .carousel-copy > .carousel-description,
  > .carousel-copy > .carousel-cta
    opacity 0

.carousel-enter, .carousel-leave, .carousel-leave-to
  position absolute

@media all and (min-width: 1px) and (max-width: 1000px)
  .carousel-copy
    width auto
    left 20px
    right 60px
    .carousel-title
      font-h4()
      margin-bottom 10px
    .carousel-description
      font-s2()

  .carousel-dots
    right 20px

  .carousel-enter
    > .carousel-background
      transform translate(0, 0)
      opacity 0
  .carousel-leave-to
    > .carousel-background
      transform translate(0, 0)
</style>


