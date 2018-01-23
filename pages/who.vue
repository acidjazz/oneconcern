<template lang="pug">
#Who.page
  .hero
    .hero-title Who ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada velit a lacus venenatis tempor. Integer eu consectetur metus. Nunc a volutpat tellus
  ContentBlock(
    v-for="content, index in contents",
    :key="index",
    :order="content.order",
    :theme="content.theme",
    :copy="content.copy",
    :image="content.image")
</template>

<script>
</script>

<style lang="stylus">
#Who
  .hero
    background-image url(https://picsum.photos/1280/740?image=122)
</style>
