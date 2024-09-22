<template>
  <footer class="text-gray-600 body-font bg-gray-100">
    <div class="container px-5 py-8 md:py-16 mx-auto">
      <div class="grid grid-cols-8 md:grid-cols-12 gap-x-8 gap-y-8">
        <!-- Logo and Contact Info -->
        <div class="col-span-12 md:col-span-5">
          <div class="w-full lg:max-w-[45%]">
            <nuxt-link
              href="/"
              aria-label="Brand"
              class="text-xl font-semibold text-black"
            >
              <NuxtImg
                loading="lazy"
                src="/assets/MainLogo.png"
                alt="SortMyLawSchool | Logo"
              />
            </nuxt-link>
          </div>

          <div class="my-4">
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
        </div>

        <!-- Useful Links -->
        <div class="col-span-6 md:col-span-2">
          <h2 class="title-font font-bold text-gray-900 text-sm mb-3">
            USEFUL LINKS
          </h2>
          <nav class="list-none flex flex-col gap-y-2">
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-900"
                >First Link</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-900"
                >Second Link</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-900"
                >Third Link</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-900"
                >Fourth Link</a
              >
            </li>
          </nav>
        </div>

        <!-- Sort My Law School Links -->
        <div class="col-span-6 md:col-span-2">
          <h2 class="title-font font-bold text-gray-900 text-sm mb-3">
            SORT MY LAW SCHOOL
          </h2>
          <nav class="list-none flex flex-col gap-y-2">
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-900"
                >First Link</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-900"
                >Second Link</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-900"
                >Third Link</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-900"
                >Fourth Link</a
              >
            </li>
          </nav>
        </div>

        <!-- Social Media & Newsletter -->
        <div class="col-span-12 md:col-span-3">
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
          <label for="footer-field" class="block text-sm text-gray-600 mb-1"
            >Subscribe to our newsletter</label
          >
          <div class="flex flex-col lg:flex-row items-end gap-2">
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              placeholder="Enter your email"
              class="bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-3 py-2 w-full text-gray-700"
            />
            <button
              class="block w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
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

<style lang="scss" scoped>
footer {
  background-color: #f8f9fa;
  .title-font {
    font-weight: 700;
  }
  a {
    transition: color 0.3s ease;
  }
  input:focus {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
}
</style>
