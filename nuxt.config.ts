// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["~/styles/main.scss"],
  modules: [
    "@nuxtjs/google-fonts",
  ],
   googleFonts: {
    families: {
      'Roboto+Condensed': [400, 700],
      'Inter': [600]
    },
    display: 'swap',
  },
  vite: {
    plugins: [svgLoader()]
  }
})