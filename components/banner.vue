<template>
    <section class=" text-white w-full relative">
      <div class="w-full">
        <!-- Doctor Image Section with responsive width and height -->
        <transition name="fade" mode="out-in">
          <img
            :key="slides[currentSlide].lawBanner"
            class="w-full h-[200px] lg:h-[450px] object-cover"
            :src="slides[currentSlide].lawBanner"
            alt="Slide Image"
          />
        </transition>
  
        <!-- Dynamic Heading, Paragraph, and Tags at the bottom left -->
        <div
          class="absolute bottom-5 left-5 text-left text-black hidden lg:block p-5 w-1/2"
        >
          <h2 class="text-4xl font-bold mb-2">{{ slides[currentSlide].heading }}</h2>
          <p class="mb-3 text-2xl">{{ slides[currentSlide].description }}</p>
          <div class="flex space-x-2">
            <a
              v-for="(tag, index) in slides[currentSlide].tags"
              :key="index"
              :href="tag.link"
              class=" hover:underline text-black hover:text-slate-500 bg-white/80 rounded-md p-2"
              target="_blank"
              >#{{ tag.label }}</a
            >
          </div>
        </div>
      </div>
  
      <!-- Pagination Dots -->
      <div class="hidden ">
        <div
          class="absolute mt-5 left-1/2 transform -translate-x-1/2 flex space-x-2"
        >
          <span
            v-for="(slide, index) in slides"
            :key="index"
            @click="currentSlide = index"
            :class="[
              'rounded-full cursor-pointer',
              currentSlide === index ? 'bg-teal-800 h-3 w-6' : 'bg-slate-400 h-3 w-3',
            ]"
          ></span>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentSlide: 0,
        slides: [
          {
            lawBanner: "https://ccdstest.b-cdn.net/sort%20my%20law/1.png",
            heading: "Slide 1 Heading",
            description: "The company itself is a very successful company. No one, therefore, takes the pains of choosing the kind of things that are praised by the architect.",
            tags: [
              { label: "Learn More", link: "https://example.com/learn-more" },
              { label: "Contact Us", link: "https://example.com/contact" },
            ],
          },
          {
            lawBanner: "https://ccdstest.b-cdn.net/sort%20my%20law/2.png",
            heading: "Slide 2 Heading",
            description: "The company itself is a very successful company. No one, therefore, takes the pains of choosing the kind of things that are praised by the architect.",
            tags: [
              { label: "About Us", link: "https://example.com/about" },
              { label: "Services", link: "https://example.com/services" },
            ],
          },
          {
            lawBanner: "https://ccdstest.b-cdn.net/sort%20my%20law/3.png",
            heading: "Slide 3 Heading",
            description: "The company itself is a very successful company. No one, therefore, takes the pains of choosing the kind of things that are praised by the architect.",
            tags: [
              { label: "Products", link: "https://example.com/products" },
              { label: "Support", link: "https://example.com/support" },
            ],
          },
          {
            lawBanner: "https://ccdstest.b-cdn.net/sort%20my%20law/4.png",
            heading: "Slide 4 Heading",
            description: "The company itself is a very successful company. No one, therefore, takes the pains of choosing the kind of things that are praised by the architect.",
            tags: [
              { label: "FAQ", link: "https://example.com/faq" },
              { label: "Blog", link: "https://example.com/blog" },
            ],
          },
        ],
      };
    },
    mounted() {
      this.startSlideShow();
    },
    methods: {
      startSlideShow() {
        setInterval(() => {
          this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        }, 5000); // Change slide every 5 seconds
      },
    },
  };
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  </style>
  