<template lang="pug">
#OneConcern
  .pages
    nuxt
  NavBar
  BottomBar
  DemoForm(v-if="$store.state.demo")
</template>

<script>
import { NavBar, BottomBar, DemoForm } from '~/components/layout'

export default {
  components: { NavBar, BottomBar, DemoForm }
}
</script>


<style lang="stylus">
@import '../assets/stylus/guide/*'
@import '../assets/stylus/guide/includes/*'
@import '../assets/stylus/main.styl'
</style>
