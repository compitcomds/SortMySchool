<template>
  <div class="flex items-center justify-between px-5 lg:px-16 mb-6">
    <h2 class="w-full font-semibold text-gray-700 mb-4 flex items-center gap-6">
      <p class="text-2xl text-gray-800">What our students say?</p>
      <hr
        class="text-black bg-black h-[1.5px] w-[350px] mt-2 hidden lg:block"
      />
    </h2>
  </div>
  <div class="w-full mx-auto bg-white flex flex-col lg:relative lg:max-w-5xl">
    <swiper
      :slides-per-view="1"
      :loop="true"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :modules="modules"
      :navigation="navigationOptions"
      class="w-full testimonial-swiper mb-16 rounded-lg mySwiper"
    >
      <swiper-slide
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="relative text-gray-700 rounded-lg p-6 h-auto lg:px-16 mb-5 w-full"
      >
        <div class="bg-[#fff2e8] p-3 lg:p-10 rounded-3xl">
          <div class="flex items-center mb-4 px-10">
            <img
              :src="testimonial.image"
              alt="User avatar"
              class="w-12 h-12 rounded-full object-cover"
            />
            <div class="ml-4">
              <h3 class="text-lg font-semibold">{{ testimonial.name }}</h3>
              <p class="text-yellow-500 flex items-center">
                <span class="mr-1">⭐ {{ testimonial.rating }}</span>
              </p>
            </div>
            <p class="ml-auto text-sm text-gray-400">{{ testimonial.date }}</p>
          </div>
          <p class="text-gray-600 mb-4 px-10">{{ testimonial.feedback }}</p>
          <div class="absolute hidden -bottom-10 -left-0">
            <img
              src="assets/images/books.svg"
              alt="Books icon"
              class="w-20 h-20"
            />
          </div>
          <!-- Social Links Section -->
           <div class="absolute right-6 bottom-6 bg-white custom-rounded-lb">
          <div class="flex justify-center mt-3 pl-3 pb-1 lg:pr-12">
            <div
              v-for="(social, index) in testimonial.socialLinks"
              :key="index"
              :href="social.link"
              target="_blank"
              class="bg-[#fff2e8] px-2 py-4"
            >
              <a :href="social.link" v-if="social.name === 'Facebook'">
                <svg class="w-6 h-6" id="fi_3670274" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><circle cx="256" cy="256" r="52.5"></circle><path d="m256 6c-138.071 0-250 111.929-250 250s111.929 250 250 250 250-111.929 250-250-111.929-250-250-250zm154.458 313.54c-1.2 23.768-7.879 47.206-25.2 64.343-17.489 17.3-41.038 23.746-65.035 24.934h-128.445c-24-1.188-47.546-7.63-65.035-24.934-17.322-17.137-24-40.575-25.2-64.343v-127.08c1.2-23.768 7.879-47.206 25.2-64.344 17.489-17.3 41.038-23.746 65.035-24.933h128.444c24 1.187 47.546 7.63 65.035 24.933 17.322 17.138 24 40.576 25.2 64.344z"></path><path d="m318.6 132.138c-31.286-.858-93.906-.858-125.192 0-16.281.447-34.738 4.5-46.338 16.89-12.054 12.879-16.609 28.439-17.071 45.846-.812 30.552 0 122.252 0 122.252.529 17.405 5.017 32.967 17.071 45.846 11.6 12.394 30.057 16.443 46.338 16.89 31.286.858 93.906.858 125.192 0 16.281-.447 34.738-4.5 46.338-16.89 12.054-12.879 16.609-28.439 17.071-45.846v-122.252c-.462-17.407-5.017-32.967-17.071-45.846-11.604-12.394-30.061-16.443-46.338-16.89zm-62.6 205.237a81.375 81.375 0 1 1 81.375-81.375 81.375 81.375 0 0 1 -81.375 81.375zm81.721-145.953a16.275 16.275 0 1 1 16.279-16.275 16.275 16.275 0 0 1 -16.279 16.275z"></path></svg>
              </a>
              <a :href="social.link" v-if="social.name === 'LinkedIn'">
                <svg class="w-6 h-6" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg" id="fi_1384014"><path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"></path></svg>
              </a>
            </div>
          </div></div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- Custom Navigation Buttons -->
    <div class="custom-prev">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="text-white lucide lucide-circle-chevron-left"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m14 16-4-4 4-4" />
      </svg>
    </div>
    <div class="custom-next">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="text-white lucide lucide-circle-chevron-right"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m10 8 4 4-4 4" />
      </svg>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay, Navigation],
      navigationOptions: {
        prevEl: ".custom-prev",
        nextEl: ".custom-next",
      },
    };
  },
  data() {
    return {
      testimonials: [
        {
          name: "Shailesh Sharma",
          rating: 4.8,
          date: "23 February 2024",
          feedback:
            "I have completed numerous online courses, and this one stands out as my favorite. The interactive assignments and feedback from peers were incredibly beneficial. This course equipped me with practical skills that I could immediately implement in my job.",
          image: "https://i.pravatar.cc/150?img=12",
          socialLinks: [
            { name: "Facebook", link: "/" },
            { name: "LinkedIn", link: "/" },
          ],
        },
        {
          name: "Prachi Luthra",
          rating: 4.6,
          date: "10 January 2024",
          feedback:
            "I have completed numerous online courses, and this one stands out as my favorite. The interactive assignments and feedback from peers were incredibly beneficial. This course equipped me with practical skills that I could immediately implement in my job.",
          image: "https://i.pravatar.cc/150?img=1",
          socialLinks: [
            { name: "Facebook", link: "/" },
            { name: "LinkedIn", link: "/" },
          ],
        },
        {
          name: "Jatin Nair",
          rating: 4.9,
          date: "5 March 2024",
          feedback:
            "I have completed numerous online courses, and this one stands out as my favorite. The interactive assignments and feedback from peers were incredibly beneficial. This course equipped me with practical skills that I could immediately implement in my job.",
          image: "https://i.pravatar.cc/150?img=8",
          socialLinks: [
            { name: "Facebook", link: "/" },
            { name: "LinkedIn", link: "/" },
          ],
        },
      ],
    };
  },
};
</script>
<style>
@import "swiper/css";
@import "swiper/css/pagination";

.testimonial-swiper {
  --swiper-pagination-color: #feb47b;
}

.custom-prev,
.custom-next {
  position: absolute;
  top: 40%;
  transform: translateY(-60%);
  width: 40px;
  height: 40px;
  background: #fa8d44;
  color: #ff7e5f;
  border-radius: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

/* Hide navigation buttons on small and medium screens */
.custom-prev,
.custom-next {
  display: none;
}

@media (min-width: 1024px) {
  /* Show navigation buttons only on lg and xl screens */
  .custom-prev,
  .custom-next {
    display: flex;
  }
}

.custom-prev {
  left: -40px;
}

.custom-next {
  right: -40px;
}
.custom-rounded-lb {
  border-radius: 10px 0 0 0; /* Adjust the radius value as needed */
}
</style>
