<template lang="pug">
#Who
  Carousel(:data="carousel")
</template>

<script>
import Carousel from '~/components/modules/Carousel.vue'
export default {
  components: { Carousel },
  data () {
    return {
      carousel: [
        {
          image: 'https://picsum.photos/1280/740?image=82',
          title: 'Who We Are',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis neque massa, ac pulvinar elit gravida sit amet. Mauris volutpat feugiat venenatis. Pellentesque quis ipsum eros. ',
          cta: { name: 'LEARN MORE', link: 'who', },
        },
        {
          image: 'https://picsum.photos/1280/740?image=184',
          title: 'What We Believe',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis neque massa, ac pulvinar elit gravida sit amet. Mauris volutpat feugiat venenatis. Pellentesque quis ipsum eros. ',
          cta: { name: 'LEARN MORE', link: 'what', },
        },
        {
          image: 'https://picsum.photos/1280/740?image=306',
          title: 'Join the Team',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis neque massa, ac pulvinar elit gravida sit amet. Mauris volutpat feugiat venenatis. Pellentesque quis ipsum eros. ',
          cta: { name: 'LEARN MORE', link: 'join', },
        },
        {
          image: 'https://picsum.photos/1280/740?image=249',
          title: 'Recent Updates',
          description: 'Recent Updates dolor sit amet, consectetur adipiscing elit. Suspendisse convallis neque massa, ac pulvinar elit gravida sit amet. Mauris volutpat feugiat venenatis. Pellentesque quis ipsum eros. ',
          cta: { name: 'LEARN MORE', link: 'updates', },
        },
      ],
    }
  },

}
</script>

<style lang="stylus">
</style>
