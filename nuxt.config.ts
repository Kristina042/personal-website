// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/styles/main.scss'],
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Roboto+Condensed': [400, 700],
      Inter: [400, 600],
      'Allerta Stencil': [400, 600],
      'Roboto Mono': [700],
    },
    display: 'swap',
  },
  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/styles/variables.scss" as *;`,
        },
      },
    },
  },
})
