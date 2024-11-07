<template>
  <div class="w-full px-1">
    <div class="flex items-center justify-between px-5 lg:px-16">
      <h2 class="w-full font-semibold text-gray-700 mb-4 flex items-center gap-6">
        <p class="text-2xl">Our Associative Partners</p>
        <hr class="text-black bg-black h-[1.5px] w-[350px] mt-2 hidden lg:block">
      </h2>
    </div>
<div class="w-full">
    <div class=" overflow-hidden w-full h-32 mt-10 transform rotate-3 bg-gray-700 flex items-center justify-center ">
      <div class="flex items-center justify-between absolute  animation-scroll transform -rotate-3">
        <div v-for="(item, index) in items" :key="index" class="bg-white border py-5 rounded-xl border-black flex-none w-1/10 mx-1 ">
          <img :src="item" alt="Image" class="rounded object-cover w-56 h-full" />
        </div>
      </div>
    </div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        "/assets/testbook.png",
        "https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/%E0%A4%A6%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%80%20%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%B2%E0%A4%AF%20(2).png",
        "https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/4.png",
        "https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/7.png",
        "https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/10.png",
        "/assets/testbook.png",
        "https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/%E0%A4%A6%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%80%20%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%B2%E0%A4%AF%20(2).png",
        "https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/4.png",
        "https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/7.png",
        "https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/10.png",
        "/assets/testbook.png",
        "https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/%E0%A4%A6%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%80%20%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%B2%E0%A4%AF%20(2).png",
        "https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/4.png",
        "https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/7.png",
        "https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/10.png",
        "/assets/testbook.png",
        "https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/%E0%A4%A6%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%80%20%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%B2%E0%A4%AF%20(2).png",
        "https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/4.png",
        "https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/7.png",
        "https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/10.png",
        "/assets/testbook.png",
        "https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/%E0%A4%A6%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%80%20%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%B2%E0%A4%AF%20(2).png",
        "https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/4.png",
        "https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/7.png",
        "https://ccdstest.b-cdn.net/sort%20my%20law/partner%20logo/10.png",
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
