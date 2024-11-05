// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 80, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  },
  devtools: { enabled: true },
  css: [
    'swiper/swiper-bundle.css',
  ],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sitemap",
    "nuxt-og-image",
    "@nuxtjs/robots",
    "@nuxt/image",
    "nuxt-aos",
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
    // "/subject": { isr: 60 * 5 }, // 5 minutes,
    // "/subject/**": {
    //   isr: 60 * 5,
    // }, // 5 minutes,
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
  runtimeConfig: {
    public: {
      siteUrl: "https://sortmylawschool.com",
    },
  },
});