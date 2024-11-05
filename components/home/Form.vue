<template>
    <div class="w-full py-16 px-2 md:px-5 lg:px-0 bg-[#fef8f3] flex flex-col items-center">
      <!-- Stats Section -->
      <div class="flex items-center justify-center lg:gap-12 mb-12">
        <div data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="1000" class="text-center border-r border-gray-300 pr-8 last:border-none">
          <p class="text-4xl font-semibold text-gray-800">{{ formatCount(studentCount) }}k</p>
          <p class="text-gray-600">Students</p>
        </div>
        <div data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="1000" class="text-center border-r border-gray-300 px-8 last:border-none">
          <p class="text-4xl font-semibold text-gray-800">{{ formatCount(mentorCount) }}k</p>
          <p class="text-gray-600">Mentors</p>
        </div>
        <div data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="1000" class="text-center px-8">
          <p class="text-4xl font-semibold text-gray-800">{{ formatCount(courseCount) }}k</p>
          <p class="text-gray-600">Courses</p>
        </div>
      </div>
  
      <!-- Subscription Form -->
      <div class="bg-white rounded-lg shadow-lg p-12 max-w-4xl w-full relative flex items-center justify-between">
        <!-- Bell Icon -->
        <div data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="1000" class="absolute left-4 -top-4">
          <img src="assets/images/notify.svg" alt="Bell icon" class="w-16 h-16" />
        </div>
  
        <!-- Subscription Text and Form -->
        <div class="flex flex-col md:flex-row items-center w-full md:gap-4">
          <p class="text-gray-800 font-semibold text-lg xl:text-3xl mb-4 md:mb-0 md:text-left text-center">
            ENTER YOUR EMAIL TO GET NEW COURSES FOR <span class="text-green-500 font-bold">FREE</span>
          </p>
          
          <div class="flex items-center w-full md:w-auto bg-[#f9f7f2] p-2 rounded-lg shadow-inner">
            <input
              type="email"
              placeholder="Your Email"
              class="bg-transparent outline-none p-2 w-full md:w-64"
            />
            <button class="bg-green-500 text-white px-4 py-2 rounded-lg ml-2">
              Subscribe
            </button>
          </div>
          
          <!-- Book Icon -->
          <div data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="1000" class="absolute -right-20 -top-3 hidden lg:block">
            <img src="assets/images/law-book.svg" alt="Book icon" class="w-32 h-32" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        studentCount: 0,
        mentorCount: 0,
        courseCount: 0,
        targetValues: {
          students: 124,
          mentors: 12,
          courses: 35,
        },
      };
    },
    mounted() {
      this.startCountAnimation();
    },
    methods: {
      startCountAnimation() {
        this.animateCount('studentCount', this.targetValues.students, 1000);
        this.animateCount('mentorCount', this.targetValues.mentors, 1000);
        this.animateCount('courseCount', this.targetValues.courses, 1000);
      },
      animateCount(field, target, duration) {
        const startTime = performance.now();
        const increment = target / (duration / 50);
        
        const updateCount = (currentTime) => {
          const elapsed = currentTime - startTime;
          if (elapsed < duration) {
            this[field] = Math.min(Math.floor(increment * (elapsed / 50)), target);
            requestAnimationFrame(updateCount);
          } else {
            this[field] = target; // Ensure we end at the target value
          }
        };
        requestAnimationFrame(updateCount);
      },
      formatCount(count) {
        return Math.floor(count); // Show the count as an integer
      },
    },
  };
  </script>
  
  <style>
  /* Optional custom styling */
  </style>
  