<template>
  <Banner />

  <div class="w-full flex flex-col justify-center items-center my-16">
    
    <div
      class="flex w-8/12 flex-wrap items-center justify-center gap-4 md:gap-8"
    >
      <a href="https://testbook.com/" target="_blank"
        ><nuxt-img
          src="/assets/testbook.png"
          alt="SortMyLawSchool | Testbook logo (https://testbook.com/)"
          class="md:w-[20rem] h-auto object-cover"
      /></a>
    </div>
  </div>

  <section class="bg-[#eef8ff]">
    <div class="max-w-full flex items-center justify-center">
      <NuxtImg
        loading="lazy"
        src="/assets/full.png"
        alt="SortMyLawSchool | Crafting India's Most Dependable Case Briefs for Better Scores"
      />
    </div>
  </section>

  <section>
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
      <h2 class="font-headline text-2xl font-semibold sm:text-3xl text-center">
        Relax, We've Got Your Back For All Your Academic Needs!
      </h2>

      <div class="grid sm:grid-cols-3 gap-16 sm:gap-8 mt-16 sm:mt-24">
        <div class="text-center">
          <div
            class="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2"
          >
            <div
              class="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center"
            >
              <video
                width="320"
                height="240"
                autoplay
                muted
                loop
                class="w-100 z-10 rounded-full autoplay"
              >
                <source src="assets\vlogger.mp4" type="video/mp4" />
                <source src="assets\vlogger.mp4" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div
              class="absolute inset-0 -translate-x-2 -translate-y-2 bg-sky-400 rounded-full"
            ></div>
          </div>
          <h3 class="font-headline text-xl sm:text-2xl mt-6 sm:mt-10">
            Case Briefs for Academics!
          </h3>
          <!-- <p class="leading-relaxed mt-4">Begin by envisioning the new look and features for your website.</p> -->
        </div>
        <div class="text-center">
          <div
            class="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2"
          >
            <div
              class="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center"
            >
              <video
                width="320"
                height="240"
                autoplay
                muted
                loop
                class="w-100 z-10 rounded-full autoplay"
              >
                <source src="assets\piggy-bank.mp4" type="video/mp4" />
                <source src="assets\piggy-bank.mp4" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div
              class="absolute inset-0 -translate-x-2 -translate-y-2 bg-sky-400 rounded-full"
            ></div>
          </div>
          <h3 class="font-headline text-xl sm:text-2xl mt-6 sm:mt-10">
            Accessible Quality Content!
          </h3>
          <!-- <p class="leading-relaxed mt-4">Collaborate with your design and development team to give your website a
                        fresh and modern design.</p> -->
        </div>
        <div class="text-center">
          <div
            class="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2"
          >
            <div
              class="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center"
            >
              <video
                width="320"
                height="240"
                autoplay
                muted
                loop
                class="w-100 z-10 rounded-full autoplay"
              >
                <source src="assets/success.mp4" type="video/mp4" />
                <source src="assets/success.mp4" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div
              class="absolute inset-0 -translate-x-2 -translate-y-2 bg-sky-400 rounded-full"
            ></div>
          </div>
          <h3 class="font-headline text-xl sm:text-2xl mt-6 sm:mt-10">
            Your Success, Our Victory!
          </h3>
          <!-- <p class="leading-relaxed mt-4">After the redesign, relaunch your website and welcome your audience to the
                        new experience.</p> -->
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonial -->
   <Testimonial />
  

  <!-- how it works -->

  <section>
    <!-- Container -->
    <div class="mx-auto max-w-7xl px-5 py-8 md:px-10 md:py-8 lg:py-8">
      <!-- Heading Div -->
      <div class="mx-auto w-full max-w-3xl">
        <!-- Component -->
        <div class="text-center">
          <!-- <p class="uppercase text-[#1353fe]">3 easy steps</p> -->
          <h2 class="text-2xl font-semibold capitalize md:text-5xl">
            Good <span class="text-sky-400">quality content</span> leads to...
          </h2>
        </div>
      </div>

      <div
        class="mx-auto grid grid-cols-1 gap-4 sm:justify-items-stretch md:grid-cols-3 lg:gap-8"
      >
        <div class="relative flex flex-col items-center gap-4 p-2 text-center">
          <div
            class="transition duration-300 ease-in-out hover:scale-110 mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl bg-white md:mb-6 lg:mb-8"
          >
            <p class="text-xl font-bold">
              <NuxtImg
                loading="lazy"
                class="w-40"
                src="/assets/5.png"
                alt="SortMyLawSchool | Good quality content leads to better grades"
              />
            </p>
          </div>
          <p class="mb-2 text-xl font-semibold">Better Grades !</p>
          <NuxtImg
            loading="lazy"
            src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639833af1925275b6f0b43e1_Vector%2032.svg"
            alt="SortMyLawSchool | Image"
            class="absolute bottom-[-33%] left-0 right-auto top-auto -z-10 hidden w-96 md:bottom-auto md:left-[136px] md:right-[-50%] md:top-[18%] md:inline-block lg:left-auto"
          />
        </div>

        <div class="relative flex flex-col items-center gap-4 p-2 text-center">
          <div
            class="transition duration-300 ease-in-out hover:scale-110 mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl bg-white md:mb-6 lg:mb-8"
          >
            <p class="text-xl font-bold">
              <NuxtImg
                loading="lazy"
                class="w-40"
                src="/assets/7.png"
                alt="SortMyLawSchool | Good quality content leads to better CV & internships"
              />
            </p>
          </div>
          <p class="mb-2 text-xl font-semibold">Better CV & Internships !</p>
        </div>

        <div class="relative flex flex-col items-center gap-4 p-2 text-center">
          <div
            class="transition duration-300 ease-in-out hover:scale-110 mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl bg-white md:mb-6 lg:mb-8"
          >
            <p class="text-xl font-bold">
              <NuxtImg
                loading="lazy"
                class="w-40 object-cover"
                src="/assets/6.png"
                alt="SortMyLawSchool | Good quality content leads to better colleges abroad"
              />
            </p>
          </div>
          <p class="mb-2 text-xl font-semibold">Better Colleges Abroad !</p>
        </div>
      </div>
    </div>
  </section>
  <!-- end section works -->
  <About />
</template>

<script setup>
import Testimonial from '~/components/testimonial.vue';

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
.bg-w3schools {
  background-image: url("/assets/chi.png");
  background-size: cover;
  object-fit: cover;
}

.knowledge-partner-card:hover .knowledge-partner-img {
  @apply grayscale-0;
}
</style>
