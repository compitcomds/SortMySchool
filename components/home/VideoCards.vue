<template>
  <div class="w-full mx-auto py-8">
    <div class="flex items-center justify-between px-5 lg:px-16 mb-6">
      <h2 class="w-full font-semibold text-gray-700 mb-4 flex items-center gap-6">
        <p class="text-2xl">Popular Category Introduction</p>
        <hr class="text-black bg-black h-[1.5px] w-[450px] mt-2 hidden lg:block">
      </h2>
    </div>
    <swiper :slides-per-view="2" :space-between="60" :loop="true" :pagination="{ clickable: true }"
      :autoplay="{ delay: 5000, disableOnInteraction: false }" :modules="modules" class="video-swiper" :breakpoints="{
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1440: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }">
      <swiper-slide v-for="(category, index) in categories" :key="index">
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500"
          class="relative  text-white overflow-hidden shadow-lg">
          <div class="w-full h-[348px] overflow-hidden relative">

            <h3 class="absolute uppercase text-4xl text-white font-bold p-8">{{ category.title }}</h3>
            <a :href="category.video"
              class="absolute z-10 rounded-full border bg-white hover:bg-black text-black p-3 hover:text-white bottom-8 right-10"><svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-move-up-right">
                <path d="M13 5H19V11" />
                <path d="M19 5L5 19" />
              </svg></a>
            <img :src="category.thumbnail" class="w-full h-full object-cover" alt="Video thumbnail" />
            
            <div class="absolute inset-0 flex items-center justify-center">
              <a :href="category.video" class="text-3xl font-bold bg-white rounded-full p-3 bg-opacity-70 text-white w-12 h-12">
                <img src="assets/images/play.png" alt="">
              </a>
            </div>

          </div>

        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
// import { Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // return {
    //   modules: [Navigation],
    // };
  },
  data() {
    return {
      categories: [
        {
          title: "Rajasthan Judiciary",
          participants: "793,901",
          video: "https://www.youtube.com/embed/ZR0fWhjLVk8",
          thumbnail: "https://img.youtube.com/vi/ZR0fWhjLVk8/0.jpg", // Correct thumbnail URL
        },
        {
          title: "LLM Scholarships in USA",
          participants: "943,101",
          video: "https://www.youtube.com/embed/LuTZlpRBhPA?si=AduVGdeP5DkOPIc6",
          thumbnail: "https://img.youtube.com/vi/LuTZlpRBhPA/0.jpg", // Correct thumbnail URL
        },
        {
          title: "How to become Data Privacy & Technology Lawyer",
          participants: "523,401",
          video: "https://www.youtube.com/embed/CSyqJaqOAG0?si=D_84sKM3yniPPrBZ",
          thumbnail: "https://img.youtube.com/vi/CSyqJaqOAG0/0.jpg", // Correct thumbnail URL
        },
        {
          title: "LLM From Paris",
          participants: "342,221",
          video: "https://www.youtube.com/embed/jnUJCumOAQs?si=X3OJCKmJm2MD6j9_",
          thumbnail: "https://img.youtube.com/vi/jnUJCumOAQs/0.jpg", // Correct thumbnail URL
        },
      ],
      playingIndex: null,
    };
  },
  
};
</script>

<style>
@import 'swiper/css';
@import 'swiper/css/effect-fade';

/* Optional custom styling */
</style>
