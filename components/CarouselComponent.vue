<template>
  <div class="flex flex-col-reverse md:flex-row gap-4 items-center pb-16 my-0 md:py-5">
    <!-- Left Side: Text and Button -->
    <div class="md:w-1/2 w-full mb-6 md:mb-0  md:text-left mt-6 md:mt-0">
      <h2 class="text-4xl font-bold mb-4">Your Heading</h2>
      <p class="text-lg mb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, optio eos cumque sit magni nostrum officia iure provident repellat deserunt veniam id amet consequuntur rerum deleniti unde voluptatem aliquid pariatur, dolorum quisquam, quasi vero. Blanditiis quae magni aperiam quo vero, obcaecati excepturi expedita magnam totam veritatis fugiat dolor tempore praesentium!
      </p>
      <button
        @click="handleClick"
        class="bg-blue-500 text-white lg:px-10 py-2 w-full lg:w-auto rounded-full hover:bg-blue-600 transition duration-300"
      >
        Click Here
      </button>
    </div>

    <!-- Right Side: Image Carousel -->
    <div class="carousel w-full md:w-1/2 h-56 md:h-96">
      <div id="slide1" class="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
          class="w-full"
        />
        <div
          class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
        >
          <a href="#slide4" class="btn btn-circle">❮</a>
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
          class="w-full"
        />
        <div
          class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
        >
          <a href="#slide1" class="btn btn-circle">❮</a>
          <a href="#slide3" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
          class="w-full"
        />
        <div
          class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
        >
          <a href="#slide2" class="btn btn-circle">❮</a>
          <a href="#slide4" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" class="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          class="w-full"
        />
        <div
          class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
        >
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
