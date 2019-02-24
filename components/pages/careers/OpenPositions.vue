<template lang="pug">
.open-positions
  .title(v-in-viewport.once)  {{ copys.openTitle }}
  .open-positions-teams
    .open-positions-team(v-for="count, name in teams",v-in-viewport.once)
      .title {{ name }}
      CtaButton(
        :link="`https://jobs.lever.co/oneconcern?team=${name}`",
        :name="copys.openButton",
        theme="orange-border")
  .title(v-in-viewport.once) {{ copys.openTitleB }}
  .copy(v-in-viewport.once)
    | {{ copys.contactUs1 }} &nbsp;
    a(:href="`mailto:${copys.contactEmail}`") {{ copys.contactEmail }}.
    | {{ copys.contactus2 }}
</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
import CtaButton from '~/components/buttons/CtaButton'
export default {

  props: {
    copys: {
      type: Object,
      required: true,
    },
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
@import '../../../assets/stylus/guide/includes/*'

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
