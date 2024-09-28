<template>
  <div class="flex flex-col-reverse md:flex-row gap-4 items-center mx-auto px-4 lg:px-40 pb-16">
    <!-- Left Side: Text and Button -->
    <div class="md:w-1/2 w-full mb-6 md:mb-0 md:text-left mt-6 md:mt-0 ">
      <h2 class="text-4xl font-bold mb-8">How We Help You</h2>
      <ul class="list-disc pl-5 space-y-6">
        <li class="text-xl">
          <a href="https://youtube.com/playlist?list=PL-1DBVyVi7EZD7b1d-idr6XR2Br8kxKmg&si=0KkP4LhA-qrF6Hdx" class="flex items-center hover:text-blue-500 ">Improve your English – Explore our Improve Reading Skills playlist. <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="ml-2 w-4 h-4 lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg></a>
        </li>
        <li class="text-xl">
          <a href="https://youtube.com/playlist?list=PL-1DBVyVi7EYNGuEvsmM2Ep0_gujUyDsB&si=3eg42Afmxzp9tQ13" class="flex items-center hover:text-blue-500">Get internships or jobs – Listen to our Legal Podcasts series. <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="ml-2 w-4 h-4 lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg></a>
        </li>
        <li class="text-xl">
          <a href="https://youtube.com/playlist?list=PL-1DBVyVi7EZRFmOv-NEHRq8hvNAZlCcM&si=d_wdnucjW3ncpOah" class="flex items-center hover:text-blue-500">Learn drafting – Check out our Get Practical Knowledge series. <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="ml-2 w-4 h-4 lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg></a>        </li>
        <li class="text-xl">
          <a href="https://youtube.com/playlist?list=PL-1DBVyVi7EYuQXWtMDz1QXe19hhNM3eq&si=SCGodrj_O1y33uxm" class="flex items-center hover:text-blue-500">Build your CV or SoP – Visit our Law Internship playlist. <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="ml-2 w-4 h-4 lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg></a>        </li>
        <li class="text-xl">
          <a href="https://chat.whatsapp.com/BXUajT2udYCGk7HRXgECuq" class="flex items-center hover:text-blue-500">Legal Jobs Update – Join our WhatsApp Community. <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="ml-2 w-4 h-4 lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg></a>
        </li>
      </ul>

      <!-- <a href="/subject"
        class="relative inline-flex lg:w-auto w-full justify-center lg:justify-start items-center px-12 lg:py-2 py-2 overflow-hidden text-lg font-medium text-sky-500 border-2 border-sky-500 rounded-full hover:text-white group hover:bg-gray-50">
        <span
          class="absolute left-0 block w-full h-0 transition-all bg-sky-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span
          class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </span>
        <span class="relative">Learn More</span>
      </a> -->
    </div>

    <!-- Right Side: Image Carousel -->
    <div class="carousel w-full md:w-1/2 h-56 md:h-96">
      <div id="slide1" class="carousel-item relative w-full">
        <img src="https://ccdstest.b-cdn.net/sort%20my%20law/careousel/22.png" class="w-full" />
        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" class="btn btn-circle">❮</a>
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img src="https://ccdstest.b-cdn.net/sort%20my%20law/careousel/22.png" class="w-full" />
        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" class="btn btn-circle">❮</a>
          <a href="#slide3" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <img src="https://ccdstest.b-cdn.net/sort%20my%20law/careousel/22.png" class="w-full" />
        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" class="btn btn-circle">❮</a>
          <a href="#slide4" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" class="carousel-item relative w-full">
        <img src="https://ccdstest.b-cdn.net/sort%20my%20law/careousel/22.png" class="w-full" />
        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" class="btn btn-circle">❮</a>
          <a href="#slide1" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
    <!-- End Slider -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
