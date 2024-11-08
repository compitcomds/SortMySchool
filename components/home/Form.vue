<template>
  <div class="w-full pb-20 px-2 justify-center md:px-5 lg:px-0 bg-white flex flex-col items-center">
    <!-- Stats Section -->
    <div class="flex items-center justify-between lg:justify-center lg:gap-12 xl:gap-28 mb-10 lg:mb-20 w-full">
      <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500"
        class="text-center pr-8 last:border-none">
        <p class="text-2xl xl:text-5xl font-semibold text-gray-800">{{ formatCount(studentCount) }}k</p>
        <p class="text-gray-600 text-lg xl:text-2xl">Views</p>
      </div>
      <hr class="h-20 w-[0.5px] bg-slate-500">
      <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500"
        class="text-center px-8 last:border-none">
        <p class="text-2xl xl:text-5xl font-semibold text-gray-800">{{ formatCount(mentorCount) }}k</p>
        <p class="text-gray-600 text-lg xl:text-2xl">Subscribers</p>
      </div>
      <hr class="h-20 w-[0.5px] bg-slate-500">
      <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500" class="text-center px-8">
        <p class="text-2xl xl:text-5xl font-semibold text-gray-800">{{ formatCount(courseCount) }}k</p>
        <p class="text-gray-600 text-lg xl:text-2xl">Likes</p>
      </div>
    </div>

    <!-- Subscription Form -->
    <div class="bg-[#fef1e1] rounded-lg shadow-lg h-60 py-6 px-5 w-full relative flex items-center justify-between">
      <!-- Bell Icon -->
      <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500" class="absolute left-0 hidden lg:block -top-16">
        <img src="assets/images/notify.svg" alt="Bell icon" class="w-28 h-28" />
      </div>

      <!-- Subscription Text and Form -->
      <div class="flex flex-col md:flex-row items-center justify-between w-full px- py-12">
        <p class="text-gray-800 font-semibold text-xl xl:text-3xl mb-4 md:mb-0 md:text-left text-center lg:w-1/3">
          ENTER YOUR EMAIL TO GET NEW COURSES <br class="hidden lg:block">FOR <span
            class="text-[#0ba083] text-base xl:text-3xl font-bold border-2 border-[#0ba083] rounded-full p-1">FREE</span>
        </p>

        <div class="flex items-center justify-end w-full md:w-auto bg-[#f9f7f2] p-2 rounded-lg shadow-inner lg:max-w-1/3">
          <input type="email" placeholder="Your Email" class="bg-transparent outline-none p-2 w-full md:w-64" />
          <button class="bg-[#0ba083] text-white px-4 py-2 rounded-lg ml-2">
            Subscribe
          </button>
        </div>

        <!-- Book Icon -->
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500"
          class="hidden lg:block  flex justify-end items-center">
          <img src="assets/images/law-book.svg" alt="Book icon" class="w-64" />
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