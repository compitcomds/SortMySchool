<template>
    <nav class="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 md:hidden z-50">
      <div class="flex justify-around items-center py-2">
        <!-- Home -->
        <nuxt-link
          to="/"
          class="flex flex-col items-center text-gray-600 hover:text-blue-500 cursor-pointer"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 9.75L12 4.5l9 5.25v9.75A1.5 1.5 0 0119.5 21h-15A1.5 1.5 0 013 19.5V9.75z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 21V11.25h6V21"></path>
          </svg>
          <span class="text-xs mt-1">Home</span>
        </nuxt-link>
  
        <!-- Case Brief -->
        <nuxt-link
          to="/subject"
          class="flex flex-col items-center text-gray-600 hover:text-blue-500 cursor-pointer"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark-check"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"/><path d="m9 10 2 2 4-4"/></svg>
          <span class="text-xs mt-1">Case Brief</span>
        </nuxt-link>
  
        <!-- Contact Us -->
        <nuxt-link
          to="/contact"
          class="flex flex-col items-center text-gray-600 hover:text-blue-500 cursor-pointer"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14.05 2a9 9 0 0 1 8 7.94"/><path d="M14.05 6A5 5 0 0 1 18 10"/></svg>
          <span class="text-xs mt-1">Contact Us</span>
        </nuxt-link>
      </div>
    </nav>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  /* Styling adjustments if necessary */
  </style>
  