// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  plugins: [
    "~/plugins/preline.client.ts",
    { src: "~/plugins/disableRightClick.ts", mode: "client" },
  ],
  colorMode: {
    preference: "light", // Force light theme
    fallback: "light", // Fallback theme if user's preference cannot be determined
    classSuffix: "", // No suffix added to the class
  },
  routeRules: {
    "/subject": { isr: 60 * 5 }, // 5 minutes,
    "/subject/**": { isr: 60 * 5 }, // 5 minutes,
    "/subject/[name]/[id]": { isr: 60 * 5 }, // 5 minutes,
    "/search/**": { prerender: false },
  },
});
