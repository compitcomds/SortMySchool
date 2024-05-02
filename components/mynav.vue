<template>
    <!-- ========== HEADER ========== -->
    <header
        class="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white text-sm py-3 md:py-0  text-black">
        <nav class="w-full mx-auto px-4 md:px-6 lg:px-14" aria-label="Global">
            <div class="relative md:flex md:items-center md:justify-between">
                <div class="flex items-center justify-between ">
                    <!-- ssocial logo  -->
                    <!-- <div class="hidden sm:flex gap-3">
                        <div class="bg-slate-100 w-6 h-6"></div>
                        <div class="bg-slate-100 w-6 h-6"></div>
                        <div class="bg-slate-100 w-6 h-6"></div>
                        <div class="bg-slate-100 w-6 h-6"></div>
                    </div> -->
                    <!-- end logo  -->
                    <div class="md:hidden flex justify-between items-center w-full">
                        <button type="button"
                            class="hs-collapse-toggle flex justify-center items-center size-9 text-sm font-semibold rounded-lg border border-gray-500 text-gray-800 hover:bg-gray-800 hover:text-white disabled:opacity-50 disabled:pointer-events-none "
                            data-hs-collapse="#navbar-collapse-with-animation"
                            aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                            <svg class="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="3" x2="21" y1="6" y2="6" />
                                <line x1="3" x2="21" y1="12" y2="12" />
                                <line x1="3" x2="21" y1="18" y2="18" />
                            </svg>
                            <svg class="hs-collapse-open:block hidden flex-shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
