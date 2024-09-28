<template>
  <div class="partner-section w-full overflow-hidden md:mb-10 lg:mb-40">
    <div class="container mx-auto flex flex-col gap-10 items-center">
      <!-- Heading Section -->
      <div class="hidden md:block">
        <div class="flex items-center mb-4 md:mb-0">
          <h2
            class="text-3xl md:text-5xl font-bold text-black whitespace-nowrap"
          >
            Our Associations
          </h2>
        </div>
      </div>

      <!-- Scrolling logos with infinite loop -->
      <div class="partner-logos w-full md:mx-8 overflow-hidden">
        <div class="logo-track flex items-center space-x-8 animate-scroll">
          <!-- Original Partner Logos -->
          <div v-for="(logo, index) in logos" :key="`original-${index}`" class="partner-logo bg-white border p-2 rounded-md">
            <img
              :src="logo"
              alt="Partner"
              class="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
            />
          </div>

          <!-- Duplicated Partner Logos to create infinite scroll effect -->
          <div v-for="(logo, index) in logos" :key="`duplicate-${index}`" class="partner-logo bg-white  border p-2 rounded-md">
            <img
              :src="logo"
              alt="Partner"
              class="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
            />
          </div>
          <div v-for="(logo, index) in logos" :key="`duplicate-${index}`" class="partner-logo bg-white  border p-2 rounded-md">
            <img
              :src="logo"
              alt="Partner"
              class="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
            />
          </div>
          <div v-for="(logo, index) in logos" :key="`duplicate-${index}`" class="partner-logo bg-white  border p-2 rounded-md">
            <img
              :src="logo"
              alt="Partner"
              class="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProudPartner",
  data() {
    return {
      logos: [
        "/assets/testbook.png",
        // "https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/2.png",
        "https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/%E0%A4%A6%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%80%20%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%B2%E0%A4%AF%20(2).png",
        "https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/4.png",
        'https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/7.png',
        // 'https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/8.png',
        'https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/10.png',       

      ],
    };
  },
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
