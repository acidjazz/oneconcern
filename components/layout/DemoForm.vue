<template lang="pug">
transition(name="animodal")
  .demo
    .demo-background(@click="$store.commit('demo', false)")
    .demo-content
      .demo-close(@click="$store.commit('demo', false)")
        .fa.fa-times

      .title Request a Demonstration
      form#form(action="https://oneconcern.us17.list-manage.com/subscribe/post?u=8058a1203b676d0c0e54b5e4e&amp;id=69ae0b1ba8",method="post")
        .field
          input.input#Name(type="text",name="NAME",placeholder="First and last name")
        .field
          input.input(type="email",name="EMAIL",placeholder="E-mail")
        .field
          input.input(type="tel",name="PHONE",placeholder="Phone number")
        .field
          input.input(type="text",name="TITLE",placeholder="Title")
        .field
          input.input(type="text",name="COMPANY",placeholder="Company")
        .field
          input.input(type="text",name="ORIGIN",placeholder="How did you hear about One Concern?")
        .field.is-right
          CtaButton(name="Submit",:callback="submit")
</template>

<script>
import CtaButton from '~/components/buttons/CtaButton'
export default {
  components: { CtaButton },
  methods: {
    submit () {
      console.log('we submittin yo')
      document.getElementById('form').submit()
    },
  },

  created () {
    if (process.browser) {
      setTimeout(() => {
        document.getElementById('Name').focus()
      }, 800)
    }
  },
}
</script>

<style lang="stylus">
@import '../../assets/stylus/guide/includes/*'

.demo
  z-index 110
  align-items center
  overflow hidden
  position fixed
  display flex
  justify-content center
  align-items center
  tplr()

.demo-background
  position absolute
  tplr()
  background-color rgba(10, 10, 10, 0.86)

.demo-close
  cursor pointer
  position absolute
  top 20px
  right 20px
  width 40px
  height 40px
  color white
  z-index 130

.demo-content
  z-index 120
  margin 0 20px
  max-height calc(100vh - 160px)
  width 500px
  overflow auto
  position relative
  padding 30px
  border-radius 5px
  background-color blue-charcoal

.title
  color white
  font-h4()
  padding 0 0 30px 0
  text-align center

.field
  margin 0 0 30px 0
  &:last-child
    margin 0 0 0 0
  &.is-right
    text-align right

input.input
  width calc(100% - 12px)
  background-color transparent
  border none
  outline none
  border-bottom 1px solid mountain-mist
  color white
  padding 6px
  font-s2()
  &:focus
    border-bottom 1px solid not-white

::-webkit-input-placeholder
  color mountain-mist
  &:active
    color white

@media all and (min-width: 1px) and (max-width: 1000px)
  .demo-content
    width auto


</style>
