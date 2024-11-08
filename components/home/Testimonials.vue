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
          <div class="flex justify-end gap-3 mt-4 px-10">
            <a
              v-for="(social, index) in testimonial.socialLinks"
              :key="index"
              :href="social.link"
              target="_blank"
              class="w-6 h-6 rounded-full"
            >
              <template v-if="social.name === 'Facebook'">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.892-4.788 4.656-4.788 1.325 0 2.462.099 2.794.143v3.24h-1.918c-1.506 0-1.797.716-1.797 1.767v2.317h3.591l-.467 3.622h-3.124V24h6.125c.73 0 1.325-.595 1.325-1.324V1.325C24 .595 23.405 0 22.675 0z"
                  />
                </svg>
              </template>
              <template v-if="social.name === 'LinkedIn'">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    d="M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.225.79 24 1.77 24h20.46C23.21 24 24 23.225 24 22.27V1.73C24 .774 23.21 0 22.23 0zm-14.7 20.452h-3.77V9.058h3.77v11.394zM6.385 7.768a2.188 2.188 0 1 1 0-4.376 2.188 2.188 0 0 1 0 4.376zm13.94 12.684h-3.77v-5.608c0-1.337-.026-3.06-1.866-3.06-1.867 0-2.154 1.46-2.154 2.965v5.703h-3.77V9.058h3.615v1.557h.052c.504-.954 1.736-1.957 3.574-1.957 3.822 0 4.527 2.516 4.527 5.788v6.006z"
                  />
                </svg>
              </template>
            </a>
          </div>
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

</style>
