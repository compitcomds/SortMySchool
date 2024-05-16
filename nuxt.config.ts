// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sitemap",
    "nuxt-og-image",
    "nuxt-schema-org"
  ],
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
    "/subject/[name]/[id]": { isr: false, swr: 60 * 5 }, // 5 minutes,
    "/search/**": { prerender: false },
  },
  site: {
    url: 'https://sortmylawschool.com/',
    name: 'SortMyLawSchool',
    description: "Creating India's Largest Database of Case Brief for Academia...",
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  sitemap: {
    urls: async () => {
      // fetch your URLs from a database or other source
      const urls = [
        "/subject/BusinessRegulations",
        "/subject/CodeOfCivilProcedure",
        "/subject/ConstitutionalLawI",
        "/subject/EnvironmentalLaw",
        "/subject/6637f17a0026153b82fc",
        "/subject/InterpretationofStatutes",
        "/subject/MinorActandSCRules",
        "/subject/Partnership",
        "/subject/PropertyLaw",
        "/subject/PublicInternationalLaw",
        "/subject/RentControlandSlumClearance",
        "/subject/TaxationLaw",
        "/subject/Trademarklaw",
      ]
      return urls
    },
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  }
});