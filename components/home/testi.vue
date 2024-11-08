<template>
    <div class="bg-gray-50 py-12">
      <div class="max-w-3xl mx-auto px-4">
        <h2 class="text-center text-2xl font-semibold mb-8">What our students say?</h2>
        
        <div class="relative bg-white p-6 rounded-lg shadow-lg text-gray-800">
          <!-- Avatar and Name -->
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 rounded-full bg-gray-300 mr-4"></div>
            <div>
              <h3 class="font-semibold text-lg">Maria John</h3>
              <div class="flex items-center text-yellow-500 text-sm">
                <i class="fas fa-star mr-1"></i> 4.8
              </div>
            </div>
          </div>
  
          <!-- Testimonial Text -->
          <p class="text-gray-600 mb-4">
            I've taken several online courses, and this has been my favorite by far. The interactive assignments and peer feedback were extremely helpful. This course helped me gain practical skills that I was able to apply in my job immediately.
          </p>
          
          <!-- Date and Pagination Dots -->
          <div class="flex justify-between items-center text-gray-400 text-sm">
            <span>23 February 2024</span>
            <div class="flex space-x-1">
              <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
              <span class="w-2 h-2 bg-gray-500 rounded-full"></span>
              <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
          </div>
  
          <!-- Slide Navigation -->
          <button class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
            <i class="fas fa-chevron-left text-gray-600"></i>
          </button>
          <button class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
            <i class="fas fa-chevron-right text-gray-600"></i>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TestimonialSlider',
    data() {
      return {
        testimonials: [
          {
            name: "Maria John",
            rating: 4.8,
            text: "I've taken several online courses, and this has been my favorite by far. The interactive assignments and peer feedback were extremely helpful. This course helped me gain practical skills that I was able to apply in my job immediately.",
            date: "23 February 2024"
          },
          // Add more testimonials here
        ],
        currentTestimonialIndex: 0,
      };
    },
    methods: {
      prevSlide() {
        this.currentTestimonialIndex =
          (this.currentTestimonialIndex - 1 + this.testimonials.length) %
          this.testimonials.length;
      },
      nextSlide() {
        this.currentTestimonialIndex =
          (this.currentTestimonialIndex + 1) % this.testimonials.length;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Additional custom styles if needed */
  </style>
  