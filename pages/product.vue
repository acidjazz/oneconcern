<template lang="pug">
#Product 
  .hero(:style="`background-image: url(${lowres})`")
    img.hero-background(:src="image")
    .hero-title {{ copy }}
  .quote
    .copy {{ copys.quoteTop }}
  HumanRace(:title="copys.titleHumanRace",:copy="copys.HumanRace")
  FeaturedCaseStudy
  DigitalFingerprints(:title="copys.fingerprintsTitle",:copy="copys.fingerprintsCopy")
  QuoteMonitor(
    :residential="copys.monitorResidential"
    :commercial="copys.monitorCommercial"
    :people="copys.monitorPeople")
  BeforeAfter(:items="copys.BeforeAfter")
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import HumanRace from '~/components/pages/product/HumanRace'
import FeaturedCaseStudy from '~/components/pages/product/FeaturedCaseStudy'
import DigitalFingerprints from '~/components/pages/product/DigitalFingerprints'
import QuoteMonitor from '~/components/pages/product/QuoteMonitor'
import BeforeAfter from '~/components/pages/product/BeforeAfter'
const client = createClient()
export default {
  components: { 
    HumanRace,
    FeaturedCaseStudy,
    DigitalFingerprints,
    QuoteMonitor,
    BeforeAfter
  },

  async asyncData () {
    const hero = await client.getEntries({ 'content_type': 'hero', 'fields.page': 'product'})
    const text = await client.getEntries({ 'content_type': 'productCopy'})
    const HumanRaceEntries = await client.getEntries({ 'content_type': 'humanRace'})
    const BeforeAfterEntries = await client.getEntries({ 'content_type': 'beforeAfter', order: 'fields.order'})

    let copys = {}
    for (let entry of text.items) {
      copys[entry.fields.name] = entry.fields.copy
    }
    copys.HumanRace = []
    for (let entry of HumanRaceEntries.items) {
      copys.HumanRace.push({
        title: entry.fields.title,
        image: entry.fields.image.fields.file.url,
        body: entry.fields.body,
      })
    }
    copys.BeforeAfter = []
    for (let entry of BeforeAfterEntries.items) {
      copys.BeforeAfter.push({
        title: entry.fields.title,
        vector: entry.fields.vector,
        copy: entry.fields.copy,
      })
    }
    return {
      lowres: hero.items[0].fields.lowres.fields.file.url,
      image: hero.items[0].fields.image.fields.file.url,
      copy: hero.items[0].fields.copy,
      copys: copys,
    }
  }
}
</script>


<style lang="stylus">
@import '../assets/stylus/guide/*'
.quote
  background-color fire-bush
  padding 60px 0
  color white
  .copy
    text-align center
    width 700px
    margin auto
</style>
