<template lang="pug">
#Careers.page
  .hero(:style="`background-image: url(${lowres})`")
    img.hero-background(:src="image")
    .hero-gradient
    .hero-title  {{ copy }}
    .hero-cta
      CtaButton(
        link="https://jobs.lever.co/oneconcern",
        name="SEE OPPORTUNITIES",
        theme="orange-border")

  ScrollDown
  CareersGallery(:images="gallery")

  PerksBenefits(:perks="perks",v-if="perks")
  OpenPositions(:jobs="jobs",v-if="jobs")

</template>

<script>
import { createClient } from '@/plugins/contentful.js'
import inViewportDirective from 'vue-in-viewport-directive'
import CareersGallery from '@/components/pages/careers/CareersGallery'
import PerksBenefits from '@/components/pages/careers/PerksBenefits'
import OpenPositions from '@/components/pages/careers/OpenPositions'
import ScrollDown from '@/components/modules/ScrollDown'
import CtaButton from '@/components/buttons/CtaButton'
const client = createClient()
import jobs from '@/static/cache/lever.json'
export default {
  components: { CareersGallery, PerksBenefits, OpenPositions, CtaButton, ScrollDown },
  directives: { 'in-viewport': inViewportDirective },
  async asyncData ({ app }) {

    const hero = await client.getEntries({'content_type': 'hero','fields.page': 'careers'})
    const perksBenefits = await client.getEntries({'content_type': 'perksBenefits'})
    const careersGallery = await client.getEntries({'content_type': 'careersGallery', order: 'fields.number'})

    let perks = []
    let gallery = []

    for (let perk of perksBenefits.items) {
      perks.push({
        icon: perk.fields.icon.fields.file.url,
        title: perk.fields.title,
        copy: perk.fields.copy,
      })
    }


    for (let item of careersGallery.items) {
      gallery[parseInt(item.fields.number)] = item.fields.image.fields.file.url
    }

    return {
      image: hero.items[0].fields.image.fields.file.url,
      lowres: hero.items[0].fields.lowres.fields.file.url,
      copy: hero.items[0].fields.copy,
      gallery: gallery,
      perks: perks,
    }

  },
  data () {
    return {
      jobs: jobs,
    }
  },
}
</script>

