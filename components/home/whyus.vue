<template>
  <div class="mission-section flex flex-col items-center py-8  md:flex-row md:justify-center">
    <div class="w-full max-w-lg text-center md:text-left md:max-w-5xl lg:max-w-6xl xl:max-w-full">
      <div class="flex items-center justify-between">
        <h2 class="w-full font-semibold text-gray-700 mb-4 flex items-center gap-6">
          <p class="text-2xl">Our Organization's Purpose and Goals</p>
          <hr class="text-black bg-black h-[1.5px] w-[350px] mt-2 hidden lg:block">
        </h2>
      </div>

      <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500"
        class="mission-box relative  p-6 rounded-b-lg shadow-lg text-white mt-20">
        <div class="mission-header text-2xl font-semibold mb-4 text-center text-white py-4 px-4 custom-header">
          What is our Mission?
        </div>
        <p class="mission-text text-lg leading-relaxed px-4 py-6">
          Our mission is to empower aspiring interested students and professionals with passion through a comprehensive
          and engaging online learning experience. At onlinecourses.net, we are committed to providing accessible,
          practical, and up-to-date courses that cater to the needs of individuals at all levels of expertise. The
          customer himself, the customer will be able to pursue the adipiscing of the company. Are you aware of the
          pains, or is it necessary to reject the training of these from where the gentle ones provide for them here,
          when I open to the needs, can we be more harshly repelled by the free? Pleasures, which you ought to obtain,
          are the whole of it, and we lead them to some repudiation.
        </p>
        <!-- Decorative Icon -->
        <div class="mission-icon absolute hidden lg:block -top-14 right-5 transform translate-x-1/2">
          <img src="assets\images\graduation.svg" alt="Graduation Cap"
            class="w-20 h-20 object-cover rounded-full shadow-xl shadow-slate-600 bg-white" />
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
  background-color: #0ba083;
  padding-top: 2.5rem;
  /* Space for header curve */
  border-radius: 12px 12px;
  /* Rounded bottom */
  position: relative;
  color: #ffffff;
}

/* Custom header with curved top */
.custom-header {
  background-color: #0ba083;
  ;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
  border-radius: 12px 12px 0 0;
  width: calc(50% - 2rem);
  /* Leave space for the borders */
  margin-top: -2.75rem;
  z-index: 10;
}

/* Icon styling */
.mission-icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 0.25rem;
}
</style>
