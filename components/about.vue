<template>
  <section class="about-us ">
    <div class="container mx-auto px-5 lg:px-10px-4 lg:px-32">
      <div class="flex flex-col-reverse md:flex-row items-center justify-between gap-4 lg:gap-8">
        
        <!-- Text Content -->
        <div class="lg:w-1/2 w-full lg:space-y-5">
          <div class="block md:hidden">
            <div class="flex flex-wrap justify-between items-center">
              <a
                class="relative px-3 py-2 m-2 flex gap-2 rounded-full shadow-sm sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 text-gray-900 bg-gray-200"
                href="#"
              >
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
                  class="lucide lucide-bell-ring"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  <path d="M4 2C2.8 3.7 2 5.7 2 8" />
                  <path d="M22 8c0-2.3-.8-4.3-2-6" />
                </svg>
                <span class="text-sm">21.8k Subscribers</span>
              </a>
              <a
                class="relative flex gap-2 px-3 py-2 m-2 rounded-full shadow-sm sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 text-gray-900 bg-gray-200"
                href="#"
              >
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
                  class="lucide lucide-eye"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <span class="text-sm">8 Lakh Views</span>
              </a>
            </div></div>
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Discover Our Mission
          </h2>
          <p class="mt-4 text-gray-600 text-lg p-2">
            We are dedicated to providing top-notch education and empowering future leaders in the field of law. Our programs are designed to offer hands-on learning, rigorous curriculum, and an inclusive environment for all students.
          </p>

          <!-- Buttons and Stats -->
           <div class="hidden md:block md:my-4 lg:my-0">
          <div class="flex flex-wrap items-center">
            <a
              class="relative px-3 py-2 m-2 flex gap-2 rounded-md shadow-sm sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 text-gray-900 bg-gray-200"
              href="#"
            >
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
                class="lucide lucide-bell-ring"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                <path d="M4 2C2.8 3.7 2 5.7 2 8" />
                <path d="M22 8c0-2.3-.8-4.3-2-6" />
              </svg>
              <span class="text-sm">21.8k Subscribers</span>
            </a>
            <a
              class="relative flex gap-2 px-3 py-2 m-2 rounded-md shadow-sm sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 text-gray-900 bg-gray-200"
              href="#"
            >
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
                class="lucide lucide-eye"
              >
                <path
                  d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span class="text-sm">8 Lakh Views</span>
            </a>
          </div></div>

          <!-- Call to Action Button -->
          <a
            href="/"
            class="flex items-center justify-center gap-2 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300"
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
          </a>
        </div>

        <!-- Image Section -->
        <div class="mt-12 md:mt-0 flex lg:w-1/2 w-full justify-center items-center">
          <img
            src="assets\law_shcools_himachal.png"
            alt="About Us Image"
            class="object-cover h-60 w-full md:h-96 "
          />
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
