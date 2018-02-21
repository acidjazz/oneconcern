<template lang="pug">
.section.section-openings(:style="`background-image: url(${image});`")
  .title(v-in-viewport.once) We’re assembling a team
  .title(v-in-viewport.once) of world class individuals.
  .title(v-in-viewport.once) Interested in joining us? 
  CtaButton(
    v-in-viewport.once
    name="VIEW OPENINGS",
    theme="white-border",
    link="careers"
  )
</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
import CtaButton from '~/components/buttons/CtaButton'
export default {
  components: { CtaButton },
  directives: { 'in-viewport': inViewportDirective },
  props: {
    image: {
      type: String
    }
  }
}
</script>

