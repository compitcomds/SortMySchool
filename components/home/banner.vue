<template>
  <div class="h-screen bg-white z-10 w-full -mt-16 md:-mt-14 p-2 md:p-6">
    <swiper 
      :slides-per-view="1" 
      :loop="true" 
      :autoplay="{ delay: 6000, disableOnInteraction: false }" 
      :navigation="true"
      :pagination="{ clickable: true }"
      :modules="modules"
      class="carousel w-full h-full"
    >
      <swiper-slide>
        <div class="w-full h-full">
          <img
            src="https://picsum.photos/1920/1080"
            alt=""
            class="w-full h-full rounded-3xl"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="w-full h-full">
          <img
            src="https://picsum.photos/id/96/1920/1080"
            alt=""
            class="w-full h-full rounded-3xl"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="w-full h-full">
          <img
            src="https://picsum.photos/id/12/1920/1080"
            alt=""
            class="w-full h-full rounded-3xl"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="w-full h-full">
          <img
            src="https://picsum.photos/id/26/1920/1080"
            alt=""
            class="w-full h-full rounded-3xl"
          />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Autoplay],
    };
  },
};
</script>

<style>
@import 'swiper/css';
@import 'swiper/css/navigation';
@import 'swiper/css/pagination';
</style>
