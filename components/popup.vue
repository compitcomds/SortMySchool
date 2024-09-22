<template>
  <div
    v-if="visible"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    @click.self="closePopup"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
      <h2 class="text-xl font-bold mb-2">Welcome to Our Site!</h2>
      <img
        src="/assets/banner-good-quality-case-briefs.png"
        alt="Popup Image"
        class="w-full h-auto mb-4 rounded"
      />
      <p class="mb-4">We hope you find everything you need. Enjoy your stay!</p>
      <button
        @click="closePopup"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

const visible = ref(false);
const router = useRouter();
let timer = null;

const showPopup = () => {
  visible.value = true;
};

const closePopup = () => {
  visible.value = false;
  clearTimeout(timer); // Clear the timer when closing
};

onMounted(() => {
  // Show popup immediately on initial load
  timer = setTimeout(showPopup, 1500); // Show popup after 3 seconds

  // Listen for route changes
  const unwatch = router.afterEach(() => {
    clearTimeout(timer); // Clear previous timer
    visible.value = false; // Hide the popup before the new timer starts
    timer = setTimeout(showPopup, 1500); // Show popup after 3 seconds on route change
  });

  // Cleanup
  onBeforeUnmount(() => {
    clearTimeout(timer);
    unwatch();
  });
});
</script>

<style scoped>
/* Additional styles can go here if needed */
</style>
