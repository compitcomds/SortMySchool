<template>
  <header
    class="flex flex-col flex-wrap sm:justify-center sm:flex-nowrap z-50 w-full bg-stone-50 text-sm sm:py-0 text-black">
    <div class="inline-flex gap-5 justify-between items-center sm:p-0 md:p-0 lg:py-6 lg:px-10">

      <div class="h-auto w-36 hidden sm:block md:block"><nuxt-link to="/">
          <img src="https://www.3forty.media/zosia/demo-5/wp-content/uploads/2022/09/zosia-logo.png" alt=""
            srcset="" /></nuxt-link>
        <p>A personal blog theme</p>
      </div>

      <div class="object-cover lg:w-1/2 lg:rounded-lg"><nuxt-link to="https://www.youtube.com/@fglawkit">
          <img
            src="https://yt3.googleusercontent.com/tis5V1pB6fvLi4yEXiivr9tCfw9gXNj95uyafLNH8MNzV058-yT048b4inWqeIkIO1wHkZcTyA=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
            alt="" srcset="" class="rounded-lg" /></nuxt-link>
      </div>
    </div>
    <hr>
    <mynav />
    <hr>
    <!-- here is cuted dipesh nav  -->
  </header>
  <slot />
  <myfooter />
  <!-- back to top button -->
  <div class="fixed bottom-0 right-0 p-4">
    <button class="bg-indigo-800 text-white rounded-full w-10 h-10 flex items-center justify-center" @click="backToTop">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18">
        </path>
      </svg>
    </button>
  </div>
</template>


<script>
export default {
  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // This smoothens the scroll
      });
    }
  }
}
</script>


<style>
/* .nav-item {
  @apply font-medium text-gray-500 py-3 md:py-6 dark:text-neutral-400;
}

.nav-active,
.router-link-exact-active {
  @apply font-medium text-blue-600 py-3 md:py-6 dark:text-blue-500;
} */

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
