<template>
  <section class="text-white w-full relative">
    <div class="w-full">
      <!-- Doctor Image Section with responsive width and height -->
      <transition name="fade" mode="out-in">
        <img
          :key="slides[currentSlide].lawBanner"
          class="w-full object-cover h-[160px] sm:h-auto"
          :src="slides[currentSlide].lawBanner"
          alt="Slide Image"
        />
      </transition>

      <button
        @click="changeSlideValue(currentSlide - 1)"
        class="absolute top-1/2 -translate-y-1/2 left-5 lg:left-10 z-50 rounded-full text-black bg-zinc-100"
      >
        <span class="sr-only">Left Chevron</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-left w-6 sm:w-8"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        @click="() => changeSlideValue(currentSlide + 1)"
        class="absolute top-1/2 -translate-y-1/2 right-5 lg:right-10 z-50 rounded-full text-black bg-zinc-100"
      >
        <span class="sr-only">Righy Chevron</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right w-6 sm:w-8"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      <div
        class="absolute bottom-0 left-24 text-left text-black hidden lg:block p-5 w-1/2"
      >
        <h2 class="text-2xl font-bold mb-2 text-white">
          {{ slides[currentSlide].heading }}
        </h2>
        <p class="mb-3 text-sm text-white">
          {{ slides[currentSlide].description }}
        </p>
      </div>
    </div>

    <!-- Pagination Dots -->
    <div class="hidden lg:block">
      <div
        class="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2"
      >
        <span
          v-for="(slide, index) in slides"
          :key="index"
          @click="() => changeSlideValue(index)"
          :class="[
            'rounded-full cursor-pointer',
            currentSlide === index
              ? 'bg-blue-500 h-2.5 w-2.5'
              : 'bg-blue-500/20 h-2.5 w-2.5',
          ]"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
const currentSlide = ref(0);
const slideInterval = ref(null);
const slides = [
  {
    lawBanner: "https://ccdstest.b-cdn.net/sort%20my%20law/1.png",
    heading: "Slide 1 Heading",
    description:
      "The company itself is a very successful company. No one, therefore, takes the pains of choosing the kind of things that are praised by the architect.",
    tags: [
      { label: "Learn More", link: "https://example.com/learn-more" },
      { label: "Contact Us", link: "https://example.com/contact" },
    ],
  },
  {
    lawBanner: "https://ccdstest.b-cdn.net/sort%20my%20law/2.png",
    heading: "Slide 2 Heading",
    description:
      "The company itself is a very successful company. No one, therefore, takes the pains of choosing the kind of things that are praised by the architect.",
    tags: [
      { label: "About Us", link: "https://example.com/about" },
      { label: "Services", link: "https://example.com/services" },
    ],
  },
  {
    lawBanner: "https://ccdstest.b-cdn.net/sort%20my%20law/3.png",
    heading: "Slide 3 Heading",
    description:
      "The company itself is a very successful company. No one, therefore, takes the pains of choosing the kind of things that are praised by the architect.",
    tags: [
      { label: "Products", link: "https://example.com/products" },
      { label: "Support", link: "https://example.com/support" },
    ],
  },
  {
    lawBanner: "https://ccdstest.b-cdn.net/sort%20my%20law/4.png",
    heading: "Slide 4 Heading",
    description:
      "The company itself is a very successful company. No one, therefore, takes the pains of choosing the kind of things that are praised by the architect.",
    tags: [
      { label: "FAQ", link: "https://example.com/faq" },
      { label: "Blog", link: "https://example.com/blog" },
    ],
  },
];

const startSlideShow = () => {
  slideInterval.value = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length;
  }, 5000); // Change slide every 5 seconds
};

const changeSlideValue = (number) => {
  currentSlide.value = number < 0 ? slides.length - 1 : number % slides.length;
  clearInterval(slideInterval.value);
  slideInterval.value = null;
  startSlideShow();
};

onMounted(() => {
  startSlideShow();
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
  .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
