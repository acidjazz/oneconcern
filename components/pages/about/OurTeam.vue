<template lang="pug">
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

</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
  props: {
    team: {
      required: true,
      type: Array,
    }
  },

  created () {
    for (let member of this.team) {
      for (let type of member.types) {
        this.types.push(type)
      }
    }
  },

  methods: {
    unique (value, index, self) {
      return self.indexOf(value) === index
    },
  },

  computed: {
    filters () {
      return this.types.filter( this.unique )
    },
  },

  data () {
    return {
      filter: 'Team',
      types: ['Team', 'Board of Directors', 'Advisors & Investors'],
    }
  },


}
</script>

<style lang="stylus">
@import '../../../assets/stylus/guide/*'

.team
  padding 0 0 60px 0

.team-filters
  width 900px
  margin auto
  display flex
  flex-grow 1
  margin-bottom 60px
  .team-filter
    width 33%
    cursor pointer
    color not-white
    text-align center
    flex-grow 1
    padding 10px
    inViewportBottom(0.2)
    &:nth-child(2)
      inViewportBottom(0.4)
    &:nth-child(3)
      inViewportBottom(0.6)
    for i in 1..3
      &:nth-child({i})
        inViewportBottom(0.1*i)
    &:not(:last-child)
      border-right 2px solid not-white
    &:hover:not(.active)
      color white
    &.active
      color fire-bush

.team-members
  width 900px
  display flex
  flex-wrap wrap
  margin auto
  text-align center
  color white
  padding 10px
  overflow hidden
  justify-content center
.team-member
  transition 1s ease
  margin 10px
  flex 0 0 calc( 33% - 20px )
  animation fadeInBottom 1s ease 0s alternate both
  for i in 1..3
    &:nth-child(3n+{i})
      animation-delay unit(((0.1*i)), 's')
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
      background-color rgba(white, 0.3)
      a
        opacity 1
        transform translate(0, 0)
        transition 0.3s ease 0s
  .team-member-link
    transition background 0.3s ease
    position absolute
    tplr()
    background-color rgba(white, 0)

    a
      opacity 0
      width 36px
      height 36px
      line-height 36px
      position absolute
      top 50%
      left 50%
      margin-top -23px
      margin-left -23px
      color blue-charcoal
      background-color white
      padding 5px
      border-radius 50%
      text-decoration none
      transition 0.3s ease 0.1s
      transform translate(0, 20px)
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

@media all and (min-width: 1px) and (max-width: 1000px)
  .team-filters
    width auto
    .team-filter
      font-s2()
      padding 10px
  .team-members
    width auto
    .team-member
      margin 8px
      .team-member-image
        width 100px
        height 100px
      .team-member-position
        font-s3()
        line-height 12px
</style>
