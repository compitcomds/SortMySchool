<template>
  <NuxtLoadingIndicator />
  <header
    class="flex flex-col flex-wrap sm:justify-center sm:flex-nowrap z-50 w-full bg-stone-50 text-sm sm:py-0 text-black"
  >
    
    <hr />
    <mynav />
    <hr />
  </header>
  <slot />
  <MobileNav class="block lg:hidden" />
  <myfooter class="hidden lg:block" />
  <!-- back to top button -->
  <div class="fixed bottom-0 right-0 p-4">
    <button
      class="bg-sky-400 text-white rounded-full w-10 h-10 flex items-center justify-center"
      @click="backToTop"
      aria-label="Go to top"
    >
      <svg
        class="w-6 h-6"
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
</template>

<script setup>
const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

useSeoMeta({
  robots: "index, follow",
});
</script>

<style>
body {
  background-color: aliceblue;
}

* {
  -webkit-user-select: none;
  /* Safari */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* IE 10+ */
  user-select: none;
  /* Standard syntax */
}
</style>
