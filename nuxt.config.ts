// https://nuxt.com/docs/api/configuration/nuxt-config

import store from '~/store'
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    'nuxt3-vuex-module',
  ],

  css: [
    '@fontsource-variable/nunito', 
    '@fontsource-variable/nunito-sans'
  ],

  i18n: {
    lazy: true,
    langDir: "locales/",
    strategy: "prefix_axcept_default",
    locales: [
      { code: "ar-EG", iso: "ar-EG", file: "ar.js", name: "عربي" },
      { code: "en-US", iso: "en-US", file: "en.js", name: "English"}
    ],
    defaultLocale: 'en-US',
  }
 

})
