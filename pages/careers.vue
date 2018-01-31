<template lang="pug">
#Careers.page
  .hero(:style="`background-image: url(${image})`")
    .hero-gradient
    .hero-title  {{ copy }}
    .hero-cta
      CtaButton(
        link="https://jobs.lever.co/oneconcern",
        name="SEE OPPORTUNITIES",
        theme="orange-border")

  CareersGallery

  PerksBenefits(:perks="perks",v-if="perks")
  OpenPositions(:jobs="jobs",v-if="jobs")

</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import inViewportDirective from 'vue-in-viewport-directive'
import CareersGallery from '~/components/pages/careers/CareersGallery'
import PerksBenefits from '~/components/pages/careers/PerksBenefits'
import OpenPositions from '~/components/pages/careers/OpenPositions'
import CtaButton from '~/components/buttons/CtaButton'
const client = createClient()
export default {
  components: { CareersGallery, PerksBenefits, OpenPositions, CtaButton },
  directives: { 'in-viewport': inViewportDirective },
  async asyncData ({ app }) {

    const hero = await client.getEntries({'content_type': 'hero','fields.page': 'careers'})
    const perksBenefits = await client.getEntries({'content_type': 'perksBenefits'})
    const jobs = await app.$axios.$get('https://api.lever.co/v0/postings/oneconcern?mode=json')

    let perks = []

    for (let perk of perksBenefits.items) {
      perks.push({
        icon: perk.fields.icon.fields.file.url,
        title: perk.fields.title,
        copy: perk.fields.copy,
      })
    }

    return {
      image: hero.items[0].fields.image.fields.file.url,
      copy: hero.items[0].fields.copy,
      perks: perks,
      jobs: jobs,
    }

  },
}
</script>

