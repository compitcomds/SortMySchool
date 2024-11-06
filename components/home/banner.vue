<template>
  <div class="h-screen bg-white z-10 w-full -mt-16 md:-mt-14 p-2 md:p-6">
    <swiper 
      :slides-per-view="1" 
      :loop="true" 
      :autoplay="{ delay: 6000, disableOnInteraction: false }" 
      :navigation="true"
      :pagination="{ clickable: true }"
      :modules="modules"
      class="mySwiper carousel w-full h-full"
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
/* Swiper navigation buttons styling */
/* Increase specificity and use direct resizing if necessary */
.mySwiper .swiper-button-prev,
.mySwiper .swiper-button-next {
  color: rgb(0, 68, 0) !important;
  background-color: aliceblue;
  border-radius: 50%;
  padding: 25px;
  margin-top: 200px;
}

/* Default font size for larger screens */
.mySwiper .swiper-button-prev::after,
.mySwiper .swiper-button-next::after {
  font-size: 30px !important; /* Default font size for larger screens */
}

/* Media query for tablets and smaller screens */
@media (max-width: 768px) {
  .mySwiper .swiper-button-prev::after,
  .mySwiper .swiper-button-next::after {
    font-size: 18px !important; /* Adjusted font size for tablets */
  }
}

/* Media query for mobile screens */
@media (max-width: 480px) {
  .mySwiper .swiper-button-prev::after,
  .mySwiper .swiper-button-next::after {
    font-size: 14px !important; /* Further reduced font size for mobile screens */
  }
}


/* Optional: to style the Swiper container itself */
.mySwiper {
  background-color: white;
  border-radius: 8px; /* Example for rounded corners */
}
.swiper-pagination-bullet{
  background-color:  rgb(0, 68, 0);

}

</style>
