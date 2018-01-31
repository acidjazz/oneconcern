<template lang="pug">
#Careers.page
  .hero(:style="`background-image: url(${image})`")
    .hero-gradient
    .hero-title  {{ copy }}
    .hero-cta
      CtaButton(
        link="https://jobs.lever.co/oneconcern",
        name="SEE OPPORTUNITIES",
        theme="orange-border")

  .careers-gallery
    .careers-gallery-inner
      .careers-block.is-half
        .careers-copy.careers-copy-1(v-in-viewport)
          .title We strive to create an environment where employees can thrive and grow professionally and personally. 
      .careers-block.is-half
        .careers-image.careers-image-1(v-in-viewport)
      .careers-block.is-full
        .careers-image.careers-image-2(v-in-viewport)
        .careers-image.careers-image-3(v-in-viewport)
        .careers-image.careers-image-4(v-in-viewport)
        .careers-image.careers-image-5(v-in-viewport)
      .careers-block.is-half
        .careers-image.careers-image-6(v-in-viewport)
        .careers-image.careers-image-7(v-in-viewport)
      .careers-block.is-half.is-end
        .careers-copy.careers-copy-2(v-in-viewport)
          .title At the end of every day, we feel like we are doing something significant to make the world a better place.
          .copy Our amazingly talented team is working to build and scale a global AI disaster intelligence platform to save lives. We work on complex issues of building highly available disaster resilient cloud infrastructure, creating a real-time spatio-temporal big data pipeline, scaling mapping systems and combining traditional hazard models with machine learning to provide high-resolution pre and post-disaster insights.

  PerksBenefits(:perks="perks",v-if="perks")

</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import inViewportDirective from 'vue-in-viewport-directive'
import PerksBenefits from '~/components/pages/careers/PerksBenefits'
import CtaButton from '~/components/buttons/CtaButton'
const client = createClient()
export default {
  components: { PerksBenefits, CtaButton },
  directives: { 'in-viewport': inViewportDirective },
  async asyncData () {

    const hero = await client.getEntries({'content_type': 'hero','fields.page': 'careers'})
    const perksBenefits = await client.getEntries({'content_type': 'perksBenefits'})

    let perks = []

    for (let perk of perksBenefits.items) {
      perks.push({
        icon: perk.fields.icon.fields.file.url,
        title: perk.fields.title,
        copy: perk.fields.copy,
      })
    }

    return {
      image: hero.items[0].fields.image.fields.file.url,
      copy: hero.items[0].fields.copy,
      perks: perks,
    }

  },
}
</script>

<style lang="stylus">

@import '../assets/stylus/guide/*'

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
  inViewport(0.2)
.careers-image-5
  inViewport(0.4)
.careers-image-4
  inViewport(0.6)
.careers-image-3
  inViewport(0.8)
.careers-image-2
  inViewport(1)
.careers-image-7
  inViewport(1.2)
.careers-image-6
  inViewport(1.4)

.careers-image
  background-size cover
  background-position 50% 50%
  margin-top 40px
  margin-right 40px
  &.careers-image-1
    background-image url(/careers/1.jpg)
    width 540px
    height 225px
  &.careers-image-2
    background-image url(/careers/2.jpg)
    width 150px
    height 113px
    align-self flex-end
  &.careers-image-3
    background-image url(/careers/3.jpg)
    width 300px
    height 220px
  &.careers-image-4
    background-image url(/careers/4.jpg)
    width 250px
    height 175px
  &.careers-image-5
    background-image url(/careers/5.jpg)
    width 150px
    height 107px
  &.careers-image-6
    background-image url(/careers/6.jpg)
    width 210px
    height 313px
  &.careers-image-7
    background-image url(/careers/7.jpg)
    width 190px
    height 130px
</style>
