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
                            <nuxt-link class="flex-none text-xl font-semibold text-black" href="/" aria-label="Brand">
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
                                                <svg class="text-white h-5 w-5 p-0 fill-current"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px"
                                                    y="0px" viewBox="0 0 56.966 56.966"
                                                    style="enable-background:new 0 0 56.966 56.966;"
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
                                <a class="text-gray-700 hover:text-white hover:bg-blue-500 rounded-xl px-2 py-2"
                                    aria-label="Visit TrendyMinds LinkedIn" href="" target="_blank"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-6">
                                        <path fill="currentColor"
                                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="text-gray-700 hover:text-white hover:bg-red-500 rounded-xl px-2 py-2"
                                    aria-label="Visit TrendyMinds YouTube" href="" target="_blank"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-6">
                                        <path fill="currentColor"
                                            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="text-gray-700 hover:text-white hover:bg-blue-500 rounded-xl px-2 py-2"
                                    aria-label="Visit TrendyMinds Facebook" href="" target="_blank"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="h-6">
                                        <path fill="currentColor"
                                            d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="text-gray-700 hover:text-white hover:bg-pink-600 rounded-xl px-2 py-2"
                                    aria-label="Visit TrendyMinds Instagram" href="" target="_blank"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-6">
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

                                                    <nuxt-link to="subject"
                                                        class="flex gap-x-4 text-gray-800 hover:text-blue-600 "
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

                                                    <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 " href="#">
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

                                                    <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 " href="#">
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

                                                    <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 " href="#">
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

                                                    <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 " href="#">
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

                                                    <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 " href="#">
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

                                                    <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 " href="#">
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

                                                    <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 " href="#">
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

                                                    <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 " href="#">
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

                                                    <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 " href="#">
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
                                                <span class="text-xs font-semibold uppercase text-gray-800 ">
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
                                        <svg class="text-black h-5 w-5 p-0 fill-current mx-4"
                                            xmlns="http://www.w3.org/2000/svg"
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
                                        <label
                                            class="modal-backdrop text-red-500 -mt-4 pb-4 flex items-center justify-end"
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
                                                    <svg class="text-white h-5 w-5 p-0 fill-current"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px"
                                                        y="0px" viewBox="0 0 56.966 56.966"
                                                        style="enable-background:new 0 0 56.966 56.966;"
                                                        xml:space="preserve" width="512px" height="512px">
                                                        <path
                                                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                <div class="hidden md:block">
                                    <button type="button"
                                        class="whatsapp-icon flex  p-2 ml-2 justify-center items-center rounded-full bg-green-500 text-white hover:bg-green-600"
                                        aria-label="WhatsApp">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" >
                                            <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 29.079097 3.1186875 32.88588 4.984375 36.208984 L 2.0371094 46.730469 A 1.0001 1.0001 0 0 0 3.2402344 47.970703 L 14.210938 45.251953 C 17.434629 46.972929 21.092591 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 21.278025 46 17.792121 45.029635 14.761719 43.333984 A 1.0001 1.0001 0 0 0 14.033203 43.236328 L 4.4257812 45.617188 L 7.0019531 36.425781 A 1.0001 1.0001 0 0 0 6.9023438 35.646484 C 5.0606869 32.523592 4 28.890107 4 25 C 4 13.390466 13.390466 4 25 4 z M 16.642578 13 C 16.001539 13 15.086045 13.23849 14.333984 14.048828 C 13.882268 14.535548 12 16.369511 12 19.59375 C 12 22.955271 14.331391 25.855848 14.613281 26.228516 L 14.615234 26.228516 L 14.615234 26.230469 C 14.588494 26.195329 14.973031 26.752191 15.486328 27.419922 C 15.999626 28.087653 16.717405 28.96464 17.619141 29.914062 C 19.422612 31.812909 21.958282 34.007419 25.105469 35.349609 C 26.554789 35.966779 27.698179 36.339417 28.564453 36.611328 C 30.169845 37.115426 31.632073 37.038799 32.730469 36.876953 C 33.55263 36.755876 34.456878 36.361114 35.351562 35.794922 C 36.246248 35.22873 37.12309 34.524722 37.509766 33.455078 C 37.786772 32.688244 37.927591 31.979598 37.978516 31.396484 C 38.003976 31.104927 38.007211 30.847602 37.988281 30.609375 C 37.969311 30.371148 37.989581 30.188664 37.767578 29.824219 C 37.302009 29.059804 36.774753 29.039853 36.224609 28.767578 C 35.918939 28.616297 35.048661 28.191329 34.175781 27.775391 C 33.303883 27.35992 32.54892 26.991953 32.083984 26.826172 C 31.790239 26.720488 31.431556 26.568352 30.914062 26.626953 C 30.396569 26.685553 29.88546 27.058933 29.587891 27.5 C 29.305837 27.918069 28.170387 29.258349 27.824219 29.652344 C 27.819619 29.649544 27.849659 29.663383 27.712891 29.595703 C 27.284761 29.383815 26.761157 29.203652 25.986328 28.794922 C 25.2115 28.386192 24.242255 27.782635 23.181641 26.847656 L 23.181641 26.845703 C 21.603029 25.455949 20.497272 23.711106 20.148438 23.125 C 20.171937 23.09704 20.145643 23.130901 20.195312 23.082031 L 20.197266 23.080078 C 20.553781 22.728924 20.869739 22.309521 21.136719 22.001953 C 21.515257 21.565866 21.68231 21.181437 21.863281 20.822266 C 22.223954 20.10644 22.02313 19.318742 21.814453 18.904297 L 21.814453 18.902344 C 21.828863 18.931014 21.701572 18.650157 21.564453 18.326172 C 21.426943 18.001263 21.251663 17.580039 21.064453 17.130859 C 20.690033 16.232501 20.272027 15.224912 20.023438 14.634766 L 20.023438 14.632812 C 19.730591 13.937684 19.334395 13.436908 18.816406 13.195312 C 18.298417 12.953717 17.840778 13.022402 17.822266 13.021484 L 17.820312 13.021484 C 17.450668 13.004432 17.045038 13 16.642578 13 z M 16.642578 15 C 17.028118 15 17.408214 15.004701 17.726562 15.019531 C 18.054056 15.035851 18.033687 15.037192 17.970703 15.007812 C 17.906713 14.977972 17.993533 14.968282 18.179688 15.410156 C 18.423098 15.98801 18.84317 16.999249 19.21875 17.900391 C 19.40654 18.350961 19.582292 18.773816 19.722656 19.105469 C 19.863021 19.437122 19.939077 19.622295 20.027344 19.798828 L 20.027344 19.800781 L 20.029297 19.802734 C 20.115837 19.973483 20.108185 19.864164 20.078125 19.923828 C 19.867096 20.342656 19.838461 20.445493 19.625 20.691406 C 19.29998 21.065838 18.968453 21.483404 18.792969 21.65625 C 18.639439 21.80707 18.36242 22.042032 18.189453 22.501953 C 18.016221 22.962578 18.097073 23.59457 18.375 24.066406 C 18.745032 24.6946 19.964406 26.679307 21.859375 28.347656 C 23.05276 29.399678 24.164563 30.095933 25.052734 30.564453 C 25.940906 31.032973 26.664301 31.306607 26.826172 31.386719 C 27.210549 31.576953 27.630655 31.72467 28.119141 31.666016 C 28.607627 31.607366 29.02878 31.310979 29.296875 31.007812 L 29.298828 31.005859 C 29.655629 30.601347 30.715848 29.390728 31.224609 28.644531 C 31.246169 28.652131 31.239109 28.646231 31.408203 28.707031 L 31.408203 28.708984 L 31.410156 28.708984 C 31.487356 28.736474 32.454286 29.169267 33.316406 29.580078 C 34.178526 29.990889 35.053561 30.417875 35.337891 30.558594 C 35.748225 30.761674 35.942113 30.893881 35.992188 30.894531 C 35.995572 30.982516 35.998992 31.07786 35.986328 31.222656 C 35.951258 31.624292 35.8439 32.180225 35.628906 32.775391 C 35.523582 33.066746 34.975018 33.667661 34.283203 34.105469 C 33.591388 34.543277 32.749338 34.852514 32.4375 34.898438 C 31.499896 35.036591 30.386672 35.087027 29.164062 34.703125 C 28.316336 34.437036 27.259305 34.092596 25.890625 33.509766 C 23.114812 32.325956 20.755591 30.311513 19.070312 28.537109 C 18.227674 27.649908 17.552562 26.824019 17.072266 26.199219 C 16.592866 25.575584 16.383528 25.251054 16.208984 25.021484 L 16.207031 25.019531 C 15.897202 24.609805 14 21.970851 14 19.59375 C 14 17.077989 15.168497 16.091436 15.800781 15.410156 C 16.132721 15.052495 16.495617 15 16.642578 15 z"></path>
                                            </svg>
                                        <span class="animate-pulse font-semibold pl-1">WhatsApp Group</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
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
