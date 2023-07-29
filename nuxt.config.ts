// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  hooks: {
    'pages:extend' (pages) {
      pages.push({
        name: 'formCreate',
        path: '/forms/create',
        file: resolve(__dirname, 'pages/forms/create.vue')
      })
    }
  }
})
