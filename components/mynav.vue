<template>
  <!-- ========== HEADER ========== -->
  <!-- ========== HEADER ========== -->
  <header
  class="sticky top-10 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full before:absolute before:inset-0 before:max-w-[56rem] lg:before:max-w-[66rem] before:mx-5 before:lg:mx-auto before:rounded-[26px] before:bg-neutral-800/30 before:backdrop-blur-md transition-transform duration-300"
  :class="{ '-translate-y-full': isHidden, 'margin-top-visible': !isHidden }"
>
  <nav class="relative  lg:max-w-[66rem] w-full py-1 ps-5 pe-5 lg:pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto">
      <div class="flex items-center w-full lg:w-auto justify-between">
        <nuxt-link
          class="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
          href="/"
          aria-label="Preline"
        >
          <img
            loading="lazy"
            src="/assets/Sqlogo.png"
            alt="SortMyLawSchool | Logo"
            srcset=""
            class="w-12"
          />
        </nuxt-link>

        <div class="lg:hidden">
            <button
              class="group inline-flex items-center gap-x-24 py-2 px-3 border-[#37AFE1] border font-medium text-sm text-[#FFFECB] rounded-full focus:outline-none"
              type="button"
              data-hs-overlay="#search-modal"
              
            >
              Search...
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-search"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </div>
      </div>

      
      <div
        id="hs-navbar-floating-dark"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block"
        aria-labelledby="hs-navbar-floating-dark-collapse"
      >
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7"
        >
          <a
            class="p-3 ps-px sm:px-3 md:py-4 text-sm text-[#FFFECB] hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
            href="/test"
            aria-current="page"
            >Home</a
          >
          <a
            class="p-3 ps-px sm:px-3 md:py-4 text-sm text-[#FFFECB] hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
            href="/case-material"
            >DU Casemat</a
          >
          <a
            class="p-3 ps-px sm:px-3 md:py-4 text-sm text-[#FFFECB] hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
            href="/previous-year-paper"
            >PYQ</a
          >
          <div
                class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] "
              >
                <nuxt-link to="/subject">
                  <button
                    type="button"
                    class="p-3 ps-px sm:px-3 md:py-4 text-sm text-[#FFFECB] hover:text-neutral-300 focus:outline-none focus:text-neutral-300 flex items-center"
                  >
                    Case Brief
                    <svg
                      class="flex-shrink-0 ms-2 size-4 lg:text-lg mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </nuxt-link>

                <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-[705px] lg:w-[750px] hidden z-10 top-full end-0 overflow-hidden bg-white  rounded-lg before:absolute before:-top-5 before:start-0 before:w-full before:h-5"
                >
                  <div class="grid grid-cols-2 md:grid-cols-10 pt-40 md:pt-0">
                    <div class="md:col-span-3">
                      <div class="flex flex-col py-6 px-3 md:px-6">
                        <!-- Timeline -->
                        <div>
                          <!-- Item -->
                          <div
                            class="flex relative group rounded-lg hover:bg-gray-100"
                          >
                            <nuxt-link
                              to="/subject/AdministrativeLaw"
                              class="absolute inset-0 z-[1]"
                            ></nuxt-link>

                            <!-- Icon -->
                            <div
                              class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200"
                            >
                              <div
                                class="relative z-10 size-7 flex justify-center items-center"
                              >
                                <div
                                  class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"
                                ></div>
                              </div>
                            </div>
                            <!-- End Icon -->

                            <!-- Right Content -->
                            <div class="grow py-1 pb-8">
                              <p
                                class="text-sm flex gap-x-1.5 font-semibold text-gray-800"
                              >
                                Administrative Law
                              </p>
                            </div>
                            <!-- End Right Content -->
                          </div>
                          <!-- End Item -->
                          <!-- Item -->
                          <div
                            class="flex relative group rounded-lg hover:bg-gray-100"
                          >
                            <nuxt-link
                              to="/subject/CodeOfCivilProcedure"
                              class="absolute inset-0 z-[1]"
                            ></nuxt-link>

                            <!-- Icon -->
                            <div
                              class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200"
                            >
                              <div
                                class="relative z-10 size-7 flex justify-center items-center"
                              >
                                <div
                                  class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"
                                ></div>
                              </div>
                            </div>
                            <!-- End Icon -->

                            <!-- Right Content -->
                            <div class="grow py-1 pb-8">
                              <p
                                class="text-sm flex gap-x-1.5 font-semibold text-gray-800"
                              >
                                Code of Civil Procedure
                              </p>
                            </div>
                            <!-- End Right Content -->
                          </div>
                          <!-- End Item -->
                          <!-- Item -->
                          <div
                            class="flex relative group rounded-lg hover:bg-gray-100"
                          >
                            <nuxt-link
                              to="/subject/CompanyLaw"
                              class="absolute inset-0 z-[1]"
                            ></nuxt-link>

                            <!-- Icon -->
                            <div
                              class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200"
                            >
                              <div
                                class="relative z-10 size-7 flex justify-center items-center"
                              >
                                <div
                                  class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"
                                ></div>
                              </div>
                            </div>
                            <!-- End Icon -->

                            <!-- Right Content -->
                            <div class="grow py-1 pb-8">
                              <p
                                class="text-sm flex gap-x-1.5 font-semibold text-gray-800"
                              >
                                Company Law
                              </p>
                            </div>
                            <!-- End Right Content -->
                          </div>
                          <!-- End Item -->
                          <!-- Item -->
                          <div
                            class="flex relative group rounded-lg hover:bg-gray-100"
                          >
                            <nuxt-link
                              to="/subject/EnvironmentalLaw"
                              class="absolute inset-0 z-[1]"
                            ></nuxt-link>

                            <!-- Icon -->
                            <div
                              class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200"
                            >
                              <div
                                class="relative z-10 size-7 flex justify-center items-center"
                              >
                                <div
                                  class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"
                                ></div>
                              </div>
                            </div>
                            <!-- End Icon -->

                            <!-- Right Content -->
                            <div class="grow py-1 pb-8">
                              <p
                                class="text-sm flex gap-x-1.5 font-semibold text-gray-800"
                              >
                                Environmental Law
                              </p>
                            </div>
                            <!-- End Right Content -->
                          </div>
                          <!-- End Item -->
                          <!-- Item -->
                          <div
                            class="flex relative group rounded-lg hover:bg-gray-100"
                          >
                            <nuxt-link
                              to="/subject/6637f17a0026153b82fc"
                              class="absolute inset-0 z-[1]"
                            ></nuxt-link>

                            <!-- Icon -->
                            <div
                              class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200"
                            >
                              <div
                                class="relative z-10 size-7 flex justify-center items-center"
                              >
                                <div
                                  class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"
                                ></div>
                              </div>
                            </div>
                            <!-- End Icon -->

                            <!-- Right Content -->
                            <div class="grow py-1 pb-8">
                              <p
                                class="text-sm flex gap-x-1.5 font-semibold text-gray-800"
                              >
                                Insurance & Banking Law
                              </p>
                            </div>
                            <!-- End Right Content -->
                          </div>
                          <!-- End Item -->
                        </div>
                        <!-- End Timeline -->
                      </div>
                    </div>

                    <div class="md:col-span-3">
                      <div class="flex flex-col py-6 px-3 md:px-6">
                        <!-- Timeline -->
                        <div>
                          <!-- Item -->
                          <div
                            class="flex relative group rounded-lg hover:bg-gray-100"
                          >
                            <nuxt-link
                              to="/subject/MinorActandSCRules"
                              class="absolute inset-0 z-[1]"
                            ></nuxt-link>

                            <!-- Icon -->
                            <div
                              class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200"
                            >
                              <div
                                class="relative z-10 size-7 flex justify-center items-center"
                              >
                                <div
                                  class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"
                                ></div>
                              </div>
                            </div>
                            <!-- End Icon -->

                            <!-- Right Content -->
                            <div class="grow py-1 pb-8">
                              <p
                                class="text-sm flex gap-x-1.5 font-semibold text-gray-800"
                              >
                                Minor Act & SC Rules
                              </p>
                            </div>
                            <!-- End Right Content -->
                          </div>
                          <!-- End Item -->
                          <!-- Item -->
                          <div
                            class="flex relative group rounded-lg hover:bg-gray-100"
                          >
                            <nuxt-link
                              to="/subject/Partnership"
                              class="absolute inset-0 z-[1]"
                            ></nuxt-link>

                            <!-- Icon -->
                            <div
                              class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200"
                            >
                              <div
                                class="relative z-10 size-7 flex justify-center items-center"
                              >
                                <div
                                  class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"
                                ></div>
                              </div>
                            </div>
                            <!-- End Icon -->

                            <!-- Right Content -->
                            <div class="grow py-1 pb-8">
                              <p
                                class="text-sm flex gap-x-1.5 font-semibold text-gray-800"
                              >
                                Partnership Act
                              </p>
                            </div>
                            <!-- End Right Content -->
                          </div>
                          <!-- End Item -->
                          <!-- Item -->
                          <div
                            class="flex relative group rounded-lg hover:bg-gray-100"
                          >
                            <nuxt-link
                              to="/subject/PublicInternationalLaw"
                              class="absolute inset-0 z-[1]"
                            ></nuxt-link>

                            <!-- Icon -->
                            <div
                              class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200"
                            >
                              <div
                                class="relative z-10 size-7 flex justify-center items-center"
                              >
                                <div
                                  class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"
                                ></div>
                              </div>
                            </div>
                            <!-- End Icon -->

                            <!-- Right Content -->
                            <div class="grow py-1 pb-8">
                              <p
                                class="text-sm flex gap-x-1.5 font-semibold text-gray-800"
                              >
                                Public International Law
                              </p>
                            </div>
                            <!-- End Right Content -->
                          </div>
                          <!-- End Item -->
                          <!-- Item -->
                          <div
                            class="flex relative group rounded-lg hover:bg-gray-100"
                          >
                            <nuxt-link
                              to="/subject/Salesofgoodsact"
                              class="absolute inset-0 z-[1]"
                            ></nuxt-link>

                            <!-- Icon -->
                            <div
                              class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200"
                            >
                              <div
                                class="relative z-10 size-7 flex justify-center items-center"
                              >
                                <div
                                  class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"
                                ></div>
                              </div>
                            </div>
                            <!-- End Icon -->

                            <!-- Right Content -->
                            <div class="grow py-1 pb-8">
                              <p
                                class="text-sm flex gap-x-1.5 font-semibold text-gray-800"
                              >
                                Sales of Goods Act
                              </p>
                            </div>
                            <!-- End Right Content -->
                          </div>
                          <!-- End Item -->
                          <!-- Item -->
                          <div
                            class="flex relative group rounded-lg hover:bg-gray-100"
                          >
                            <nuxt-link
                              to="/subject/TaxationLaw"
                              class="absolute inset-0 z-[1]"
                            ></nuxt-link>

                            <!-- Icon -->
                            <div
                              class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200"
                            >
                              <div
                                class="relative z-10 size-7 flex justify-center items-center"
                              >
                                <div
                                  class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"
                                ></div>
                              </div>
                            </div>
                            <!-- End Icon -->

                            <!-- Right Content -->
                            <div class="grow py-1 pb-8">
                              <p
                                class="text-sm flex gap-x-1.5 font-semibold text-gray-800"
                              >
                                Taxation law
                              </p>
                            </div>
                            <!-- End Right Content -->
                          </div>
                          <!-- End Item -->

                          <!-- End Item -->
                          <!-- Item -->
                          <div
                            class="flex relative group rounded-lg hover:bg-gray-100"
                          >
                            <nuxt-link
                              to="/subject"
                              class="absolute inset-0 z-[1]"
                            ></nuxt-link>

                            <!-- Icon -->
                            <div
                              class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200"
                            >
                              <div
                                class="relative z-10 size-7 flex justify-center items-center"
                              >
                                <div
                                  class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"
                                ></div>
                              </div>
                            </div>
                            <!-- End Icon -->

                            <!-- Right Content -->
                            <div class="grow py-1 pb-8">
                              <p
                                class="text-sm flex gap-x-1.5 font-semibold text-gray-800"
                              >
                                Other Subjects
                              </p>
                            </div>
                            <!-- End Right Content -->
                          </div>
                          <!-- End Item -->
                        </div>
                        <!-- End Timeline -->
                      </div>
                    </div>

                    <div class="col-span-full md:col-span-4">
                      <div class="flex flex-col bg-gray-50 p-6">
                        <span
                          class="text-xs font-semibold uppercase text-gray-800"
                        >
                          DU Case Mat</span
                        >

                        <nuxt-link class="mt-4 group" to="/case-material">
                          <div class="aspect-w-16 aspect-h-9">
                            <NuxtImg
                              loading="lazy"
                              class="w-full object-cover rounded-lg"
                              src="/assets/du.jpg"
                              alt="SortMyLawSchool | Delhi University (DU) Image"
                            />
                          </div>
                          <div class="mt-2">
                            <p class="text-gray-800"></p>
                            <p
                              class="mt-3 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium"
                            >
                              Syllabus
                              <svg
                                class="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="m9 18 6-6-6-6" />
                              </svg>
                            </p>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          <div
            class="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] p-3 ps-px sm:px-3 md:py-4"
          ></div>
          <div>
            <button
              class="group inline-flex items-center gap-x-24 py-2 px-3 border-[#37AFE1] border font-medium text-sm text-[#FFFECB] rounded-full focus:outline-none"
              type="button"
              data-hs-overlay="#search-modal"
              
            >
              Search...
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-search"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header> 
  <!-- ========== END HEADER ========== -->
</template>
<script>
export default {
  data() {
    return {
      isHidden: false,
      lastScrollY: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > this.lastScrollY) {
        // User is scrolling down
        this.isHidden = true;
      } else {
        // User is scrolling up
        this.isHidden = false;
      }
      this.lastScrollY = window.scrollY;
    },
  },
};
</script>
<style>
.router-link-active {
  @apply text-blue-600;
}
/* Optional: Smooth transition for navbar hide/show */
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  
}


.margin-top-visible {
  margin-top: 30px; /* Default margin for larger screens */
  transition: margin 0.3s ease;
}

@media (max-width: 1024px) {
  .margin-top-visible {
    margin-top: 20px; /* Adjust margin for medium screens (e.g., tablets) */
  }
}

@media (max-width: 768px) {
  .margin-top-visible {
    margin-top: 15px; /* Adjust margin for smaller screens (e.g., mobile devices) */
  }
}

@media (max-width: 480px) {
  .margin-top-visible {
    margin-top: 10px; /* Adjust margin for extra small screens (e.g., very small phones) */
  }
}

/* Class to hide the navbar */
.-translate-y-full {
  transform: translateY(-100%);
}
</style>
