<template lang="pug">
#QuoteMonitor
  .copy(v-in-viewport)
    | One Concern currently monitors
    i-count-up.value(:startVal=0,:endVal="numbers.residential",:duration="3")
    | residential and
    i-count-up.value(:startVal=0,:endVal="numbers.commercial",:duration="3")
    | commercial buildings. We monitor earthquakes for 
    i-count-up.value(:startVal=0,:endVal="numbers.people/1000000",:duration="3",:options="{suffix: 'M'}")
    |  people.
</template>
<script>
import ICountUp from 'vue-countup-v2'
import inViewportDirective from 'vue-in-viewport-directive'
import inViewport from 'vue-in-viewport-mixin'
export default {
  components: { ICountUp },
  directives: { 'in-viewport': inViewportDirective },
  mixins: [ inViewport ],
  props: {
    residential: {
      type: String,
    },
    commercial: {
      type: String,
    },
    people: {
      type: String,
    },
  },
  watch: {
    'inViewport.now' (visible) {
      if (visible && this.numbers.residential === 0) {
        this.numbers.residential = parseInt(this.residential)
        this.numbers.commercial = parseInt(this.commercial)
        this.numbers.people = parseInt(this.people)
      }
      if (!visible && this.numbers.residential !== 0) {
        this.numbers.residential = 0
        this.numbers.commercial = 0
        this.numbers.people = 0
      }
    }
  },
  data () {
    return {
      numbers: {
        residential: 0,
        commercial: 0,
        people: 0,
      }
    }
  }

}
</script>

<style lang="stylus">
@import '../../../assets/stylus/guide/includes/*'
#QuoteMonitor
  background-color white
  text-align center
  color fire-bush
  padding 60px 0
  height 96px
  .copy
    inViewport(0)
    width 610px
    margin auto
    font-h4()
    span
      padding 0 4px
      color blue-charcoal

@media all and (min-width: 1px) and (max-width: 1000px)
  #QuoteMonitor
    height auto
    .copy
      padding 0 20px
      width auto
      font-s1()

</style>
