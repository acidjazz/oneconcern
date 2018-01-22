<template lang="pug">
#OneConcern
  .pages
    nuxt
  NavBar
  BottomBar
</template>

<script>
import { NavBar, BottomBar } from '~/components/layout'

export default {
  components: { NavBar, BottomBar }
}
</script>

