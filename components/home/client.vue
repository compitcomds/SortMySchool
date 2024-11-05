<template>
  <div class="w-full">
    <h2 class="py-5 text-xl font-semibold text-gray-700 mb-4 flex items-center gap-6">
                <p class="text-2xl">Our Sponsers</p>
                <div class="text-black mt-1 bg-black h-[0.7px]  lg:w-56"></div>
            </h2>
  <div class=" overflow-hidden w-full h-32 mt-10 transform rotate-3 bg-gray-700 flex items-center justify-center">
    <div class="flex items-center justify-between absolute animation-scroll transform -rotate-3">
      <div v-for="(item, index) in items" :key="index" class="flex-none w-1/10 mx-1">
        <img :src="item" alt="Image" class="rounded object-cover w-full h-full" />
      </div>
    </div>
  </div></div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        "https://placehold.co/150x80",
        "https://placehold.co/150x80",
        "https://placehold.co/150x80",
        "https://placehold.co/150x80",
        "https://placehold.co/150x80",
        "https://placehold.co/150x80",
        "https://placehold.co/150x80",
        "https://placehold.co/150x80",
        "https://placehold.co/150x80",
        "https://placehold.co/150x80",
        "https://placehold.co/150x80",
        "https://placehold.co/150x80",
        "https://placehold.co/150x80",
        "https://placehold.co/150x80",
        "https://placehold.co/150x80",
        "https://placehold.co/150x80",
        "https://placehold.co/150x80",
        "https://placehold.co/150x80",
        "https://placehold.co/150x80",
        "https://placehold.co/150x80",
      ],
    };
  }
};
</script>

<style>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animation-scroll {
  display: flex;
  animation: scroll linear 80s infinite;
}
</style>
