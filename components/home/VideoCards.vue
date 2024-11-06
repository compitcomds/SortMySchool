<template>
  <div class="w-full mx-auto py-8">
    <div class="flex items-center justify-between">
      <h2 class="w-full font-semibold text-gray-700 mb-4 flex items-center ">
        <p class="flex items-center justify-between">
          <p class="text-2xl">Popular Category Introduction</p>
          <svg id="fi_13554816" class="w-60 h-20" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m23.939 12-3.454-1.995v1.653l-20.424.342 20.424.342v1.653z"></path>
          </svg>
        </p>
      </h2>
    </div>
    <swiper :slides-per-view="2" :space-between="60" :loop="true" :pagination="{ clickable: true }" :navigation="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }" :modules="modules" class="video-swiper" 
      :breakpoints="{
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
          spaceBetween: 50
        },
        1440: {
          slidesPerView: 2,
          spaceBetween: 60
        }
      }">
      <swiper-slide v-for="(category, index) in categories" :key="index">
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500"
          class="relative bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
          <div class="w-full h-72 overflow-hidden relative">
            <img v-if="playingIndex !== index" :src="category.thumbnail" class="w-full h-full object-cover"
              alt="Video thumbnail" />
            <iframe v-if="playingIndex === index" :src="`${category.video}?autoplay=1&mute=1`"
              class="w-full h-full object-cover" frameborder="0" allow="autoplay; encrypted-media"
              allowfullscreen></iframe>
            <div v-if="playingIndex !== index"
              class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
              @click="playVideo(index)">
              <button class="text-3xl font-bold text-white w-12 h-12">
                <img src="assets/images/play (1).svg" alt="">
              </button>
            </div>
          </div>
          <div class="p-4">
            <h3 class="text-xl font-semibold">{{ category.title }}</h3>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
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
  methods: {
    playVideo(index) {
      this.playingIndex = index;
    },
  },
};
</script>

<style>
@import 'swiper/css';
@import 'swiper/css/effect-fade';

/* Optional custom styling */
</style>
