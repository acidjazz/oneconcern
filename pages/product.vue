<template lang="pug">
#Product
  .hero(:style="`background-image: url(${lowres})`")
    img.hero-background(:src="image")
    .hero-title {{ copy }}
  ScrollDown

  UserStories(v-if="stories.length > 0",:stories="stories",:title="titles[1]")
  ProductAllow(:allows="allows",:title="titles[2]")
  SeismicFlood(:data="seismicFlood",:copy="seismicFloodCopy")
  OrangeBlock(:copys="copys")

  //.quote
    .copy(v-in-viewport.once) {{ copys.quoteTop }}
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
      CtaButton(name="REQUEST A DEMO",theme="white",:callback="demo",v-in-viewport.once)
</template>

<script>
import { createClient } from '@/plugins/contentful.js'
import inViewportDirective from 'vue-in-viewport-directive'
import UserStories from '@/components/pages/product/UserStories'
import ProductAllow from '@/components/pages/product/ProductAllow'
import SeismicFlood from '@/components/pages/product/SeismicFlood'
import OrangeBlock from '@/components/pages/product/OrangeBlock'
import HumanRace from '@/components/pages/product/HumanRace'
import FeaturedCaseStudy from '@/components/pages/product/FeaturedCaseStudy'
import DigitalFingerprints from '@/components/pages/product/DigitalFingerprints'
import QuoteMonitor from '@/components/pages/product/QuoteMonitor'
import BeforeAfter from '@/components/pages/product/BeforeAfter'
import ScrollDown from '@/components/modules/ScrollDown'
import CtaButton from '@/components/buttons/CtaButton'
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
    UserStories,
    ProductAllow,
    SeismicFlood,
    OrangeBlock,
  },
  directives: { 'in-viewport': inViewportDirective },
  async asyncData () {
    const hero = await client.getEntries({ 'content_type': 'hero', 'fields.page': 'product'})
    const story = await client.getEntries({'content_type': 'productVideo'})
    const text = await client.getEntries({ 'content_type': 'productCopy'})
    const HumanRaceEntries = await client.getEntries({ 'content_type': 'humanRace'})
    const BeforeAfterEntries = await client.getEntries({ 'content_type': 'beforeAfter', order: 'fields.order'})
    const CaseStudyEntry = await client.getEntries({ 'content_type': 'caseStudy'})
    const CaseStudyBlogEntry = await client.getEntry(CaseStudyEntry.items[0].fields.blog.sys.id)

    const userStory = await client.getEntries({'content_type': 'userStory', order: 'fields.order'})
    const productAllow = await client.getEntries({'content_type': 'productAllow', order: 'fields.order'})
    const seismicFlood = await client.getEntries({'content_type': 'seismicFlood'})
    const productTitle = await client.getEntries({'content_type': 'productTitle'})

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

    let stories = []
    for (let entry of userStory.items) {
      stories.push({
        quote: entry.fields.quote,
        author: entry.fields.author,
        title: entry.fields.title,
        youtubeId: entry.fields.youtubeId,
        thumbnail: entry.fields.thumbnail.fields.file.url,
      })
    }

    let titles = {}
    for (let entry of productTitle.items) {
      titles[entry.fields.num] = entry.fields.title
    }

    let allows = []
    for (let entry of productAllow.items) {
      allows.push({
        icon: entry.fields.icon,
        copy: entry.fields.copy,
      })
    }

    return {
      lowres: hero.items[0].fields.lowres.fields.file.url,
      image: hero.items[0].fields.image.fields.file.url,
      copy: hero.items[0].fields.copy,
      story: {
        copy: story.items[0].fields.storyCopy,
        video: story.items[0].fields.storyVideo.fields.file.url,
        poster: story.items[0].fields.storyPoster.fields.file.url,
      },
      stories: stories,
      allows: allows,
      copys: copys,
      seismicFlood: seismicFlood,
      seismicFloodCopy: {
        buttonFlood: copys.buttonFlood,
        buttonSeismic: copys.buttonSeismic,
      },
      titles: titles,
    }
  },
  methods: {
    demo () {
      this.$store.commit('demo', true)
    },
  },

  computed: {
    storyCopy () {
      return this.story.copy.split("\n")
    },
  },
}
</script>


<style lang="stylus">

@import '../assets/stylus/guide/includes/*'

.subsections
  display flex
  flex-direction row
  align-items center
  justify-content center
  max-width 1000px
  margin auto
  .subsection
    align-self flex-start
    width 50%
    font-s2()
    line-height 18px
    p:not(:last-child)
      margin 0 0 20px 0
    letter-spacing 1px
    &:first-child
      margin-right 30px
      inViewport(0.2)
    &:last-child
      margin-left 30px
      inViewport(0.4)

    video
      width 100%
      height 100%

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
    .cta-button
      inViewportBottom()

@media all and (min-width: 1px) and (max-width: 1000px)
  .quote > .copy
    width auto
    padding 0 20px
    font-s2()
  .subsections
    flex-direction column
    .subsection
      align-self flex-start
      width calc(100% - 40px)
      padding 20px
      margin-left 0px !important
</style>
