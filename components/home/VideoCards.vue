<template>
  <div class="w-full mx-auto py-8">
    <div class="flex items-center justify-between px-5 lg:px-16 mb-6">
      <h2 class="w-full font-semibold text-gray-700 mb-4 flex items-center gap-6">
        <p class="text-2xl">Popular Category</p>
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
        title: "Moot Court Series",
        participants: "793,901",
        video: "",
        thumbnail: "https://ccdstest.b-cdn.net/sort%20my%20law/video%20card/vc1.jpg", // Replace with your actual image path
      },
      {
        title: "Daily Reading Comprehension",
        participants: "943,101",
        video: "https://www.youtube.com/embed/LuTZlpRBhPA?si=AduVGdeP5DkOPIc6",
        thumbnail: "https://ccdstest.b-cdn.net/sort%20my%20law/video%20card/vc2.jpg", // Replace with your actual image path
      },
      {
        title: "AIBE Solved Papers",
        participants: "523,401",
        video: "https://www.youtube.com/embed/CSyqJaqOAG0?si=D_84sKM3yniPPrBZ",
        thumbnail: "https://ccdstest.b-cdn.net/sort%20my%20law/video%20card/vc3.jpg", // Replace with your actual image path
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
