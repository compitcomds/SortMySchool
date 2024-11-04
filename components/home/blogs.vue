<template>
    <div class="w-full mx-auto ">
        <h2 class="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-6 pb-6">
                <p class="text-2xl">Our Blogs</p>
                <div class="text-black mt-1 bg-black h-[0.7px] w-56"></div>
            </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="(article, index) in articles"
          :key="index"
          class="border border-gray-400 bg-white rounded-b flex flex-col justify-between leading-normal"
        >
          <img :src="article.image" class="w-full mb-3" />
          <div class="p-4 pt-2">
            <div class="mb-8">
              <p v-if="article.membersOnly" class="text-sm text-gray-600 flex items-center">
                <svg
                  class="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                  ></path>
                </svg>
                Members only
              </p>
              <a
                href="#"
                class="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block"
              >
                {{ article.title }}
              </a>
              <p class="text-gray-700 text-sm">{{ article.description }}</p>
            </div>
            <div class="flex items-center">
              <a href="#">
                <img
                  :src="article.author.avatar"
                  class="w-10 h-10 rounded-full mr-4"
                  alt="Avatar of {{ article.author.name }}"
                />
              </a>
              <div class="text-sm">
                <a
                  href="#"
                  class="text-gray-900 font-semibold leading-none hover:text-indigo-600"
                >
                  {{ article.author.name }}
                </a>
                <p class="text-gray-600">{{ article.author.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        articles: [
          {
            image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title: "Can coffee make you a better developer?",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
            author: {
              name: "Jonathan Reinink",
              date: "Aug 18",
              avatar: "https://tailwindcss.com/img/jonathan.jpg",
            },
            membersOnly: true,
          },
          {
            image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title: "Can coffee make you a better developer?",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
            author: {
              name: "Jonathan Reinink",
              date: "Aug 18",
              avatar: "https://tailwindcss.com/img/jonathan.jpg",
            },
            membersOnly: true,
          },
          {
            image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title: "Can coffee make you a better developer?",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
            author: {
              name: "Jonathan Reinink",
              date: "Aug 18",
              avatar: "https://tailwindcss.com/img/jonathan.jpg",
            },
            membersOnly: true,
          },
          {
            image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title: "Can coffee make you a better developer?",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
            author: {
              name: "Jonathan Reinink",
              date: "Aug 18",
              avatar: "https://tailwindcss.com/img/jonathan.jpg",
            },
            membersOnly: true,
          },
          // Add more articles here as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  