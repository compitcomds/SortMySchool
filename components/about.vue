<template>
  <section class="about-us mb-20 lg:mb-40">
    <div class="container mx-auto px-4 lg:px-10px-4 lg:px-32">
      <div
        class="flex flex-col-reverse md:flex-row items-center justify-between gap-4 lg:gap-8"
      >
        <!-- Text Content -->
        <div class="lg:w-1/2 w-full lg:space-y-5">
          <h2
            class="hidden md:block text-3xl mb-5 font-extrabold text-gray-900 sm:text-4xl"
          >
            Discover Our Mission
          </h2>
          <div class="block md:hidden">
            <div
              class="flex flex-wrap items-center w-full h-10 bg-gray-200"
            ></div>
          </div>
          <p class="my-4 text-gray-600 text-lg">
            We are dedicated to providing top-notch education and empowering
            future leaders in the field of law. Our programs are designed to
            offer hands-on learning, rigorous curriculum, and an inclusive
            environment for all students.
          </p>

          <!-- Buttons and Stats -->
          <div class="hidden md:block md:my-4 lg:my-0">
            <div
              class="flex flex-wrap items-center w-96 h-10 bg-gray-200"
            ></div>
          </div>

          <!-- Call to Action Button -->
          <a href="/subject" class="relative inline-flex lg:w-auto w-full justify-center lg:justify-start items-center px-12 lg:py-3 py-2 overflow-hidden text-lg font-medium text-sky-500 border-2 border-sky-500 rounded-full hover:text-white group hover:bg-gray-50">
            <span class="absolute left-0 block w-full h-0 transition-all bg-sky-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span class="relative">Learn More</span>
            </a>
          <!-- <a href="/subject" class="relative inline-flex w-full items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-sky-500 transition duration-300 ease-out border-2 border-sky-500 rounded-full shadow-md group">
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-sky-500 group-hover:translate-x-0 ease">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-sky-500 transition-all duration-300 transform group-hover:translate-x-full ease">Learn More</span>
            <span class="relative invisible">Learn More</span>
            </a> -->
          
        </div>

        <!-- Image Section -->

        <div
          class="mt-12 md:mt-0 flex flex-col lg:w-1/2 w-full justify-center items-center"
        >
          <h2
            class="md:hidden text-3xl mb-5 font-extrabold text-gray-900 sm:text-4xl"
          >
            Discover Our Mission
          </h2>
          <iframe
            class="w-full aspect-[16/9] md:aspect-[10/9] lg:aspect-[16/9]"
            src="https://www.youtube.com/embed/sspBhF1z-LU?si=pgBp29HiMwWkROZ3"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@media (min-width: 640px) {
  .about-us {
    padding: 2rem 0;
  }
}

@media (min-width: 1024px) {
  .about-us {
    padding: 0rem 0;
  }
}
</style>
