export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
  ],
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  build: {
    transpile: ['vuetify'],
  },
  plugins:['plugins/api.js'],
  runtimeConfig: {
    public:{
      apiBase: process.env.API_URL
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/app/style/index.scss";',
        },
      },
    },
  },
})
