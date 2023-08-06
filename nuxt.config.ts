export default defineNuxtConfig({
  devtools: { enabled: false },

  runtimeConfig: {
    public: {
      strapiApi: 'https://strapi-italian.onrender.com'
    }
  },

  css: [
    '~/assets/scss/main.scss'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_variables.scss";'
        }
      }
    }
  },

  modules: ['nuxt-swiper', 'nuxt-vitest'],
})
