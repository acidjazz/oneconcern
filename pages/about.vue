<template lang="pug">
#Who.page
  .hero(:style="`background-image: url(${image})`")
    .hero-title {{ copy }}

  .section.section-story(v-if="story")

    .title(v-in-viewport) Our Story
    .subsections
      .subsection(v-in-viewport)
        video
          source(:src="story.video",type="video/mp4")
      .subsection(v-in-viewport)
        p(v-for="block in storyCopy") {{ block }}

  .section.section-team
    .title(v-in-viewport) Meet Our Team

    .team
      .team-filters
        .team-filter(
          v-in-viewport,
          :class="{active: option === filter}"
          @click="filter = option",
          v-for="option in filters") {{ option }}

      .team-members
        .team-member(
          v-for="member, index in team"
          v-if="member.types.indexOf(filter) !== -1"
          v-in-viewport
          :key="index")
          .team-member-image(:style="`background-image: url(${member.image})`")
            .team-member-link
              a(:href="member.linkedin",target="_new").fa.fa-linkedin
          .team-member-name {{ member.name }}
          .team-member-position {{ member.position }}

    .title(v-in-viewport) Get to know the rest of the team
    CtaButton(
      name="LinkedIn",
      theme="white-border",
      link="https://www.linkedin.com/search/results/people/?facetCurrentCompany%3D%255B%25226441806%2522%255D&sa=D&ust=1516851969619000&usg=AFQjCNESE_x1rW85TtC8FeAIJPjc4V7AiQ"
    )

  .section.section-openings(:style="`--bg: url(${image});`")
    .title We’re assembling a team of world class individuals.
    .title Interested in joining our team? 
    CtaButton(
      name="VIEW OPENINGS",
      theme="white-border-black",
      link="https://jobs.lever.co/oneconcern"
    )
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import inViewportDirective from 'vue-in-viewport-directive'
import CtaButton from '~/components/buttons/CtaButton'
const client = createClient()
export default {
  components: { CtaButton },
  directives: { 'in-viewport': inViewportDirective },
  async asyncData () {

    const hero = await client.getEntries({'content_type': 'hero','fields.page': 'about'})
    const story = await client.getEntries({'content_type': 'aboutContent'})
    const members = await client.getEntries({ 'content_type': 'team', order: 'fields.order'})

    let team = []
    let types = []
    for (let member of members.items) {
      team.push({
        image: member.fields.image.fields.file.url,
        linkedin: member.fields.linkedin,
        name: member.fields.name,
        position: member.fields.position,
        types: member.fields.type,
      })
      for (let type of member.fields.type) {
        types.push(type)
      }
    }

    return {
      image: hero.items[0].fields.image.fields.file.url,
      copy: hero.items[0].fields.copy,
      story: {
        copy: story.items[0].fields.storyCopy,
        video: story.items[0].fields.storyVideo.fields.file.url,
      },
      team: team,
      types: types,
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

    filters () {
      return this.types.filter( this.unique )
    },
  },

  created () {
    this.filter = this.filters[1]
  },

  data () {
    return {
      filter: false,
    }
  },
        
}
</script>


<style lang="stylus">

@import '../assets/stylus/guide/*'

.section
  padding 90px 0
  &.section-story
    background-color not-white
    .title
      margin 0 0 60px 0
  &.section-team
    background-color blue-charcoal
    .title
      color white
      margin 0 0 60px 0
  &.section-openings
    padding 60px 0 0 0
    color white
    background-repeat no-repeat
    background-size cover
    background-position 65% 65%
    background-size 240%
    background-color fire-bush
    background-image var(--bg)
    backgorund-color fire-bush
    background-blend-mode soft-light
    .cta-button
      margin-top 60px
      margin-bottom 60px
  &.section-team,
  &.section-openings,
    text-align center
    position relative

    .cta-button
      width 220px
      padding-top 20px
      padding-bottom 18px
      &[data-text]::after
        padding-top 20px
        padding-bottom 18px
  .title
    font-h4()
    text-align center
    inViewport(0)

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

.team-filters
  width 900px
  margin auto
  display flex
  flex-grow 1
  margin-bottom 60px
  .team-filter
    cursor pointer
    color not-white
    text-align center
    flex-grow 1
    padding 10px
    for i in 1..3
      &:nth-child({i})
        inViewport(0.1*i)
    &:not(:last-child)
      border-right 2px solid not-white
    &:hover:not(.active)
      color white
    &.active
      color fire-bush


.team
  padding 0 0 60px 0

.team-members
  width 900px
  display flex
  flex-wrap wrap
  margin auto
  text-align center
  color white
  padding 10px
  overflow hidden
.team-member
  margin 10px
  flex 0 0 calc( 33% - 20px )
  animation fadeIn 1s ease 0s alternate both
  for i in 1..20
    &:nth-child({i})
      animation-delay unit(((0.1*i) + 0.3), 's')
  &.below-viewport
    display none
  &.in-viewport
    display block

.team-member-name
  margin-bottom 5px

.team-member-image
  margin auto
  border-radius 50%
  width 200px
  height 200px
  background-repeat no-repeat
  background-size cover
  margin-bottom 20px
  position relative
  overflow hidden
  &:hover
    .team-member-link
      opacity 1
  .team-member-link
    opacity 0
    transition opacity 0.3s ease
    position absolute
    tplr()
    background-color rgba(white, 0.3)
    a
      width 35px
      height 35px
      line-height 35px
      position absolute
      top 50%
      left 50%
      margin-top -17.5px
      margin-left -17.5px
      color blue-charcoal
      background-color white
      padding 5px
      border-radius 50%
      text-decoration none
      transition 0.3s ease
      &:hover
        color white
        background-color fire-bush


.team-member-name
  font-s2b()

.team-member-position
  font-s2()
  max-width 200px
  margin-left auto
  margin-right auto

</style>
