<template>
  <div
    v-if="visible"
    class="h-screen w-screen fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    @click.self="closePopup"
  >
    <div
      class="bg-white w-[90vw] lg:w-[80vw] rounded-lg shadow-lg absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
    >
      <img
        src="https://placehold.co/1920x1080"
        alt="Popup Image"
        class="block w-full rounded aspect-[16/9]"
      />
      <div class="z-10 absolute top-5 right-5 w-full">
        <button
          @click="closePopup"
          class="z-10 block ml-auto text-black px-4 py-2 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
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
