<template>
    <div class="w-full mx-auto bg-white flex flex-col relative">
        <div class="flex items-center justify-between">
                <h2 class="w-full font-semibold text-gray-700 m-4 flex items-center ">
                    <p class="flex items-center justify-between"><p class="text-2xl">What Our Students Says</p><svg id="fi_13554816" class="w-60 h-20" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m23.939 12-3.454-1.995v1.653l-20.424.342 20.424.342v1.653z"></path></svg></p>
                    
                </h2>
                
            </div>
        <swiper :slides-per-view="1" :loop="true" :pagination="{ clickable: true }" 
            :autoplay="{ delay: 5000, disableOnInteraction: false }" :modules="modules"
            class="w-full max-w-3xl testimonial-swiper bg-[#fef8f3] rounded-lg px-10"  data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="500">
            <swiper-slide v-for="(testimonial, index) in testimonials" :key="index"
                class="flex justify-center items-center px-5 lg:px-0 bg-[#fef8f3]">
                <div class="relative  bg-[#fef8f3] text-gray-700 rounded-lg p-6 h-72 lg:p-10 max-w-3xl mb-8 w-full">
                    <div class="flex items-center mb-4">
                        <img :src="testimonial.image" alt="User avatar" class="w-16 h-16 rounded-full object-cover" />
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
                    name: "Shailesh Sharma",
                    rating: 4.8,
                    date: "23 February 2024",
                    feedback: "I have completed numerous online courses, and this one stands out as my favorite. The interactive assignments and feedback from peers were incredibly beneficial. This course equipped me with practical skills that I could immediately implement in my job.",
                    image: "https://i.pravatar.cc/150?img=12",
                },
                {
                    name: "Prachi Luthra",
                    rating: 4.6,
                    date: "10 January 2024",
                    feedback: "The structure of the course and the level of support provided were truly exceptional. I thoroughly enjoyed the experience of learning alongside my peers, which made the process even more enriching. Additionally, the assignments were not only challenging but also highly engaging, allowing me to apply what I learned effectively.",
                    image: "https://i.pravatar.cc/150?img=1",
                },
                {
                    name: "Jatin Nair",
                    rating: 4.9,
                    date: "5 March 2024",
                    feedback: "This course offered an excellent foundation for my career, equipping me with valuable knowledge and skills that I can directly apply to real-world projects. The structure of the course and the level of support provided were outstanding, creating a conducive learning environment. I particularly enjoyed collaborating with my peers, and the assignments were not only informative but also highly engaging, which greatly enhanced my learning experience.",
                    image: "https://i.pravatar.cc/150?img=8",
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