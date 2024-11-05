<template>
  <div class="w-full mx-auto py-8">
    <h2 class="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-6 pb-6">
      <p class="text-2xl">Popular Category Introduction</p>
      <div class="text-black mt-1 bg-black h-[0.7px] lg:w-56"></div>
    </h2>
    <swiper :slides-per-view="2" :space-between="60" :loop="true" :pagination="{ clickable: true }" :navigation="true"
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
          spaceBetween: 50
        },
        1440: {
          slidesPerView: 2,
          spaceBetween: 60
        }
      }">
      <swiper-slide v-for="(category, index) in categories" :key="index">
        <div data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1000" class="relative bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
          <div class="w-full h-60 overflow-hidden relative">
            <img v-if="playingIndex !== index" :src="category.thumbnail" class="w-full h-full object-cover"
              alt="Video thumbnail" />
            <iframe v-if="playingIndex === index" :src="`${category.video}?autoplay=1&mute=1`"
              class="w-full h-full object-cover" frameborder="0" allow="autoplay; encrypted-media"
              allowfullscreen></iframe>
            <div v-if="playingIndex !== index"
              class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
              @click="playVideo(index)">
              <button class="text-3xl font-bold text-white">▶️</button>
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
          thumbnail: "https://img.youtube.com/vi/ZR0fWhjLVk8/0.jpg",
        },
        {
          title: "Rajasthan Judiciary",
          participants: "943,101",
          video: "https://www.youtube.com/embed/ZR0fWhjLVk8",
          thumbnail: "https://img.youtube.com/vi/ZR0fWhjLVk8/0.jpg",
        },
        {
          title: "Rajasthan Judiciary",
          participants: "523,401",
          video: "https://www.youtube.com/embed/ZR0fWhjLVk8",
          thumbnail: "https://img.youtube.com/vi/ZR0fWhjLVk8/0.jpg",
        },
        {
          title: "Rajasthan Judiciary",
          participants: "342,221",
          video: "https://www.youtube.com/embed/ZR0fWhjLVk8",
          thumbnail: "https://img.youtube.com/vi/ZR0fWhjLVk8/0.jpg",
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
