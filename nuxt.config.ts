// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  plugins: ["~/plugins/preline.client.ts"],
  colorMode: {
    preference: 'light', // Force light theme
    fallback: 'light', // Fallback theme if user's preference cannot be determined
    classSuffix: '', // No suffix added to the class
  }
})