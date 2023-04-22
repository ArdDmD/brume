// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
  ],
  app: {
    head: {
      htmlAttrs: { lang: "en" },
    },
  },
  css: ["@/assets/styles/scss/styles.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/scss/variables.scss"; @import "@/assets/styles/scss/reset.scss";',
        },
      },
    },
  },
});
