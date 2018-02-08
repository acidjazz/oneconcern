<template lang="pug">
#FeaturedCaseStudy
  .case-study-title Featured Case Study
  .case-study-case
    .case-study-image
    .case-study-copy
      .case-study-quote "Seismic Concern has been an eye-opener for us to holistically understand our risks, plan mitigations, and build resilience in our communities."
      .case-study-author Mr. Daniel Ghiorso, Fire Chief at Woodside Fire Protection District
  .case-study-cta
    CtaButton(name="see full case study",theme="dark-border")
</template>
<script>
import CtaButton from '~/components/buttons/CtaButton'
export default {
  components: { CtaButton },
  props: {
  },

  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/guide/*'
#FeaturedCaseStudy
  background-color not-white
  padding 60px 0

.case-study-title
  text-align center
  color fire-bush
  font-h4()
  padding 0 0 30px 0

.case-study-case
  width 620px
  margin auto

.case-study-image
  float left
  width 140px
  height 140px
  background-color fire-bush
  border-radius 70px

.case-study-copy
  padding 0px 0 0 160px

.case-study-quote
  font-s1()
.case-study-author
  padding 10px 0 0 0
  font-s5()

.case-study-cta
  padding 60px 0 0 0
  text-align center


</style>
