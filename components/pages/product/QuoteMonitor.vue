<template lang="pug">
#QuoteMonitor
  .copy(v-in-viewport.once,v-html="copy_processed")
  //
    | One Concern currently monitors
    // i-count-up.value(:startVal=0,:endVal="numbers.residential",:duration="2.5")
    span.value {{ numbers.residential }}
    | residential and
    // i-count-up.value(:startVal=0,:endVal="numbers.commercial",:duration="2.5")
    span.value {{ numbers.commercial }}
    | commercial buildings. We monitor earthquakes for
    // i-count-up.value(:startVal=0,:endVal="numbers.people/1000000",:duration="2.5",:options="{suffix: 'M'}")
    span.value {{ numbers.people }}
    |  people.
</template>
<script>
import inViewportDirective from 'vue-in-viewport-directive'
import inViewport from 'vue-in-viewport-mixin'
export default {
  directives: { 'in-viewport': inViewportDirective },
  mixins: [ inViewport ],
  props: {
    copy: {
      type: String,
      required: true,
    },
  },

  computed: {

    copy_processed () {
      let processed = '', words = this.copy.split(' ')
      for (let word of words) {
        if (isNaN(word)) {
          processed = `${processed} ${word}`
          continue
        }
        if (process.browser) {
          processed = `${processed} <span class="value">${window.numeral(word).format(0,0)}</span>`
        } else {
          processed = `${processed} <span class="value">${word}</span>`
        }
      }

      return processed

    },
  },
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
