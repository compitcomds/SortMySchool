<template>
  <!-- ========== HEADER ========== -->
  <header
    class="flex flex-wrap md:justify-start md:flex-nowrap z-10 w-full bg-stone-50 text-sm py-3 md:py-0 text-black"
  >
    <nav class="w-full mx-auto px-4 md:px-6" aria-label="Global">
      <div
        class="relative md:flex md:items-center md:justify-between xl:max-w-7xl xl:mx-auto"
      >
        <div class="flex items-center justify-between">
          <!-- ssocial logo  -->
          <!-- <div class="hidden sm:flex gap-3">
                        <div class="bg-slate-100 w-6 h-6"></div>
                        <div class="bg-slate-100 w-6 h-6"></div>
                        <div class="bg-slate-100 w-6 h-6"></div>
                        <div class="bg-slate-100 w-6 h-6"></div>
                    </div> -->
          <!-- end logo  -->
          <div class="md:hidden flex justify-between items-center w-full">
            <button
              type="button"
              class="hs-collapse-toggle flex justify-center items-center size-9 text-sm font-semibold rounded-lg border border-gray-500 text-gray-800 hover:bg-gray-800 hover:text-white disabled:opacity-50 disabled:pointer-events-none"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                class="hs-collapse-open:hidden flex-shrink-0 size-4"
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
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                class="hs-collapse-open:block hidden flex-shrink-0 size-4"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <!-- logo -->
            <div class="w-28">
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
            <button
              type="button"
              data-hs-overlay="#search-modal"
              class="md:hidden"
            >
              <svg
                class="text-black h-5 w-5 p-0 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style="enable-background: new 0 0 56.966 56.966"
                xml:space="preserve"
                width="512px"
                height="512px"
              >
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="navbar-collapse-with-animation"
          class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
        >
          <div
            class="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full flex justify-between items-center [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
          >
            <div class="hidden sm:flex gap-3">
              <div class="hidden sm:flex gap-6">
                <nuxt-link
                  class="text-gray-700 hover:text-red-500 hover:bg-slate-200 rounded-xl px-2 py-2"
                  aria-label="Send us an email"
                  to="/contact"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="h-6 rounded-xl transition duration-300 ease-in-out hover:scale-110"
                  >
                    <path
                      fill="currentColor"
                      d="M499.2 108.8H12.8A12.81 12.81 0 000 121.6v268.8a12.81 12.81 0 0012.8 12.8h486.4a12.81 12.81 0 0012.8-12.8V121.6a12.81 12.81 0 00-12.8-12.8zm0 38.4L256 279.576 12.8 147.2V121.6L256 253.976 499.2 121.6z"
                    ></path>
                  </svg>
                </nuxt-link>
                <a
                  class="text-gray-700 hover:text-white hover:bg-blue-500 rounded-xl px-2 py-2"
                  aria-label="Visit Fg-Lawkit LinkedIn"
                  href="https://www.linkedin.com/in/parthjain98?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="h-6 transition duration-300 ease-in-out hover:scale-110"
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                </a>
                <a
                  class="text-gray-700 hover:text-white hover:bg-red-500 rounded-xl px-2 py-2"
                  aria-label="Visit Fg-Lawkit YouTube"
                  href="https://youtube.com/playlist?list=PL-1DBVyVi7EYNGuEvsmM2Ep0_gujUyDsB&si=Gp4qef3Ohbmd1ylx"
                  target="_blank"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    class="h-6 transition duration-300 ease-in-out hover:scale-110"
                  >
                    <path
                      fill="currentColor"
                      d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div
              class="w-full md:w-fit flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid"
            >
              <nuxt-link
                class="font-medium lg:text-lg py-3 md:py-6"
                to="/"
                aria-current="page"
                >Home</nuxt-link
              >
              <div
                class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-6"
              >
                <nuxt-link to="/subject">
                  <button
                    type="button"
                    class="flex lg:text-lg items-center w-full hover:text-gray-600 font-medium"
                  >
                    Case Brief
                    <svg
                      class="flex-shrink-0 ms-2 size-4 lg:text-lg"
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
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-[705px] lg:w-[750px] hidden z-10 top-full end-0 overflow-hidden bg-white md:shadow-2xl rounded-lg before:absolute before:-top-5 before:start-0 before:w-full before:h-5"
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

              <nuxt-link
                class="font-medium lg:text-lg text-gray-800 hover:text-gray-600 py-3 md:py-6"
                to="/contact"
              >
                Contact Us
              </nuxt-link>
            </div>
            <div class="h-full w-auto hidden md:block">
              <div class="watsup-group flex items-center">
                <!-- SearchBox -->
                <button
                  type="button"
                  data-hs-overlay="#search-modal"
                  class="hidden md:block"
                >
                  <svg
                    class="text-black h-5 w-5 p-0 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    style="enable-background: new 0 0 56.966 56.966"
                    xml:space="preserve"
                    width="512px"
                    height="512px"
                  >
                    <path
                      d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <!-- ========== END HEADER ========== -->

  <!-- ========== HEADER ========== -- -->
  <!-- ========== END HEADER ========== -->
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.router-link-active {
  @apply text-blue-600;
}
</style>
