<template lang="pug">
#Carousel
  transition(name="carousel")
    .carousel(
      v-for="carousel, cindex in data",
      :key="cindex",
      v-if="cindex === index",
      :style="`background-image: url(${carousel.image})`")
      .carousel-copy
        .carousel-title {{ carousel.title }}
        .carousel-description {{ carousel.description }}
        router-link.carousel-cta(:to="carousel.cta.link") {{ carousel.cta.name }}

  .carousel-dots
    .carousel-dot(
      @click="index = cindex",
      v-for="carousel, cindex in data"
      :class="{filled: cindex === index}")
</template>
<script>
export default {
  props: {
    data: {
      required: true,
      type: Array,
    }
  },
  data () {
    return {
      index: 1,
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
.carousel-cta
  text-decoration none
  font-s2()
  display inline-block
  padding 10px 30px 6px 30px
  border-radius 20px
  border 3px solid fire-bush
  color fire-bush
  transition all 0.2s ease-in-out
  &:hover
    background-color fire-bush
    color white
    border 3px solid white


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
  transition background-color 0.2s ease
  &:hover
    background-color rgba(white, 0.5)
  &.filled
    background-color white
  &:last-child
    margin-bottom 0

.carousel-enter-active
  transition all 1.4s ease 0.1s
  > .carousel-copy > .carousel-title
    transition all 1s ease 0.3s
  > .carousel-copy > .carousel-description
    transition all 1s ease 0.35s
  > .carousel-copy > .carousel-cta
    transition all 1s ease 0.4s

.carousel-leave-active
  transition all 1.4s ease 0s
  > .carousel-copy > .carousel-title
    transition all 1s ease 0s
  > .carousel-copy > .carousel-description
    transition all 1s ease 0s
  > .carousel-copy > .carousel-cta
    transition all 1s ease 0s

.carousel-enter
  transform scale(1.1)
  opacity 0
  > .carousel-copy > .carousel-title,
  > .carousel-copy > .carousel-description,
  > .carousel-copy > .carousel-cta,
    transform translate(-60px, 0)
    opacity 0

.carousel-leave-to
  transform scale(1.2)
  opacity 0
  > .carousel-copy > .carousel-title,
  > .carousel-copy > .carousel-description,
  > .carousel-copy > .carousel-cta,
    transform translate(-20px, 0)
    opacity 0

.carousel-enter, .carousel-leave, .carousel-leave-to
  position absolute



</style>


