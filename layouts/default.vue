<template lang="pug">
#OneConcern
  main.pages
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
          description: 'Artificial Intelligence Platform for Disasters',
        },
        jp: {
          title: 'One Concern (ワン・コンサーン)',
          description: '「災害の発生前・発生時・発生後に人命と暮らしを守ること」をミッションに、AIなどの最先端のテクノロジーを活用した災害予測と防災・減災システムを提供',
        },
      }
    }
  },

  head () {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      title: this.meta[this.$i18n.locale].title,
      meta: [
        {
          hid: 'description', name: 'description',
          content: this.meta[this.$i18n.locale].description
        },
        ...i18nSeo.meta,
      ],
      link: [
        ...i18nSeo.link,
      ]
    }
  },
}
</script>
<style>
body, html {
  background-color: #222937;
  color: white;
}
</style>

<style lang="stylus">
@import '../assets/stylus/guide/*'
@import '../assets/stylus/guide/includes/*'
@import '../assets/stylus/main.styl'
</style>
