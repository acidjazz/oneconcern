<template lang="pug">
.open-positions
  .title(v-in-viewport) Open Positions
  .open-positions-teams
    .open-positions-team(v-for="count, name in teams",v-in-viewport)
      .title {{ name }}
      CtaButton(
        :link="`https://jobs.lever.co/oneconcern?team=${name}`",
        name="VIEW OPENINGS",
        theme="orange-border")
  .title(v-in-viewport) Don't see the position you're looking for? We'd still love to hear from you!
  .copy(v-in-viewport) 
    | Contact us at 
    a(href="mailto:careers@oneconcern.com") careers@oneconcern.com. 
    | We are always on the look out for amazing people.
</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
import CtaButton from '~/components/buttons/CtaButton'
export default {

  props: {
    jobs: {
      type: Array,
      required: true,
    }
  },

  directives: { 'in-viewport': inViewportDirective },
  components: { CtaButton },

  created () {

    for (let job of this.jobs) {
      if (this.teams[job.categories.team] === undefined) {
        this.teams[job.categories.team] = 0
      }
      this.teams[job.categories.team]++
    }
  },

  data () {
    return {
      teams: {}
    }
  },
}
</script>


<style lang="stylus">
@import '../../../assets/stylus/guide/*'

.open-positions
  padding 60px 0
  text-align center
  background-color not-white
  .title
    font-h4()
    inViewportBottom()
  > .copy
    padding 10px 0 0 0
    text-transform uppercase
    inViewportBottom()
    font-s4()
    a
      color fire-bush
      text-decoration none

.open-positions-teams
  max-width 800px
  margin 60px auto

.open-positions-team
  background-color white
  padding 40px
  margin 0 0 20px 0
  inViewportBottom(0)
  display flex
  justify-content flex-end
  .title
    display flex
    flex 1
  .cta-button
    justify-self flex-end

@media all and (min-width: 1px) and (max-width: 1000px)
  .open-positions
    padding 60px 20px
  .open-positions-team
    flex-direction column
    .title
      text-align center
      padding 0 0 20px 0
      flex 0
      justify-content center
    .cta-button
      align-self center
</style>
