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
import ContentBlock from '~/components/modules/ContentBlock'
export default {
  components: { ContentBlock },
  data () {
    return {
      contents: [
        {
          order: "image",
          theme: "charcoal",
          copy: "Who ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada velit a lacus venenatis tempor. Integer eu consectetur metus. Nunc a volutpat tellus",
          image: "https://picsum.photos/1280/740?image=126",
        },
        {
          order: "copy",
          theme: "fire",
          copy: "Who ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada velit a lacus venenatis tempor. Integer eu consectetur metus. Nunc a volutpat tellus",
          image: "https://picsum.photos/1280/740?image=129",
        },
        {
          order: "image",
          theme: "charcoal",
          copy: "Who ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada velit a lacus venenatis tempor. Integer eu consectetur metus. Nunc a volutpat tellus",
          image: "https://picsum.photos/1280/740?image=132",
        },
        {
          order: "copy",
          theme: "fire",
          copy: "Who ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada velit a lacus venenatis tempor. Integer eu consectetur metus. Nunc a volutpat tellus",
          image: "https://picsum.photos/1280/740?image=155",
        },
      ]
    }
  },
}
</script>

<style lang="stylus">
#Who
  .hero
    background-image url(https://picsum.photos/1280/740?image=122)
</style>