<!-- logo -->
                        <div class="w-28">
                            <nuxt-link class="flex-none text-xl font-semibold text-black" href="/"
                                aria-label="Brand">
                                <img src="https://www.3forty.media/zosia/demo-5/wp-content/uploads/2022/09/zosia-logo.png"
                                    alt="" srcset="" />
                            </nuxt-link>
                        </div>
                        <!-- search icon -->
                        <div class="h-6 w-8 white">
                            <label for="my_modal_7" class=""><span class="">
                                <svg class="text-black h-5 w-5 p-0 fill-current" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                                    viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;"
                                    xml:space="preserve" width="512px" height="512px">
                                    <path
                                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                            </span>
                        </label>
                        <!-- Put this part before </body> tag -->
                        <input type="checkbox" id="my_modal_7" class="modal-toggle" />
                        <div class="modal w-full" role="dialog">
                            <div class="modal-box ">
                                <label class="modal-backdrop text-red-500 -mt-4 pb-4 flex items-center justify-end"
                                    for="my_modal_7"><Span
                                        class=" w-6 h-auto px-2 py-0 rounded-md pb-1 border hover:bg-slate-200 border-red-400 font-semibold">x</Span></label>
                                <p class="flex items-center justify-center p-3">Search Your Result</p>
                                <div class="flex">
                                    <input type="text" placeholder="Search..." name="q" id="query"
                                        class="w-full p-3  rounded-full border-2 border-r-white rounded-r-none border-gray-300 placeholder-gray-500" />
                                    <button
                                        class="inline-flex items-center gap-2 bg-violet-700 text-white text-lg font-semibold py-3 px-6 rounded-r-full">
                                        <span>Search</span>
                                        <span class="hidden md:block">
                                            <svg class="text-white h-5 w-5 p-0 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                                                viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;"
                                                xml:space="preserve" width="512px" height="512px">
                                                <path
                                                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
        
                        </div>
                        </div>
                    </div>
                </div>

                <div id="navbar-collapse-with-animation"
                    class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
                    <div
                        class="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full flex justify-between items-center [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                        <div class="hidden sm:flex gap-3">
                            <div class="hidden sm:flex gap-6">
                                <a class="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds LinkedIn" href=""
                                    target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-6">
                                        <path fill="currentColor"
                                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds YouTube" href=""
                                    target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-6">
                                        <path fill="currentColor"
                                            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Facebook" href=""
                                    target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="h-6">
                                        <path fill="currentColor"
                                            d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Instagram" href=""
                                    target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-6">
                                        <path fill="currentColor"
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                        </path>
                                    </svg>
                                </a>
        
                            </div>
                        </div>
                        <div
                            class="w-full md:w-fit flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-neutral-700">

                            <nuxt-link class="font-medium text-blue-600 py-3 md:py-6 dark:text-blue-500" to="/"
                                aria-current="page">Home</nuxt-link>
                            <div
                                class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-6">
                                <nuxt-link to="subject">
                                    <button type="button"
                                        class="flex items-center w-full text-gray-800 hover:text-gray-600 font-medium ">
                                        Case Brief
                                        <svg class="flex-shrink-0 ms-2 size-4" xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>
                                </nuxt-link>

                                <div
                                    class=" hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-[705px] lg:w-[750px] hidden z-10 top-full end-0 overflow-hidden bg-white md:shadow-2xl rounded-lg  before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                                    <div class="grid grid-cols-2 md:grid-cols-10">
                                        <div class="md:col-span-3">
                                            <div class="flex flex-col py-6 px-3 md:px-6">
                                                <div class="space-y-4">
                                                    <span
                                                        class="mb-2 text-xs font-semibold uppercase text-gray-800 ">About
                                                        us</span>

                                                    <nuxt-link to="subject"class="flex gap-x-4 text-gray-800 hover:text-blue-600 "
                                                        href="#">
                                                        <svg class="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round">
                                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                                        </svg>
                                                        <div class="grow">
                                                            <p>Administrative Law</p>
                                                        </div>
                                                    </nuxt-link>

                                                    <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 "
                                                        href="#">
                                                        <svg class="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round">
                                                            <rect width="7" height="7" x="14" y="3" rx="1" />
                                                            <path
                                                                d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
                                                        </svg>
                                                        <div class="grow">
                                                            <p>Integrations</p>
                                                        </div>
                                                    </a>

                                                    <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 "
                                                        href="#">
                                                        <svg class="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round">
                                                            <path
                                                                d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                                            <polyline points="14 2 14 8 20 8" />
                                                            <line x1="16" x2="8" y1="13" y2="13" />
                                                            <line x1="16" x2="8" y1="17" y2="17" />
                                                            <line x1="10" x2="8" y1="9" y2="9" />
                                                        </svg>
                                                        <div class="grow">
                                                            <p>Guides</p>
                                                        </div>
                                                    </a>

                                                    <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 "
                                                        href="#">
                                                        <svg class="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round">
                                                            <path d="m7 11 2-2-2-2" />
                                                            <path d="M11 13h4" />
                                                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                                        </svg>
                                                        <div class="grow">
                                                            <p>API Reference</p>
                                                        </div>
                                                    </a>

                                                    <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 "
                                                        href="#">
                                                        <svg class="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round">
                                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                                        </svg>
                                                        <div class="grow">
                                                            <p>API Status</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="md:col-span-3">
                                            <div class="flex flex-col py-6 px-3 md:px-6">
                                                <div class="space-y-4">
                                                    <span
                                                        class="mb-2 text-xs font-semibold uppercase text-gray-800 ">Support</span>

                                                    <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 "
                                                        href="#">
                                                        <svg class="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round">
                                                            <circle cx="12" cy="12" r="10" />
                                                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                                            <path d="M12 17h.01" />
                                                        </svg>
                                                        <div class="grow">
                                                            <p>Help Center</p>
                                                        </div>
                                                    </a>

                                                    <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 "
                                                        href="#">
                                                        <svg class="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round">
                                                            <circle cx="12" cy="12" r="4" />
                                                            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
                                                        </svg>
                                                        <div class="grow">
                                                            <p>Developer Hub</p>
                                                        </div>
                                                    </a>

                                                    <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 "
                                                        href="#">
                                                        <svg class="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round">
                                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                                            <circle cx="9" cy="7" r="4" />
                                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                                        </svg>
                                                        <div class="grow">
                                                            <p>Community Forum</p>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div class="mt-7 space-y-4">
                                                    <span
                                                        class="mb-2 text-xs font-semibold uppercase text-gray-800 ">Partners</span>

                                                    <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 "
                                                        href="#">
                                                        <svg class="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round">
                                                            <path
                                                                d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6" />
                                                            <polyline points="14 2 14 8 20 8" />
                                                            <path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                            <path d="M7 16.5 8 22l-3-1-3 1 1-5.5" />
                                                        </svg>
                                                        <div class="grow">
                                                            <p>Become a Partner</p>
                                                        </div>
                                                    </a>

                                                    <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 "
                                                        href="#">
                                                        <svg class="flex-shrink-0 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round">
                                                            <path d="m15 5 4 4" />
                                                            <path
                                                                d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
                                                            <path d="m8 6 2-2" />
                                                            <path
                                                                d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z" />
                                                            <path d="m18 16 2-2" />
                                                            <path
                                                                d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
                                                        </svg>
                                                        <div class="grow">
                                                            <p>Build on Preline</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-span-full md:col-span-4">
                                            <div class="flex flex-col bg-gray-50 p-6 ">
                                                <span
                                                    class="text-xs font-semibold uppercase text-gray-800 ">
                                                    DU Case Mate</span>

                                                <a class="mt-4 group" href="#">
                                                    <div class="aspect-w-16 aspect-h-9">
                                                        <img class="w-full object-cover rounded-lg" src='/assets/du.jpg'
                                                            alt="Image Description">
                                                    </div>
                                                    <div class="mt-2">
                                                        <p class="text-gray-800 ">Lorem ipsum,
                                                            dolor sit amet consectetur adipisicing elit. Voluptates in
                                                            reiciendis enim, voluptas facilis et voluptatum nihil odio.
                                                        </p>
                                                        <p
                                                            class="mt-3 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-400 dark:hover:text-blue-500">
                                                            Explore Now
                                                            <svg class="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                                                                xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none"
                                                                stroke="currentColor" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round">
                                                                <path d="m9 18 6-6-6-6" />
                                                            </svg>
                                                        </p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <a class="font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6  dark:hover:text-neutral-500"
                                href="#">
                                About
                            </a>
                        </div>
                        <div class="h-full w-auto hidden md:block">
                            <div class="watsup-group flex items-center">
                                <label for="my_modal_8" class=""><span class="">
                                        <svg class="text-black h-5 w-5 p-0 fill-current mx-4" xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                                            viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;"
                                            xml:space="preserve" width="512px" height="512px">
                                            <path
                                                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                        </svg>
                                    </span>
                                </label>
                                <!-- Put this part before </body> tag -->
                                <input type="checkbox" id="my_modal_8" class="modal-toggle" />
                                <div class="modal w-full" role="dialog">
                                    <div class="modal-box ">
                                        <label class="modal-backdrop text-red-500 -mt-4 pb-4 flex items-center justify-end"
                                            for="my_modal_8"><Span
                                                class=" w-6 h-auto px-2 py-0 rounded-md pb-1 border hover:bg-slate-200 border-red-400 font-semibold">x</Span></label>
                                        <p class="flex items-center justify-center p-3">Search Your Result</p>
                                        <div class="flex">
                                            <input type="text" placeholder="Search..." name="q" id="query"
                                                class="w-full p-3  rounded-full border-2 border-r-white rounded-r-none border-gray-300 placeholder-gray-500" />
                                            <button
                                                class="inline-flex items-center gap-2 bg-violet-700 text-white text-lg font-semibold py-3 px-6 rounded-r-full">
                                                <span>Search</span>
                                                <span class="hidden md:block">
                                                    <svg class="text-white h-5 w-5 p-0 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                                                        viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;"
                                                        xml:space="preserve" width="512px" height="512px">
                                                        <path
                                                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                
                                </div>
                                <button type="button"
                                    class="whatsapp-icon hidden md:block p-2 ml-2 justify-center items-center rounded-full bg-green-500 text-white hover:bg-green-600"
                                    aria-label="WhatsApp">
                                    <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4.79 20a11.22 11.22 0 0 1 2.34-.92c1.04-.25 2-.58 2.85-1L15.54 19c.75.2 1.47.3 2.14.3 1.16 0 2.26-.3 3.27-.86A5.78 5.78 0 0 0 22 14.51c0-1.04-.27-2-.76-2.9l.38-.65c.27-.46.4-.96.4-1.46a5.78 5.78 0 0 0-5.15-5.74A11.44 11.44 0 0 0 12 2C6.6 2 2 6.61 2 12s4.6 10 10 10c2.05 0 4.01-.6 5.68-1.73L21 22l-3.39-1.11C15.86 21.72 14 22 12 22c-1.82 0-3.53-.4-5.07-1.12L2 22l1.79-4.79zM7 14.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm6.5 1c-.26 0-.51-.03-.76-.08l-2.6-.65c-.52.28-1.12.43-1.74.43-.55 0-1.08-.13-1.57-.37l-.15-.07-.39.33a7.82 7.82 0 0 1-2.42-1.54l-.18-.19.27-.41a5.64 5.64 0 0 1-.4-1.76c0-1.01.27-1.98.78-2.82l.15-.23-.27-.22a6.09 6.09 0 0 1-1.51-3.99c0-.51.05-1.02.15-1.52l.12-.42L5 4.1a.18.18 0 0 1 .16-.1l3.4-.05c.17 0 .33.1.41.26l.5 1.05c.08.17.25.28.44.28.2 0 .38-.14.45-.34l.26-.75 1.05-.01c.17 0 .33.1.41.26l.48 1.07c.08.17.25.28.44.28h.05c.17 0 .33.1.41.26l1.05 2.32c.09.2.3.34.55.34h.05c.13 0 .25-.04.35-.12l1.89-1.52c.18-.14.42-.17.64-.07l2.34 1 .25.25c.23.23.34.53.31.83a6.09 6.09 0 0 1-1.5 3.99l-.27.33.17.38c.52 1.13.79 2.4.79 3.68 0 .97-.15 1.91-.43 2.79l-.17.51.51.16c.9.28 1.86.43 2.84.43 1.02 0 1.99-.14 2.91-.41l.52-.16.16.51a10.28 10.28 0 0 1-.46 2.81l-.2.56-.56.2c-1.24.41-2.57.63-3.94.63z">
                                        </path>
                                    </svg> -->
                                    <span class="animate-pulse font-semibold">WhatsApp Group</span>
                                </button>
                            </div>
                
                        </div>
                    </div>

                </div>
                <!-- search icons  -->
                <!-- <div class="watsup-group flex items-center justify-end space-x-5">
                    <label for="my_modal_7" class=""><span class="">
                            <svg class="text-black h-5 w-5 p-0 fill-current" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                                viewBox="0 0 56.966 56.966" style="enable-background: new 0 0 56.966 56.966"
                                xml:space="preserve" width="512px" height="512px">
                                <path
                                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </span>
                    </label>
                    
                    <input type="checkbox" id="my_modal_7" class="modal-toggle" />
                    <div class="modal w-screen" role="dialog">
                        <div class="modal-box">
                            <label class="modal-backdrop text-red-500 -mt-4 pb-4 flex items-center justify-end"
                                for="my_modal_7"><Span
                                    class="w-6 h-auto px-2 py-0 rounded-md pb-1 border hover:bg-slate-200 border-red-400 font-semibold">x</Span></label>
                            <p class="flex items-center justify-center p-3">
                                Search Your Result
                            </p>
                            <div class="flex">
                                <input type="text" placeholder="Search..." name="q" id="query"
                                    class="w-full p-3 rounded-full border-2 border-r-white rounded-r-none border-gray-300 placeholder-gray-500" />
                                <button
                                    class="inline-flex items-center gap-2 bg-violet-700 text-white text-lg font-semibold py-3 px-6 rounded-r-full">
                                    <span>Search</span>
                                    <span class="hidden md:block">
                                        <svg class="text-white h-5 w-5 p-0 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                                            viewBox="0 0 56.966 56.966" style="enable-background: new 0 0 56.966 56.966"
                                            xml:space="preserve" width="512px" height="512px">
                                            <path
                                                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div> -->
                <!-- end search icons  -->
            </div>
        </nav>
    </header>
    <!-- ========== END HEADER ========== -->

    <!-- ========== HEADER ========== --
<!-- ========== END HEADER ========== -->

</template>



<script>
export default {

};
</script>

<style lang="scss" scoped></style>
