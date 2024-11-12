<template>
  <footer class="text-black body-font bg-white hidden md:block border-t border-black mt-5 w-full">
    <div class=" px-5 pt-8 mx-auto bg-white text-black">
      <div class="grid grid-cols-8 md:grid-cols-12 gap-x-8 gap-y-8 px-5 lg:px-10">
        <!-- Logo and Contact Info -->
        <div class="col-span-12 md:col-span-3">
          <div class="w-full lg:max-w-[90%] mb-4">
            <nuxt-link href="/" aria-label="Brand" class="text-xl font-semibold text-white">
              <NuxtImg loading="lazy" src="/assets/MainLogo.png" alt="SortMyLawSchool | Logo" />
            </nuxt-link>
          </div>

          <div class="text-black">
            <h3 class="text-sm lg:text-base mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, harum?
            </h3>
          </div>
        </div>

        <!-- Useful Links -->
        <div class="col-span-6 md:col-span-3">
          <h2 class="title-font font-bold text-black text-sm mb-3">USEFUL LINKS</h2>
          <hr class="h-[1.4px] bg-gray-600 max-w-[33%] mb-3" />
          <nav class="list-none flex flex-col gap-y-2">
            <li>
              <a href="/subject" class="text-black hover:text-gray-600 transition">Case Briefs</a>
            </li>
            <li>
              <a href="/case-material" class="text-black hover:text-gray-600 transition">DU Case Mat</a>
            </li>
            <li>
              <a href="/previous-year-paper" class="text-black hover:text-gray-600 transition">PYQ</a>
            </li>
            <li>
              <a href="/contact" class="text-black hover:text-gray-600 transition">Contact Us</a>
            </li>
            <li>
              <a href="/privacy-and-terms-of-service" class="text-black hover:text-gray-600 transition">Privacy
                Policy</a>
            </li>
          </nav>
        </div>

        <!-- Legal Links -->
        <div class="col-span-6 md:col-span-3">
          <h2 class="title-font font-bold text-black text-sm mb-3">Popular Courses</h2>
          <hr class="h-[1.4px] bg-gray-600 max-w-[33%] mb-3" />
          <nav class="list-none flex flex-col gap-y-2">
            <li>
              <a href="/" class="text-black hover:text-gray-600 transition">Administrative Law</a>
            </li>
            <li>
              <a href="/" class="text-black hover:text-gray-600 transition">Administrative Law</a>
            </li>
            <li>
              <a href="/" class="text-black hover:text-gray-600 transition">Administrative Law</a>
            </li>
            <li>
              <a href="/" class="text-black hover:text-gray-600 transition">Administrative Law</a>
            </li>
          </nav>
        </div>

        <!-- Social Media & Newsletter -->
        <div class="col-span-12 md:col-span-3">
          <h2 class="title-font font-bold text-black text-sm mb-3">Contact Us</h2>
          <hr class="h-[1.4px] bg-gray-600 max-w-[33%] mb-3" />
          <div class="text-black">
            <h3 class="font-semibold mb-2">For Submitting a Post</h3>
            <a href="mailto:parth@fglawkit.com"
              class="flex items-center gap-2 group text-black hover:text-gray-600 transition">
              <IconMail class="group-hover:hidden" />
              <IconMailOpen class="hidden group-hover:block opacity-0 group-hover:opacity-100" />
              parth@fglawkit.com
            </a>
            <hr class="my-2 border-gray-600" />
            <p class="flex items-center gap-2 text-black">
              <IconClock /> Hours: 11 A.M. to 7 P.M. (Mon - Fri)
            </p>
          </div>
          <a href="https://chat.whatsapp.com/BXUajT2udYCGk7HRXgECuq">
            <button
              class="flex items-center gap-1 bg-[#0ba083] px-5 mt-5 font-bold text-white rounded-lg hover:opacity-80 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 93 92" fill="none">
                <rect x="1.13867" width="91.5618" height="91.5618" rx="15" fill="#0ba083" />
                <path
                  d="M23.5068 66.8405L26.7915 54.6381C24.1425 49.8847 23.3009 44.3378 24.4211 39.0154C25.5413 33.693 28.5482 28.952 32.89 25.6624C37.2319 22.3729 42.6173 20.7554 48.0583 21.1068C53.4992 21.4582 58.6306 23.755 62.5108 27.5756C66.3911 31.3962 68.7599 36.4844 69.1826 41.9065C69.6053 47.3286 68.0535 52.7208 64.812 57.0938C61.5705 61.4668 56.8568 64.5271 51.5357 65.7133C46.2146 66.8994 40.6432 66.1318 35.8438 63.5513L23.5068 66.8405ZM36.4386 58.985L37.2016 59.4365C40.6779 61.4918 44.7382 62.3423 48.7498 61.8555C52.7613 61.3687 56.4987 59.5719 59.3796 56.7452C62.2605 53.9185 64.123 50.2206 64.6769 46.2279C65.2308 42.2351 64.445 38.1717 62.4419 34.6709C60.4388 31.1701 57.331 28.4285 53.6027 26.8734C49.8745 25.3184 45.7352 25.0372 41.8299 26.0736C37.9247 27.11 34.4729 29.4059 32.0124 32.6035C29.5519 35.801 28.2209 39.7206 28.2269 43.7514C28.2237 47.0937 29.1503 50.3712 30.9038 53.2192L31.3823 54.0061L29.546 60.8167L36.4386 58.985Z"
                  fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M54.9566 46.8847C54.5093 46.5249 53.9856 46.2716 53.4254 46.1442C52.8651 46.0168 52.2831 46.0186 51.7236 46.1495C50.8831 46.4977 50.3399 47.8134 49.7968 48.4713C49.6823 48.629 49.514 48.7396 49.3235 48.7823C49.133 48.8251 48.9335 48.797 48.7623 48.7034C45.6849 47.5012 43.1055 45.2965 41.4429 42.4475C41.3011 42.2697 41.2339 42.044 41.2557 41.8178C41.2774 41.5916 41.3862 41.3827 41.5593 41.235C42.165 40.6368 42.6098 39.8959 42.8524 39.0809C42.9063 38.1818 42.6998 37.2863 42.2576 36.5011C41.9157 35.4002 41.265 34.42 40.3825 33.6762C39.9273 33.472 39.4225 33.4036 38.9292 33.4791C38.4359 33.5546 37.975 33.7709 37.6021 34.1019C36.9548 34.6589 36.4411 35.3537 36.0987 36.135C35.7562 36.9163 35.5939 37.7643 35.6236 38.6165C35.6256 39.0951 35.6864 39.5716 35.8046 40.0354C36.1049 41.1497 36.5667 42.2144 37.1754 43.1956C37.6145 43.9473 38.0937 44.6749 38.6108 45.3755C40.2914 47.6767 42.4038 49.6305 44.831 51.1284C46.049 51.8897 47.3507 52.5086 48.7105 52.973C50.1231 53.6117 51.6827 53.8568 53.2237 53.6824C54.1018 53.5499 54.9337 53.2041 55.6462 52.6755C56.3588 52.1469 56.9302 51.4518 57.3102 50.6512C57.5334 50.1675 57.6012 49.6269 57.5042 49.1033C57.2714 48.0327 55.836 47.4007 54.9566 46.8847Z"
                  fill="white" />
              </svg> Join Our Community
            </button>
          </a>
        </div>
      </div>
      <div class="flex justify-between mt-10 py-6 px-14  border-t ">
        <p class="text-sm text-gray-600">
          © Copyright 2024 Sort My Law School. All rights reserved.
        </p>
        <div class="flex items-center gap-5 flex-wrap">
          <a href="https://www.instagram.com/legalstartupwala">
            <button class="transition-all duration-500 hover:-translate-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-instagram">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </button>
          </a>
          <a href="https://wa.me/+916376129819" target="_blank">
            <button class="transition-all duration-500 hover:-translate-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 24 24">
                <path
                  d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z">
                </path>
              </svg>
            </button>
          </a>
          <a href="https://www.linkedin.com/in/your-profile">
            <button class="transition-all duration-500 hover:-translate-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 32 32">
                <path
                  d="M 7.5 5 C 6.132813 5 5 6.132813 5 7.5 L 5 24.5 C 5 25.867188 6.132813 27 7.5 27 L 24.5 27 C 25.867188 27 27 25.867188 27 24.5 L 27 7.5 C 27 6.132813 25.867188 5 24.5 5 Z M 7.5 7 L 24.5 7 C 24.785156 7 25 7.214844 25 7.5 L 25 24.5 C 25 24.785156 24.785156 25 24.5 25 L 7.5 25 C 7.214844 25 7 24.785156 7 24.5 L 7 7.5 C 7 7.214844 7.214844 7 7.5 7 Z M 10.4375 8.71875 C 9.488281 8.71875 8.71875 9.488281 8.71875 10.4375 C 8.71875 11.386719 9.488281 12.15625 10.4375 12.15625 C 11.386719 12.15625 12.15625 11.386719 12.15625 10.4375 C 12.15625 9.488281 11.386719 8.71875 10.4375 8.71875 Z M 19.46875 13.28125 C 18.035156 13.28125 17.082031 14.066406 16.6875 14.8125 L 16.625 14.8125 L 16.625 13.5 L 13.8125 13.5 L 13.8125 23 L 16.75 23 L 16.75 18.3125 C 16.75 17.074219 16.996094 15.875 18.53125 15.875 C 20.042969 15.875 20.0625 17.273438 20.0625 18.375 L 20.0625 23 L 23 23 L 23 17.78125 C 23 15.226563 22.457031 13.28125 19.46875 13.28125 Z M 9 13.5 L 9 23 L 11.96875 23 L 11.96875 13.5 Z">
                </path>
              </svg>
            </button>
          </a>
          <a href="https://www.youtube.com/@fglawkit">
            <button class="transition-all duration-500 hover:-translate-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 30 30">
                <path
                  d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z">
                </path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>

  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
footer {
  background-color: #2d3748; // Darker background for contrast
  color: #f7fafc; // Light text for readability

  .title-font {
    font-weight: 700;
  }

  a {
    transition: color 0.3s ease;
  }

  .btn-social {
    width: 48px;
    height: 48px;
    background: transparent;
    border: none;
  }

  button {
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-3px);
    }
  }

  input:focus {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
}
</style>
