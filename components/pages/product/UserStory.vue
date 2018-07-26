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
export default {
  props: {
    story: {
      type: Object,
      required: true,
    }
  }
}
</script>

