<template>
  <!-- <div class="bg-[#ffffff] w-full"> -->
    <!-- <HomeBanner />
    <HomeClient /> -->
    <!-- <div class=" space-y-10"> -->

      <!-- <HomeWhyus class="px-5 lg:px-16" />
      <HomePartners class="px-5 lg:px-16" />
      <HomeBlogs />
      <HomeVideoCards /> -->
      <!-- <HomeCourses class="px-5 lg:px-16"  /> -->
      <!-- <HomeTestimonials class="px-5 lg:px-16"  /> -->
      <!-- <HomeTesti class="" /> -->

      <!-- <HomeForm class="px-5 lg:px-16" /> -->
    <!-- </div> -->
  <!-- </div> -->
   <div
    class="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-center px-5"
    style="background-image:url('https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');"
  >
    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-gray-900 opacity-75"></div>

    <!-- Main Content -->
    <div class="z-50 flex flex-col justify-center items-center text-white w-full h-screen">
      <span class="text-xl font-bold mb-4 w-36"><NuxtImg loading="lazy" src="/assets/MainLogo.png" alt="SortMyLawSchool | Logo" /></span>
      <h1 class="text-5xl font-semibold mb-4">We are <b>Almost</b> there!</h1>
      <p class="text-lg mb-4">Stay tuned for something amazing!!!</p>
      <p class="text-md flex flex-col lg:flex-row items-center gap-2">
        For any queries, please email us at :
        <a href="mailto:parth@fglawkit.com"
              class="flex items-center gap-2 group text-white hover:text-gray-500 hover:underline transition">
              <IconMail class="group-hover:hidden" />
              <IconMailOpen class="hidden group-hover:block opacity-0 group-hover:opacity-100" />
              parth@fglawkit.com
            </a>
      </p>
    </div>
  </div>
</template>
