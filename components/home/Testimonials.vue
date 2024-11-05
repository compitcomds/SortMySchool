<template>
    <div class="w-full mx-auto bg-[#fef8f3] flex flex-col relative">
        <h2 class=" text-xl font-semibold text-gray-700 m-4 flex items-center gap-6">
            <p class="text-2xl">What Our Students Says</p>
            <div class="text-black mt-1 bg-black h-[0.7px] lg:w-56"></div>
        </h2>
        <swiper :slides-per-view="1" :loop="true" :pagination="{ clickable: true }" 
            :autoplay="{ delay: 5000, disableOnInteraction: false }" :modules="modules"
            class="w-full max-w-3xl testimonial-swiper"  data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="1000">
            <swiper-slide v-for="(testimonial, index) in testimonials" :key="index"
                class="flex justify-center items-center">
                <div class="relative bg-white text-gray-700 rounded-lg p-6 max-w-3xl my-10 w-full">
                    <div class="flex items-center mb-4">
                        <img :src="testimonial.image" alt="User avatar" class="w-12 h-12 rounded-full object-cover" />
                        <div class="ml-4">
                            <h3 class="text-lg font-semibold">{{ testimonial.name }}</h3>
                            <p class="text-yellow-500 flex items-center">
                                <span class="mr-1">⭐ {{ testimonial.rating }}</span>
                            </p>
                        </div>
                        <p class="ml-auto text-sm text-gray-400">{{ testimonial.date }}</p>
                    </div>
                    <p class="text-gray-600 mb-4">{{ testimonial.feedback }}</p>
                    <div class="absolute -bottom-12 -right-2">
                        <img src="assets\images\books.svg" alt="Books icon" class="w-28 h-28" />
                    </div>
                </div>
            </swiper-slide>

            <!-- Custom Navigation Buttons -->
            <!-- <div class="swiper-button-prev custom-prev"></div>
            <div class="swiper-button-next custom-next"></div> -->
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination,  Autoplay } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination,  Autoplay],
        };
    },
    data() {
        return {
            testimonials: [
                {
                    name: "Maria John",
                    rating: 4.8,
                    date: "23 February 2024",
                    feedback: "I've taken several online courses, and this has been my favorite by far. The interactive assignments and peer feedback were extremely helpful. This course helped me gain practical skills that I was able to apply in my job immediately.",
                    image: "https://placehold.co/48x48",
                },
                {
                    name: "John Doe",
                    rating: 4.6,
                    date: "10 January 2024",
                    feedback: "The course structure and support were top-notch. I enjoyed learning with peers and the assignments were very engaging. The course structure and support were top-notch. I enjoyed learning with peers and the assignments were very engaging.",
                    image: "https://placehold.co/48x48",
                },
                {
                    name: "Sarah Lee",
                    rating: 4.9,
                    date: "5 March 2024",
                    feedback: "This course provided a great foundation for my career, and I learned so much that I can apply to real-world projects. The course structure and support were top-notch. I enjoyed learning with peers and the assignments were very engaging.",
                    image: "https://placehold.co/48x48",
                },
            ],
        };
    },
};
</script>

<style>
@import 'swiper/css';
@import 'swiper/css/pagination';
/* @import 'swiper/css/navigation'; */

/* Custom styling for Swiper */
.testimonial-swiper {
    --swiper-navigation-color: #2472e7;
    /* Tailwind Gray-300 */
    --swiper-pagination-color: #1367e6;

}

/* Custom Navigation Button Styles */
.custom-prev,
.custom-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-color: #d1d5db;
    /* Gray background */
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;
}

.custom-prev:hover,
.custom-next:hover {
    background-color: #a1a1a1;
    /* Darker gray on hover */
}

.custom-prev {
    left: -50px;
    /* Positioning left of the card */
}

.custom-next {
    right: -50px;
    /* Positioning right of the card */
}

.custom-prev::after {
    content: '◀';
    /* Left arrow */
    font-size: 20px;
    color: #ffffff;
}

.custom-next::after {
    content: '▶';
    /* Right arrow */
    font-size: 20px;
    color: #ffffff;
}
</style>