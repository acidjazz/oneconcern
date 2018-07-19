<template lang="pug">
.careers-gallery
  .careers-gallery-inner
    .careers-block.is-half
      .careers-copy.careers-copy-1(v-in-viewport.once)
        .title We strive to create an environment where employees can thrive and grow professionally and personally. 
    .careers-block.is-half
      .careers-image.careers-image-1(v-in-viewport.once,:style="`background-image: url(${images[1]})`")
    .careers-block.is-full
      .careers-image.careers-image-2(v-in-viewport.once,:style="`background-image: url(${images[2]})`")
      .careers-image.careers-image-3(v-in-viewport.once,:style="`background-image: url(${images[3]})`")
      .careers-image.careers-image-4(v-in-viewport.once,:style="`background-image: url(${images[4]})`")
      .careers-image.careers-image-5(v-in-viewport.once,:style="`background-image: url(${images[5]})`")
    .careers-block.is-half
      .careers-image.careers-image-6(v-in-viewport.once,:style="`background-image: url(${images[6]})`")
      .careers-image.careers-image-7(v-in-viewport.once,:style="`background-image: url(${images[7]})`")
    .careers-block.is-half.is-end
      .careers-copy.careers-copy-2(v-in-viewport.once)
        .title At the end of every day, we feel like we are doing something significant to make the world a better place.
        .copy We’re building a global disaster-intelligence platform with one concern in mind: saving lives. We’re using AI and machine learning to (1) create a robust, disaster-resilient cloud infrastructure, (2) create a real-time big data pipeline to inform disaster response and modeling, and (3) combine traditional hazard models with machine learning to provide clear pre-disaster insights, while capturing post-disaster data to continuously improve response and recovery.
</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  props: { 
    images: {
      type: Array
    }
  },
  directives: { 'in-viewport': inViewportDirective },
}
</script>

<style lang="stylus">

@import '../../../assets/stylus/guide/includes/*'

.careers-gallery
  background-color not-white
  padding 30px 60px 60px 60px

.careers-gallery-inner
  max-width 1000px
  margin auto
  display flex
  justify-content center
  flex-direction row
  flex-wrap wrap
  padding-left 40px

.careers-block
  display flex
  justify-content flex-start
  flex none
  &.is-half
    width 50%
  &.is-full
    width 100%
  &.is-end
    width calc(50% - 40px)
    justify-content flex-end
    margin-right 40px

.careers-copy
  &.careers-copy-1
    align-self center
    width 340px
  &.careers-copy-2
    justify-self flex-end
    width 420px
  .title
    font-h4()
    font-size 30px
  .copy
    font-s2()
    padding 20px 0 0 0

.careers-copy-1
  inViewportLeft(0)
.careers-copy-2
  inViewportRight(1)
.careers-image-1
  inViewport(0.1)
.careers-image-5
  inViewport(0.2)
.careers-image-4
  inViewport(0.3)
.careers-image-3
  inViewport(0.4)
.careers-image-2
  inViewport(0.5)
.careers-image-7
  inViewport(0.6)
.careers-image-6
  inViewport(0.7)

.careers-image
  background-size cover
  background-position 50% 50%
  margin-top 40px
  margin-right 40px
  &.careers-image-1
    width 540px
    height 225px
  &.careers-image-2
    width 150px
    height 113px
    align-self flex-end
  &.careers-image-3
    width 300px
    height 220px
  &.careers-image-4
    width 250px
    height 175px
  &.careers-image-5
    width 150px
    height 107px
  &.careers-image-6
    width 210px
    height 313px
  &.careers-image-7
    width 190px
    height 130px

@media all and (min-width: 1px) and (max-width: 1000px)
  .careers-gallery
    padding 60px 20px 

  .careers-block
    flex-direction column
    &.is-half
      width 100%

  .careers-copy
    .title
      font-h4()
    &.careers-copy-1
      width auto
    &.careers-copy-2
      width auto
      padding 20px 0 0 0

  .careers-copy-1
    inViewpor(0)
  .careers-copy-2
    inViewport(0)


  .careers-image
    align-self center !important
    width 95% !important
    height 50vw !important

</style>
