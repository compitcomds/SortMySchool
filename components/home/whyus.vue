<template>
  <div class="mission-section flex flex-col items-center py-8  md:flex-row md:justify-center">
    <div class="w-full max-w-lg text-center md:text-left md:max-w-5xl lg:max-w-6xl xl:max-w-full">
      <h2 class=" text-xl font-semibold text-gray-700 mb-4 flex items-center gap-6"><p class="text-2xl">Our Mission</p> <div class="text-black mt-1 bg-black h-[0.7px] w-56" ></div></h2>
      <div class="mission-box relative bg-green-600 p-6 rounded-b-lg shadow-lg text-white mt-24">
        <div class="mission-header text-2xl font-semibold mb-4 text-center text-white py-4 px-4 custom-header">
          What is our Mission?
        </div>
        <p class="mission-text text-lg leading-relaxed px-4 py-6">
          Our mission is to empower aspiring interested students and professionals with passion through a comprehensive and engaging online learning experience.
          At onlinecourses.net, we are committed to providing accessible, practical, and up-to-date courses that cater to the needs of individuals at all levels of expertise.
        </p>
        <!-- Decorative Icon -->
        <div class="mission-icon absolute -top-10 right-0 transform translate-x-1/2">
          <img src="assets\backgroundSmallImg.avif" alt="Graduation Cap" class="w-16 h-16 object-cover rounded-full shadow-lg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
/* Section background color */


/* Title underline */
.mission-title {
  position: relative;
  margin-bottom: 1rem;
}

.mission-title::after {
  content: '';
  display: block;
  width: 400px;
  height: 1.5px;
  background-color: #333;
  margin-top: 8px;
  position: absolute;
  left: 0;
  bottom: -8px;
}

/* Mission box styling */
.mission-box {
  background-color: #2d8659;
  padding-top: 2.5rem; /* Space for header curve */
  border-radius: 12px 12px; /* Rounded bottom */
  position: relative;
  color: #ffffff;
}

/* Custom header with curved top */
.custom-header {
  background-color: #2d8659;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
  border-radius: 12px 12px 0 0;
  width: calc(50% - 2rem); /* Leave space for the borders */
  margin-top: -2.75rem;
  z-index: 10;
}

/* Icon styling */
.mission-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  padding: 0.25rem;
}
</style>
