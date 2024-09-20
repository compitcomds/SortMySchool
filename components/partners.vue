<template>
    <div class="partner-section w-full overflow-hidden">
      <div class="container mx-auto flex flex-col md:flex-row items-center">
        <!-- Heading Section -->
        <div class="flex items-center mb-4 md:mb-0">
          <h2 class="text-3xl md:text-5xl font-bold text-black whitespace-nowrap">
            Proud Partner
          </h2>
          <span class="border-l hidden lg:block border-gray-500 h-10 ml-4"></span>
        </div>
  
        <!-- Scrolling logos with infinite loop -->
        <div class="partner-logos w-full md:ml-8 overflow-hidden">
          <div class="logo-track flex items-center space-x-8 animate-scroll">
            <!-- Original Partner Logos -->
            <div v-for="n in 6" :key="`original-${n}`" class="partner-logo">
              <img src="/assets/testbook.png" alt="Partner" class="h-12 w-auto object-contain" />
            </div>
  
            <!-- Duplicated Partner Logos to create infinite scroll effect -->
            <div v-for="n in 6" :key="`duplicate-${n}`" class="partner-logo">
              <img src="/assets/testbook.png" alt="Partner" class="h-12 w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProudPartner",
  };
  </script>
  
  <style scoped>
  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .animate-scroll {
    animation: scroll 80s linear infinite;
  }
  
  .partner-logos .logo-track {
    display: flex;
    min-width: 200%; /* Twice the size to accommodate both the original and duplicated logos */
  }
  
  .partner-logos .logo-track > .partner-logo {
    flex-shrink: 0;
  }
  </style>
  