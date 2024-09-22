<template>
  <footer class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="grid grid-cols-8 lg:grid-cols-12 gap-x-4 gap-y-8">
        <div class="col-span-8 lg:col-span-5">
          <div class="w-full lg:max-w-[45%]">
            <nuxt-link
              class="flex-none text-xl font-semibold text-black"
              href="/"
              aria-label="Brand"
            >
              <NuxtImg
                loading="lazy"
                src="/assets/MainLogo.png"
                alt="SortMyLawSchool | Logo"
                srcset=""
              />
            </nuxt-link>
          </div>
        </div>
        <div class="col-span-4 lg:col-span-2">
          <h2 class="title-font font-bold text-gray-900 text-sm mb-3">
            USEFUL LINKS
          </h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div class="col-span-4 lg:col-span-2">
          <h2 class="title-font font-bold text-gray-900 text-sm mb-3">
            SORT MY LAW SCHOOL
          </h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div class="col-span-8 lg:col-span-3">
          <h2 class="title-font font-bold text-gray-900 text-sm mb-3">
            KEEP IN TOUCH
          </h2>
          <label
            for="footer-field"
            class="block uppercase text-sm text-gray-600 mb-1"
            >Subscribe to our newsletter</label
          >
          <div
            class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start"
          >
            <div class="relative">
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            >
              Button
            </button>
          </div>
          <p class="text-gray-500 text-sm mt-2 md:text-left text-center">
            Bitters chicharrones fanny pack
            <br class="lg:block hidden" />waistcoat green juice
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
