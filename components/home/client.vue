<template>
  <div class="w-full">
    <div class="flex items-center justify-between">
                <h2 class="w-full font-semibold text-gray-700 mb-4 flex items-center ">
                    <p class="flex items-center justify-between"><p class="text-2xl">Our Sponsers</p><svg id="fi_13554816" class="w-60 h-20" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m23.939 12-3.454-1.995v1.653l-20.424.342 20.424.342v1.653z"></path></svg></p>
                    
                </h2>
                
            </div>

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
