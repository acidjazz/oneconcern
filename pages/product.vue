<template lang="pug">
#Product 
  .hero(:style="`background-image: url(${lowres})`")
    img.hero-background(:src="image")
    .hero-title {{ copy }}
  ScrollDown
  .quote
    .copy(v-in-viewport) {{ copys.quoteTop }}
  HumanRace(:title="copys.titleHumanRace",:copy="copys.HumanRace")
  FeaturedCaseStudy(:copy="copys.CaseStudy")
  DigitalFingerprints(:title="copys.fingerprintsTitle",:copy="copys.fingerprintsCopy")
  QuoteMonitor(
    :residential="copys.monitorResidential"
    :commercial="copys.monitorCommercial"
    :people="copys.monitorPeople")
  BeforeAfter(:items="copys.BeforeAfter")
  .demo-cta
    .cta
      //CtaButton(name="REQUEST A DEMO",theme="white",link="mailto:contact@oneconcern.com")
      CtaButton(name="REQUEST A DEMO",theme="white",:callback="demo")
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import inViewportDirective from 'vue-in-viewport-directive'
import HumanRace from '~/components/pages/product/HumanRace'
import FeaturedCaseStudy from '~/components/pages/product/FeaturedCaseStudy'
import DigitalFingerprints from '~/components/pages/product/DigitalFingerprints'
import QuoteMonitor from '~/components/pages/product/QuoteMonitor'
import BeforeAfter from '~/components/pages/product/BeforeAfter'
import ScrollDown from '~/components/modules/ScrollDown'
import CtaButton from '~/components/buttons/CtaButton'
const client = createClient()
export default {
  components: { 
    HumanRace,
    FeaturedCaseStudy,
    DigitalFingerprints,
    QuoteMonitor,
    BeforeAfter,
    CtaButton,
    ScrollDown,
  },
  directives: { 'in-viewport': inViewportDirective },
  async asyncData () {
    const hero = await client.getEntries({ 'content_type': 'hero', 'fields.page': 'product'})
    const text = await client.getEntries({ 'content_type': 'productCopy'})
    const HumanRaceEntries = await client.getEntries({ 'content_type': 'humanRace'})
    const BeforeAfterEntries = await client.getEntries({ 'content_type': 'beforeAfter', order: 'fields.order'})
    const CaseStudyEntry = await client.getEntries({ 'content_type': 'caseStudy'})
    const CaseStudyBlogEntry = await client.getEntry(CaseStudyEntry.items[0].fields.blog.sys.id)

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
    copys.CaseStudy = {
      title: CaseStudyEntry.items[0].fields.title,
      image: CaseStudyEntry.items[0].fields.image.fields.file.url,
      quote: CaseStudyEntry.items[0].fields.quote,
      author: CaseStudyEntry.items[0].fields.author,
      blog: {
        title: CaseStudyBlogEntry.fields.title,
        id: CaseStudyBlogEntry.sys.id,
      }
    }
    return {
      lowres: hero.items[0].fields.lowres.fields.file.url,
      image: hero.items[0].fields.image.fields.file.url,
      copy: hero.items[0].fields.copy,
      copys: copys,
    }
  },
  methods: {
    demo () {
      this.$store.commit('demo', true)
    },
  },
}
</script>


<style lang="stylus">
@import '../assets/stylus/guide/includes/*'
.quote
  background-color fire-bush
  padding 60px 0
  color white
  .copy
    font-h4()
    text-align center
    width 700px
    margin auto
    inViewportBottom(0, 0.5)
.demo-cta
  background-color blue-charcoal
  padding 60px 0
  .cta
    text-align center
@media all and (min-width: 1px) and (max-width: 1000px)
  .quote > .copy
    width auto
    padding 0 20px
    font-s2()
</style>
