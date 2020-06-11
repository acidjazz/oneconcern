export default {
  computed: {
    is_en() {
      return this.$i18n.locale === 'en'
    },
    is_not_en() {
      return this.$i18n.locale !== 'en'
    },
    is_jp() {
      return this.$i18n.locale === 'jp'
    },
  }
}
