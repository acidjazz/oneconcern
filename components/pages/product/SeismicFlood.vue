
<template lang="pug">
.section.section-SeismicFlood
  .sf-menu
    a.sf-item(:class="{'is-active': selection == 'seismic'}",@click="selection = 'seismic'") {{ copy.buttonSeismic }}
    //a.sf-item(:class="{'is-active': selection == 'flood'}",@click="selection = 'flood'") {{ copy.buttonFlood }}

  .sf-content
    transition(name="fade",mode="out-in")
      .sf-body(v-if="selection == 'seismic'",key="seismic")

        .sf-image(v-in-viewport.once)
          img(:src="`${seismic.image}`")
        .sf-list
            p(v-in-viewport.once,v-for="item in seismic.list") {{ item }}

      .sf-body(v-if="selection == 'flood'",key="flood")

        .sf-image(v-in-viewport.once)
          img(:src="`${flood.image}`")
        .sf-list
          ul
            li(v-in-viewport.once,v-for="item in flood.list") {{ item }}

</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {

  directives: { 'in-viewport': inViewportDirective },

  props: {
    data: {
      type: Object,
      required: true,
    },
    copy: {
      type: Object,
      required: true,
    },
  },

  data () {
    return {
      selection: 'seismic',
      seismic: { image: false, list: [],},
      flood: { image: false, list: [],},
    }
  },

  computed: {
    selected () {
      return this[this.selection]
    }
  },

  created () {
    for (let entry of this.data.items) {
      this[entry.fields.type].image = entry.fields.image.fields.file.url
      this[entry.fields.type].list = entry.fields.list.split("\n")
    }
  },

}
</script>

<style lang="stylus">
@import '../../../assets/stylus/guide/includes/*'

.section-SeismicFlood
  max-width 1200px
  margin auto
  padding 60px 0

.sf-menu
  width 400px
  margin auto
  border-bottom 1px solid mountain-mist
  display flex
  justify-content center
  margin-bottom 30px

.sf-item
  cursor pointer
  width 200px
  margin 0 20px
  padding 10px
  color white
  border-bottom 3px solid transparent
  margin-bottom -2px
  transition all 0.3s ease-in

.sf-content
  position relative
  width 900px
  height 400px
  margin auto

.sf-body
  width 100%
  padding 30px
  display flex
  align-items center

.sf-image
  width 50%
  inViewportBottom(0.1, 0.5)
  > img
    width 100%

.sf-item.is-active
  color fire-bush
  border-bottom 3px solid white

.sf-list
  padding-left 50px
  ul, p
    padding 0
    max-width 400px
  li, p
    inViewportBottom(0.1, 0.5)
    padding 5px 0
    color white
    text-align left
    font-s6()
  p:first-child
    font-s1()

@media all and (min-width: 1px) and (max-width: 1000px)
  .sf-menu
    width 100%
  .sf-content
    flex-direction column
  .sf-image
    width 100%
  .sf-list
    padding 10px

</style>
