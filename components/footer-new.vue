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
          <div class="my-2 mt-5">
            <h3 class="font-semibold">For submitting a Post</h3>
            <a href="#" class="flex items-center gap-2"
              ><IconMail /> @sortmylawschool.com</a
            >
          </div>
          <hr class="lg:max-w-[45%] my-2 block border-[1px]" />
          <div class="my-2">
            <h3 class="font-semibold">For submitting a Post</h3>
            <a href="#" class="flex items-center gap-2"
              ><IconMail /> contact@sortmylawschool.com</a
            >
          </div>
          <hr class="lg:max-w-[45%] my-2 block border-[1px]" />
          <div class="my-2">
            <p class="flex items-center gap-2">
              <IconClock /> Hours: 11 A.M. to 7 P.M. (Mon - Fri)
            </p>
          </div>
        </div>
        <div class="col-span-4 lg:col-span-2">
          <h2 class="title-font font-bold text-gray-900 text-sm mb-3">
            USEFUL LINKS
          </h2>
          <nav class="list-none mb-10 flex flex-col gap-y-3 mt-5">
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
          <nav class="list-none mt-5 mb-10 flex flex-col gap-y-3">
            <li>
              <a class="text-gray-600 hover:text-gray-800">First Link </a>
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
          <div class="mt-5 mb-6 flex items-center gap-5 flex-wrap">
            <a href="#"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg
            ></a>
            <a href="#"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" /></svg
            ></a>
            <a href="#"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                /></svg
            ></a>
            <a href="#"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-youtube"
              >
                <path
                  d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
                />
                <path d="m10 15 5-3-5-3z" /></svg
            ></a>
            <a href="#"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-twitter"
              >
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                /></svg
            ></a>
          </div>
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
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-lg"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
