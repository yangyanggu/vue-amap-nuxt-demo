// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@vuemap/vue-amap/dist/style.css'],
  vite: {
    optimizeDeps: {
      exclude: ['@vuemap/vue-amap']
    }
  }
})
