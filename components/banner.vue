<template>
  <section class="text-white w-full relative">
    <div class="w-full">
      <!-- Image Section with responsive width and height -->
      <transition name="fade" mode="out-in">
        <a
          :href="slides[currentSlide].tags[0].link" 
          target="_blank"
          class="block"
        >
          <img
            :key="slides[currentSlide].lawBanner"
            class="w-full object-cover "
            :src="slides[currentSlide].lawBanner"
            alt="Slide Image"
          />
        </a>
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
        <span class="sr-only">Right Chevron</span>
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
    </div>

    <!-- Pagination Dots -->
    <div class="hidden lg:block">
      <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
import { ref, onMounted } from 'vue';

const currentSlide = ref(0);
const slideInterval = ref(null);
const slides = [
  {
    lawBanner: "https://ccdstest.b-cdn.net/sort%20my%20law/banners/8.png",
    tags: [
      { label: "Learn More", link: "https://youtu.be/f4yzXCX54pQ?si=EeQFC4fCFCaz6_GB" },
    ],
  },
  {
    lawBanner: "https://ccdstest.b-cdn.net/sort%20my%20law/banners/10.png",
    tags: [
      { label: "Products", link: "https://youtu.be/ZR0fWhjLVk8?si=NkRYe3Vt7nnXUQ6k" },
    ],
  },
  {
    lawBanner: "https://ccdstest.b-cdn.net/sort%20my%20law/banners/12.png",
    tags: [
      { label: "FAQ", link: "https://youtu.be/LuTZlpRBhPA?si=n1wQNPK3QlUfCdJe" },
    ],
  },
  {
    lawBanner: "https://ccdstest.b-cdn.net/sort%20my%20law/banners/13.png",
    tags: [
      { label: "Learn More", link: "https://youtu.be/KAxGmimEpyk?si=-unIIKonJCdsVxUN" },
    ],
  },
  {
    lawBanner: "https://ccdstest.b-cdn.net/sort%20my%20law/banners/15.png",
    tags: [
      { label: "Products", link: "https://youtu.be/pHOB3miF3fU?si=qD8JXn0cRnnJ2nCa" },
    ],
  },
  {
    lawBanner: "https://ccdstest.b-cdn.net/sort%20my%20law/banners/17.png",
    tags: [
      { label: "FAQ", link: "https://youtu.be/auHjuYt9Yp0?si=LPwpobYfwyLlOPWD" },
    ],
  },
  // Add more slides as needed...
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
.fade-leave-to {
  opacity: 0;
}
</style>
