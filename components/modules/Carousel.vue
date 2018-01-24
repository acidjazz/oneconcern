<template lang="pug">
#Carousel
  transition(name="carousel")
    .carousel(
      v-for="carousel, cindex in data",
      :key="cindex",
      v-if="cindex === index")
      .carousel-background(:style="`background-image: url(${carousel.image})`")
      .carousel-copy
        .carousel-title {{ carousel.title }}
        .carousel-description {{ carousel.description }}
        .carousel-cta
          CtaButton(:link="carousel.cta.link",:name="carousel.cta.name",theme="orange-border")
  .carousel-dots
    .carousel-dot(
      @click="dot(cindex)",
      v-for="carousel, cindex in data"
      :class="{filled: cindex === index}")
      .carousel-dot-inner
</template>
<script>
import CtaButton from '~/components/button/CtaButton.vue'
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
  },

  created () {
    this.timer = setInterval(() => { 
      (this.index === this.data.length - 1) ? this.index = 0 : this.index++ 
    }, this.interval*1000)
  },

  destroyed () {
    this.timer = false
  },

  data () {
    return {
      index: 0,
      timer: false,
      interval: 6,
    }
  },
}
</script>

<style lang="stylus">

@import '../../assets/stylus/guide/*'

#Carousel
  width 100vw
  height 100vh
  background-repeat no-repeat
  background-size cover

.carousel
  width 100vw
  height 100vh
  background-repeat no-repeat
  background-size cover
  overflow hidden

.carousel-background
  width 100vw
  height 100vh
  background-repeat no-repeat
  background-size cover

.carousel-copy
  position absolute
  bottom 80px
  left 45px
  color white
  width 600px

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
  cursor pointer
  width 15px
  height 15px
  border 2px solid white
  border-radius 50%
  margin-bottom 15px
  overflow hidden
  .carousel-dot-inner
    // border-radius 50%
    background-color white
    width 100%
    height 100%
    transform translate(0px, 15px)
    // transform scale(0)
    transition transform 1.6s ease
  &:hover
    background-color rgba(white, 0.2)
  &.filled .carousel-dot-inner
    transform translate(0px, 0px)
    //transform scale(1)
  &:last-child
    margin-bottom 0

.carousel-enter-active
  transition all 1.4s ease 0s
  > .carousel-background
    transition all 1.4s ease 0s
  > .carousel-copy > .carousel-title
    transition all 1s ease 0.8s
  > .carousel-copy > .carousel-description
    transition all 1s ease 0.9s
  > .carousel-copy > .carousel-cta
    transition all 1s ease 1s

.carousel-leave-active
  transition all 1.4s ease 0s
  > .carousel-background
    transition all 1.4s ease 0s
  > .carousel-copy > .carousel-title
    transition all 1s ease 0s
  > .carousel-copy > .carousel-description
    transition all 1s ease 0s
  > .carousel-copy > .carousel-cta
    transition all 1s ease 0s

.carousel-enter
  > .carousel-background
    transform translate(0, 100%)
  opacity 0
  > .carousel-copy > .carousel-title,
  > .carousel-copy > .carousel-description,
  > .carousel-copy > .carousel-cta,
    transform translate(-60px, 0)
    opacity 0

.carousel-leave-to
  > .carousel-background
    transform translate(0, -100%)
  > .carousel-copy > .carousel-title,
  > .carousel-copy > .carousel-description,
  > .carousel-copy > .carousel-cta,
    transform translate(-20px, 0)
    opacity 0

.carousel-enter, .carousel-leave, .carousel-leave-to
  position absolute

</style>


