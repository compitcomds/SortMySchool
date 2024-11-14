<template>
  <div class="aspect-[16/9] bg-white z-10 mt-10 md:-mt-2 p-2 md:p-6">
    <swiper :slides-per-view="1" :loop="true" :autoplay="{ delay: 6000, disableOnInteraction: false }"
      :navigation="true" :pagination="{ clickable: true }" :modules="modules" class="mySwiper  h-full w-full">
      <swiper-slide>
        <div class="w-full h-full">
          <img src="/assets/banners/newbanner1.png" alt="" class="w-full h-full rounded-3xl" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="w-full h-full">
          <img src="/assets/banners/newbanner2.png" alt="" class="w-full h-full rounded-3xl" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="w-full h-full">
          <img src="/assets/banners/newbanner1.png" alt="" class="w-full h-full rounded-3xl" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="w-full h-full">
          <img src="/assets/banners/newbanner2.png" alt="" class="w-full h-full rounded-3xl" />
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
 
}
/* Default margin-top for larger screens */
.mySwiper .swiper-button-prev,
.mySwiper .swiper-button-next {
  margin-top: 200px;
}
/* Further adjust for mobile screens */
@media (min-width: 1340px) and (max-width: 1960px) {
  .mySwiper .swiper-button-prev,
  .mySwiper .swiper-button-next {
    margin-top: 380px;
  }
}
/* Further adjust for mobile screens */
@media (min-width: 1024px) and (max-width: 1339px) {
  .mySwiper .swiper-button-prev,
  .mySwiper .swiper-button-next {
    margin-top: 250px;
  }
}
/* Further adjust for mobile screens */
@media (max-width: 1024px) {
  .mySwiper .swiper-button-prev,
  .mySwiper .swiper-button-next {
    margin-top: 250px;
  }
}
/* Adjust for tablets and smaller screens */
@media (max-width: 768px) {
  .mySwiper .swiper-button-prev,
  .mySwiper .swiper-button-next {
    margin-top: 120px;
  }
}

/* Further adjust for mobile screens */
@media (max-width: 480px) {
  .mySwiper .swiper-button-prev,
  .mySwiper .swiper-button-next {
    margin-top: 250px;
  }
}

/* Default font size for larger screens */
.mySwiper .swiper-button-prev::after,
.mySwiper .swiper-button-next::after {
  font-size: 30px !important;
  /* Default font size for larger screens */
}

/* Media query for tablets and smaller screens */
@media (max-width: 768px) {

  .mySwiper .swiper-button-prev::after,
  .mySwiper .swiper-button-next::after {
    font-size: 18px !important;
    /* Adjusted font size for tablets */
  }
}

/* Media query for mobile screens */
@media (max-width: 480px) {

  .mySwiper .swiper-button-prev::after,
  .mySwiper .swiper-button-next::after {
    font-size: 14px !important;
    /* Further reduced font size for mobile screens */
  }
}


/* Optional: to style the Swiper container itself */
.mySwiper {
  background-color: white;
  border-radius: 8px;
  /* Example for rounded corners */
}

.swiper-pagination-bullet {
  background-color: rgb(0, 68, 0);

}
</style>
