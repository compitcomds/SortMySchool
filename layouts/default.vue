<template>
  <NuxtLoadingIndicator />
  <!-- <mynav /> -->
  <slot />
  <!-- <MobileNav class="block lg:hidden" />
  <FooterNew class="hidden lg:block" /> -->
  <!-- Back to top button -->
  <div v-if="showButton" class="fixed z-50 bottom-6 hidden lg:block right-5 p-4">
    <button
      class="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
      @click="backToTop"
      aria-label="Go to top"
    >
      <svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        ></path>
      </svg>
    </button>
  </div>
  <SearchBox />
  <!-- <Popup /> -->
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

useSeoMeta({
  robots: "index, follow",
});

const showButton = ref(false);

// Function to handle scroll event
const handleScroll = () => {
  showButton.value = window.scrollY > 300; // Show button after scrolling down 300px
};

// Define the backToTop function
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Add scroll event listener on mount
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Cleanup event listener on unmount
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
/* Additional styles for the button */
button {
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  transform: translateY(-2px); /* Slight lift on hover */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Enhance shadow on hover */
}

/* Optional: Styles for the button when it is focused */
button:focus {
  outline: none; /* Remove default outline */
  box-shadow: 0 0 0 4px rgba(66, 153, 225, 0.6); /* Focus outline */
}
</style>
