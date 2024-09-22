<template>
  <section class="about-us mb-40">
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
          <nuxt-link
            to="/subject"
            class="flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-800 transition duration-300"
          >
            <p class="text-lg font-bold">Learn More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </nuxt-link>
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
            class="w-full aspect-[16/9]"
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
