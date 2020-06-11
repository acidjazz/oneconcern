<template lang="pug">
transition(name="animodal")
  .demo
    .demo-background(@click="$store.commit('demo', false)")

    .demo-content(v-if="success")
      .demo-close(@click="$store.commit('demo', false)")
        .fa.fa-times
      p Thank you for requesting a demo.
      p Please allow three business days for a response.
      p
        CtaButton(name="close",:callback="close")

    .demo-content(v-else)
      .demo-close(@click="$store.commit('demo', false)")
        .fa.fa-times

      iframe.demo-frame#frame(v-if="is_en", src="https://eepurl.com/dkcE09")
      iframe.demo-frame#frame(v-if="is_jp", src=" https://eepurl.com/giG0TD")

</template>

<script>
import CtaButton from '~/components/buttons/CtaButton'
import i18n from '@/mixins/i18n'
export default {
  components: { CtaButton },
  mixins: [i18n],
  data () {
    return {
      loop: false,
      success: false,
    }
  },
  mounted () {
    console.log(this.$i18n.locale)
    console.log(this.is_en)
    console.log(this.is_jp)
  },
  created () {
    if (process.browser) {
      this.loop = setInterval(() => {

        setTimeout(() => {
          let frame = document.getElementById('frame')
          try {
            console.log(frame.contentWindow.location.href)
            console.log('success')
            this.success = true
          } catch (e) {
            console.log('not allowed')
          }
        }, 2000)

      }, 200)
    }
  },
  destroyed () { clearInterval(this.loop) },
  methods: {
    submit () {
      document.getElementById('form').submit()
    },
    close () {
      this.$store.commit('demo', false)
    },
  },
}
</script>

<style lang="stylus" scoped>
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
  right 0px
  width 40px
  height 40px
  color white
  z-index 130

.demo-content
  z-index 120
  margin 0 20px
  width 500px
  position relative
  overflow hidden
  padding 0 30px 30px 30px
  border-radius 5px
  max-height calc(100% - 80px)
  overflow-y scroll
  background-color midnight-express
  color white
  p
    text-align center
  .cta-button
    margin 20px 0 0 0

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

.demo-frame
  overflow hidden
  border none
  width 100%
  height 780px

@media all and (min-width: 1px) and (max-width: 1000px)
  .demo-content
    width auto


</style>
