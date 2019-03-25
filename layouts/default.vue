<template lang="pug">
#OneConcern
  .pages
    nuxt
  NavBar
  BottomBar
  DemoForm(v-if="$store.state.demo")
  IEWarning
</template>

<script>
import { NavBar, BottomBar, DemoForm, IEWarning } from '~/components/layout'
export default {
  components: { NavBar, BottomBar, DemoForm, IEWarning },

  data () {

    return {
      meta: {
        en: {
          title: 'One Concern',
          description: 'Artificial Intelligence platform for Disasters',
        },
        jp: {
          title: 'jp title placeholder',
          description: 'jp description placeholder',
        },
      }
    }
  },

  head () {
    return {
      title: this.meta[this.$store.state.i18n.locale].title,
      meta: [
        {
          hid: 'description', name: 'description',
          content: this.meta[this.$store.state.i18n.locale].description
        },
      ]
    }
  },
}
</script>

<style lang="stylus">
@import '../assets/stylus/guide/*'
@import '../assets/stylus/guide/includes/*'
@import '../assets/stylus/main.styl'
</style>
