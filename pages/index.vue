<template>
  <div>
    <Banner />
    <div class="space-y-16 lg:space-y-20">
      <Partners class="px-4 mt-7 lg:mt-20" />
      <About class="px-4 lg:px-32" />
      <!-- <Board /> -->
      <!-- <AcademicNeeds /> -->
      <Testimonial class="px-4 lg:px-32" />
      <!-- <QualityContent /> -->
      <CarouselComponent class="px-4 lg:px-32" />
    </div>
  </div>
</template>

<script setup>
import Testimonial from "~/components/testimonial.vue";

const name = useState("name", () => "");
onMounted(() => {
  const script = document.createElement("script");
  script.src =
    "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
  script.type = "module";
  document.body.appendChild(script);
});

useSeoMeta({
  title:
    "SortMyLawSchool | Creating India's Largest Database of Case Brief for Academia...",
  description: "Creating India's Largest Database of Case Brief for Academia",
  ogDescription: "Creating India's Largest Database of Case Brief for Academia",
  ogTitle:
    "SortMyLawSchool | Creating India's Largest Database of Case Brief for Academia...",
  ogUrl: `${useRuntimeConfig().public.siteUrl}/`,
});

defineOgImageComponent("NuxtSeo", {
  siteName: "SortMyLawSchool",
  title:
    "SortMyLawSchool | India's Largest Database of Case Brief for Academia",
  description: "Read more...",
  siteLogo: "https://sortmylawschool.com/favicon.png",
  colorMode: "dark",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "WebSite",
        name: "Sort My Law School",
        url: "https://sortmylawschool.com/",
        description:
          "A website that helps prospective law students sort and evaluate law schools.",
      }),
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `${useRuntimeConfig().public.siteUrl}/`,
    },
    {
      rel: "alternate",
      hreflang: "en",
      href: `${useRuntimeConfig().public.siteUrl}/`,
    },
  ],
});
</script>

<style scoped>
.knowledge-partner-card:hover .knowledge-partner-img {
  @apply grayscale-0;
}
</style>
