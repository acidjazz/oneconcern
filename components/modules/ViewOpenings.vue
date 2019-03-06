<template lang="pug">
.section.section-openings
  .title(v-in-viewport.once) {{ copys.openingsTitle1 }}
  .title(v-in-viewport.once) {{ copys.openingsTitle2 }}
  .title(v-in-viewport.once) {{ copys.openingsTitle3 }}
  CtaButton(
    v-in-viewport.once
    :name="copys.openingsButton",
    theme="white-border-hoverblack",
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
    copys: {
      type: Object,
      required: true,
    },
  }
}
</script>

