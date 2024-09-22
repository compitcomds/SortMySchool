<template>
  <footer class="text-gray-600 body-font bg-gray-100">
    <div class="container px-5 py-8 md:py-16 mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-x-8 gap-y-8">
        <!-- Logo and Contact Info -->
        <div class="col-span-12 md:col-span-4 lg:col-span-5">
          <div class="w-full lg:max-w-[45%]">
            <nuxt-link href="/" aria-label="Brand" class="text-xl font-semibold text-black">
              <NuxtImg loading="lazy" src="/assets/MainLogo.png" alt="SortMyLawSchool | Logo" />
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
          <h2 class="title-font font-bold text-gray-900 text-sm mb-3">USEFUL LINKS</h2>
          <nav class="list-none flex flex-col gap-y-2">
            <li><a href="#" class="text-gray-600 hover:text-gray-900">First Link</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">Second Link</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">Third Link</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">Fourth Link</a></li>
          </nav>
        </div>

        <!-- Sort My Law School Links -->
        <div class="col-span-6 md:col-span-2">
          <h2 class="title-font font-bold text-gray-900 text-sm mb-3">SORT MY LAW SCHOOL</h2>
          <nav class="list-none flex flex-col gap-y-2">
            <li><a href="#" class="text-gray-600 hover:text-gray-900">First Link</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">Second Link</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">Third Link</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">Fourth Link</a></li>
          </nav>
        </div>

        <!-- Social Media & Newsletter -->
        <div class="col-span-12 md:col-span-4 lg:col-span-3">
          <h2 class="title-font font-bold text-gray-900 text-sm mb-3">KEEP IN TOUCH</h2>
          <div class="flex gap-4 mb-6">
            <a href="#" aria-label="Instagram" class="text-gray-600 hover:text-gray-900 transition-colors">
              <IconInstagram class="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" class="text-gray-600 hover:text-gray-900 transition-colors">
              <IconLinkedin class="w-6 h-6" />
            </a>
            <a href="#" aria-label="Facebook" class="text-gray-600 hover:text-gray-900 transition-colors">
              <IconFacebook class="w-6 h-6" />
            </a>
            <a href="#" aria-label="YouTube" class="text-gray-600 hover:text-gray-900 transition-colors">
              <IconYouTube class="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter" class="text-gray-600 hover:text-gray-900 transition-colors">
              <IconTwitter class="w-6 h-6" />
            </a>
          </div>
          <label for="footer-field" class="block text-sm text-gray-600 mb-1">Subscribe to our newsletter</label>
          <div class="flex items-end gap-2">
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              placeholder="Enter your email"
              class="bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-3 py-2 w-full text-gray-700"
            />
            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
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
