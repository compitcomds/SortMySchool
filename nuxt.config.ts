// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sitemap",
    "nuxt-og-image",
    "@nuxtjs/robots",
  ],
  plugins: [
    "~/plugins/preline.client.ts",
    { src: "~/plugins/disableRightClick.ts", mode: "client" },
  ],
  colorMode: {
    preference: "light",
    fallback: "light",
    classSuffix: "",
  },
  routeRules: {
    "/subject": { isr: 60 * 5 }, // 5 minutes,
    "/subject/**": {
      isr: 60 * 5,
    }, // 5 minutes,
    "/search/**": { prerender: false },
  },
  site: {
    url: "https://sortmylawschool.com/",
    name: "SortMyLawSchool",
    description:
      "Creating India's Largest Database of Case Brief for Academia...",
    defaultLocale: "en", // not needed if you have @nuxtjs/i18n installed
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
      ];
      return urls;
    },
    defaults: {
      changefreq: "daily",
      priority: 1,
      lastmod: new Date(),
    },
    exclude: ["/search", "/search/**"],
  },
  robots: {
    mergeWithRobotsTxtPath: "./public/_robots.txt",
  },
  generate: {
    fallback: "404.html",
  },
});
