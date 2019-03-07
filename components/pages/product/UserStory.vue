<template lang="pug">
.story-inner(:style="`background-image: url(${story.thumbnail});`")
  .story-gradient
  .story-quote "{{ story.quote }}"
  .story-play
    .story-play-triangle
  .story-creds
    .story-author {{ story.author }}
    .story-title {{ story.title }}
</template>

<script>
import locale from '@/mixins/locale'
export default {
  mixins: [ locale ],
  props: {
    story: {
      type: Object,
      required: true,
    }
  },
  computed: {
    story_filtered () {
      return this.story.filter( entry => entry.locale.includes(this.locale) )
    },
  },
}
</script>

