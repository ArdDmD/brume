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
