<template>
  <div class="mission-section flex flex-col items-center py-8  md:flex-row md:justify-center">
    <div class="w-full max-w-lg text-center md:text-left md:max-w-5xl lg:max-w-6xl xl:max-w-full">
      <div class="flex items-center justify-between">
        <h2 class="w-full font-semibold text-gray-700 mb-4 flex items-center gap-6">
          <p class="text-2xl">One Purpose - No Student Without Resources!</p>
          <hr class="text-black bg-black h-[1.5px] w-[350px] mt-2 hidden lg:block">
        </h2>
      </div>

      <!-- Updated HTML -->
      <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500"
        class="mission-box relative  lg:p-6 rounded-b-lg shadow-lg text-white mt-20">
        <div
          class="mission-header text-lg lg:text-2xl font-semibold mb-4 text-center text-white py-4 px-4 custom-header">
          What is our Mission?
        </div>
        <p class="mission-text text-lg leading-relaxed px-2 lg:px-4 py-6 hidden lg:block">
          On this website, we aim to provide you with case summaries relevant to your semester and competitive exams, as
          well as previous years' question papers for the judiciary, UGC-NET, AIBE, and other competitive exams in the
          field of law, all for FREE! Our goal is simple: no student should be deprived of academic resources, no matter
          which college they belong to.
        </p>
        <!-- Decorative Icon -->
        <!-- <div class="mission-icon absolute hidden lg:block -top-14 right-5 transform translate-x-1/2">
          <img src="/assets/images/law-cap.png" alt="Graduation Cap" class="w-20 h-20 object-cover rounded-full" />
        </div> -->
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
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
  border-radius: 12px 12px 0 0;
  width: calc(50% - 2rem);
  /* Default width for larger screens */
  margin-top: -2.75rem;
  z-index: 10;
}

@media (max-width: 1024px) {
  .custom-header {
    width: calc(50% - 2rem);
    /* Adjust for medium screens like tablets */
  }
}

@media (max-width: 768px) {
  .custom-header {
    width: calc(50% - 2rem);
    /* Adjust for smaller screens like mobile phones */
  }
}

@media (max-width: 480px) {
  .custom-header {
    width: calc(70% - 2rem);
    /* Full width for very small screens */
  }
}


/* Icon styling */
.mission-icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 0.25rem;
}
</style>
