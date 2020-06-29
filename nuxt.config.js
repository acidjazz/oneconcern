require('dotenv').config()

let config = {
  title: 'One Concern',
  description: 'Artificial Intelligence platform for Disasters',
  url: 'https://oneconcern.com',
  image: '/share.jpg',
  keywords: 'key, words'
}

// let routes = require('./static/cache/routes.json')

module.exports = {

  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
  },

  /*
  ** Headers of the page
  */
  head: {
    title: config.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Artificial Intelligence platform for Disasters' },
      { name: 'theme-color', content: '#f29220' },

      // Schema.org
      { hid: 'itemprop:name', itemprop: 'name', content: config.title },
      { hid: 'itemprop:description', itemprop: 'description', content: config.description },
      { hid: 'itemprop:image', itemprop: 'image', content: config.url + config.image },

      // facebook
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: config.url },
      { hid: 'og:image', property: 'og:image', content: config.url + config.image },

      { hid: 'og:title', property: 'og:title', content: config.title },
      { hid: 'og:description', property: 'og:description', content: config.description },

      // twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: config.url + config.image },

      { hid: 'twitter:title', name: 'twitter:title', content: config.title },
      { hid: 'twitter:description', name: 'twitter:description', content: config.description },

    ],

    link: [
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#f29220' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },

      { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
    ],

    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js', async: "async", integrity: 'sha256-LlHVI5rUauudM5ZcZaD6hHPHKrA7CSefHHnKgq+/AZc=', crossorigin: 'anonymous' },
      { src: '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min.js' },
      { src: '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/locale/ja.js' },
    ],

  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#f29220' },
  /*
  ** css frameowrk
  */
  // css: [{ src: '~assets/stylus/main.styl', lang: 'stylus' }],
  plugins: [
    '~/plugins/contentful.js',
    {src: '~/plugins/flickity.js', ssr: false},
  ],
  /*
  ** Build configuration
  */
  buildModules: [
    ['@nuxtjs/pwa', { manifest: false}],
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/component-cache',
    ['@nuxtjs/moment', ['ja']],
    ['@nuxtjs/google-tag-manager', { id: 'GTM-K59VVGC' }],
    ['nuxt-i18n', {
      strategy: 'prefix_except_default',
      defaultLocale: 'en',
      fallbackLocale: 'en',
      locales: [
        {
          code: 'jp',
          iso: 'ja',
          name: 'Japanese',
        },
        {
          code: 'en',
          iso: 'en-US',
          name: 'English',
        },
      ],
      vueI18n: { fallbackLocale: 'en' },
      seo: false,
    }],
    '@nuxtjs/sitemap',
  ],
  sitemap: {
    hostname: 'https://oneconcern.com',
  },
  // generate: { routes },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
