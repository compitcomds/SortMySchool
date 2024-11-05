<template>
  <NuxtLoadingIndicator />
  <mynav />
  <slot />
  <MobileNav class="block md:hidden" />
  <FooterNew class="hidden md:block" />
  <!-- back to top button -->
  <div class="fixed z-50 bottom-0 right-0 p-4">
    <button class="bg-sky-400 text-white rounded-full w-10 h-10 flex items-center justify-center" @click="backToTop"
      aria-label="Go to top">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>
  </div>
  <SearchBox />

  <!-- <Popup /> -->
</template>

<script setup>
useSeoMeta({
  robots: "index, follow",
});
</script>

<style></style>
