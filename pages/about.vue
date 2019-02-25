<template lang="pug">
#Who.page
  .hero(:style="`background-image: url(${lowres})`")
    img.hero-background(:src="image")
    .hero-title {{ copy }}

  ScrollDown
  .section.section-story(v-if="story")

    .title(v-in-viewport.once) {{ copys.ourStoryTitle }}
    .subsections
      .subsection(v-in-viewport.once)
        video(controls,:poster="story.poster")
          source(:src="story.video",type="video/mp4")
      .subsection(v-in-viewport.once)
        p(v-for="block in storyCopy") {{ block }}

  .section.section-team
    .title(v-in-viewport.once) {{ copys.ourTeamTitle }}

    OurTeam(:team="team",v-if="team")
    .title(v-in-viewport.once) {{ copys.knowTeamTitle }}
    CtaButton(
      v-in-viewport.once
      :name="copys.linkedInButton",
      theme="white-border",
      link="https://www.linkedin.com/search/results/people/?facetCurrentCompany=%5B%226441806%22%5D")

  ViewOpenings(:copys="copys")
</template>

<script>
import { createClient } from '@/plugins/contentful.js'
import inViewportDirective from 'vue-in-viewport-directive'
import ViewOpenings from '@/components/modules/ViewOpenings'
import CtaButton from '@/components/buttons/CtaButton'
import ScrollDown from '@/components/modules/ScrollDown'
import OurTeam from '@/components/pages/about/OurTeam'
const client = createClient()
export default {

  components: { CtaButton, OurTeam, ViewOpenings, ScrollDown },
  directives: { 'in-viewport': inViewportDirective },
  async asyncData () {

    const copy = await client.getEntries({'content_type': 'aboutCopy'})
    const hero = await client.getEntries({'content_type': 'hero','fields.page': 'about'})
    const story = await client.getEntries({'content_type': 'aboutContent'})
    const members = await client.getEntries({ 'content_type': 'team', order: 'fields.order'})

    let copys = {}
    for (let entry of copy.items)
      copys[entry.fields.name] = entry.fields.copy

    let team = []
    for (let member of members.items) {
      team.push({
        image: member.fields.image.fields.file.url,
        linkedin: member.fields.linkedin,
        name: member.fields.name,
        position: member.fields.position,
        types: member.fields.type,
      })
    }

    return {
      image: hero.items[0].fields.image.fields.file.url,
      lowres: hero.items[0].fields.lowres.fields.file.url,
      copy: hero.items[0].fields.copy,
      story: {
        copy: story.items[0].fields.storyCopy,
        video: story.items[0].fields.storyVideo.fields.file.url,
        poster: story.items[0].fields.storyPoster.fields.file.url,
      },
      team: team,
      copys: copys,
    }
  },

  methods: {
    unique (value, index, self) {
      return self.indexOf(value) === index
    },
  },

  computed: {
    storyCopy () {
      return this.story.copy.split("\n")
    },

  },

  data () {
    return {
      filter: false,
    }
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

@media all and (min-width: 1px) and (max-width: 1000px)
  .subsections
    flex-direction column
    .subsection
      align-self flex-start
      width calc(100% - 40px)
      padding 20px
      margin-left 0px !important
</style>
