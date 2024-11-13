<template>
  <div class="flex items-center justify-between px-5 lg:px-16 mb-6">
    <h2 class="w-full font-semibold text-gray-700 mb-4 flex items-center gap-6">
      <p class="text-2xl text-gray-800">What our students say?</p>
      <hr
        class="text-black bg-black h-[1.5px] w-[350px] mt-2 hidden lg:block"
      />
    </h2>
  </div>
  <div class="mx-5 lg:mx-16 p-6 bg-[#fef1e1] rounded-lg shadow-md flex flex-col lg:flex-row gap-6 lg:gap-0 items-center space-x-6">
    <!-- Image Section -->
    <div class="lg:w-1/3 flex items-center justify-center">
      <img :src="testimonials[currentIndex].image" alt="User Image" class="w-full rounded-lg max-w-[400px] h-full max-h-[250px]" />
    </div>

    <!-- Content Section -->
    <div class="lg:w-2/3 space-y-4 lg:space-y-6 xl:space-y-8">
      <div class="space-y-3">
      <p class=" text-gray-600 bg-[#DED5D1] text-sm font-semibold py-1 px-4 rounded-full inline-block self-start">
                User Story
            </p>
      <h2 class="text-2xl text-gray-900">
        {{ testimonials[currentIndex].quote }}
      </h2></div>
      <hr class="bg-slate-600 text-black h-[1px] mt-4">
      <!-- Navigation Buttons -->
      <div class="flex items-center justify-between space-x-4">
        <div class="text-gray-700">
          <p class="font-semibold text-xl">{{ testimonials[currentIndex].name }}</p>
          <p class="text-sm">{{ testimonials[currentIndex].position }}</p>
        </div>
        <div class="flex items-center space-x-4 pt-4">
          <button @click="prevSlide"
            class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition">
            <span class="text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" class="lucide lucide-move-left">
                <path d="M6 8L2 12L6 16" />
                <path d="M2 12H22" />
              </svg></span>
          </button>
          <button @click="nextSlide"
            class="w-10 h-10 flex items-center justify-center rounded-full bg-[#fef1e1] text-black border border-gray-300 hover:bg-gray-200 transition">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-move-right">
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      testimonials: [
        {
          image: "https://readymadeui.com/team-2.webp",
          quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consequatur culpa commodi. Veniam, ratione culpa sed quam explicabo tenetur earum.",
          name: "Julia Roberts",
          position: "Product and Sales Manager",
        },
        {
          image: "https://readymadeui.com/team-3.webp",
          quote: "Ipsum Lorem dolor sit amet consectetur adipisicing elit. Corrupti consequatur culpa commodi. Veniam, ratione culpa sed quam explicabo tenetur earum.",
          name: "Michael Johnson",
          position: "Operations Head",
        },
        {
          image: "https://readymadeui.com/team-4.webp",
          quote: "Dolor sit Lorem ipsum amet consectetur adipisicing elit. Corrupti consequatur culpa commodi. Veniam, ratione culpa sed quam explicabo tenetur earum.",
          name: "Sara Lee",
          position: "Marketing Director",
        },
      ],
    };
  },
  mounted() {
    this.startAutoplay();
  },
  beforeDestroy() {
    this.stopAutoplay();
  },
  methods: {
    nextSlide() {
      this.currentIndex =
        (this.currentIndex + 1) % this.testimonials.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.testimonials.length) %
        this.testimonials.length;
    },
    startAutoplay() {
      this.autoplayInterval = setInterval(this.nextSlide, 3000); // Change slide every 3 seconds
    },
    stopAutoplay() {
      clearInterval(this.autoplayInterval);
    },
  },
};
</script>

<style scoped>
/* Additional styling if needed */
</style>
