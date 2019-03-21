<template lang="pug">
.section.section-stories
  .section-stories-title(v-in-viewport) {{ title }}
  no-ssr
    flickity.carousel#UserStories(:options="flickityOptions")
      .story.carousel-cell(
        v-in-viewport,
        v-for="story in stories_filtered",
        :key="story.youtubId")
        iframe(
          v-if="playing === story.youtubeId",
          width="98%",
          height="440",
          :src="`https://www.youtube.com/embed/${story.youtubeId}?autoplay=1`",
          frameborder="0",
          allow="autoplay; encrypted-media",
          allowfullscreen)
        .story-inner(:style="`background-image: url(${story.thumbnail});`",v-else)
          .story-gradient
          .story-quote(:class="{'story-quote-jp': $store.state.i18n.locale === 'jp'}") {{ story.quote }}
          .story-play(@click="playing = story.youtubeId")
            .story-play-triangle
          .story-creds
            .story-author {{ story.author }}
            .story-title {{ story.title }}

</template>

<script>
import locale from '@/mixins/locale'
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
  mixins: [ locale ],

  props: {
    title: {
      type: String,
      required: true,
    },
    stories: {
      type: Array,
      required: true,
    },
  },

  data () {
    return {
      flkty: false,
      playing: false,
      flickityOptions: {
        wrapAround: true,
      },
    }
  },
  computed: {
    stories_filtered () {
      return this.stories.filter( entry => entry.locale.includes(this.locale) )
    },
  },
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/guide/includes/*'
.section-stories
  max-width 1600px
  margin auto
  padding 30px 0
  .stories
    width 100%
    overflow hidden

.section-stories-title
  color white
  padding 0 0 30px 0
  inViewportBottom(0, 0.5)

.carousel
  height 440px
  .carousel-cell.is-selected
    inViewportBottom(0.2, 0.5)

.story
  background-size cover
  margin auto
  position relative
  width 800px
  height 440px

.carousel-cell
  transform-style preserve-3d

.carousel-cell.is-selected
  > .story-inner
    height 460px
    margin-top 0px

.carousel-cell:not(.is-selected)
  inViewportLeft(0.6, 0.5)

.carousel-cell.is-selected + .carousel-cell
  inViewportRight(0.6, 0.5)

.story-inner
  margin 20px 40px
  background-size cover
  background-position 50% 50%
  background-repeat no-repeat
  position relative
  height 400px
  transition all 0.4s ease-in

.story-gradient
  width 100%
  height 100%
  background linear-gradient(to right, rgba(black, 0.8), transparent)

.story-quote
  position absolute
  top 30px
  left 30px
  color white
  text-align left
  width 50%
  font-h4()
  &.story-quote-jp
    font-size 20px

.story-play
  cursor pointer
  position absolute
  top 50%
  left 50%
  width 60px
  height 60px
  margin-top -30px
  margin-left -30px
  border-radius 50%
  background-color fire-bush

.story-play-triangle
  position absolute
  top 20px
  left 25px
  width 0
  height 0
  border-top 10px solid transparent
  border-bottom 10px solid transparent
  border-left 15px solid vulcan

.story-creds
  position absolute
  bottom 30px
  left 20px

.story-author
  color white
  text-align left
.story-title
  color white
  text-align left
  font-s2()

@media all and (min-width: 1px) and (max-width: 1000px)

  .story
    width 90%

  .story-inner
    margin 10px 20px

  .story-quote
    width 80%
    top 10px
    left 10px
    font-s1()

  .story-creds
    left 10px
    bottom 30px

</style>

