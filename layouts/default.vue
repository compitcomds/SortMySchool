
<template>
    <header
        class="flex flex-col flex-wrap sm:justify-center sm:flex-nowrap z-50 w-full bg-white text-sm  sm:py-0 text-black">
        <div class="inline-flex gap-5 justify-between items-center sm:p-0 md:p-0 lg:py-6 lg:px-10">
            <div class="h-auto w-36 hidden sm:block md:block">
                <img src="https://www.3forty.media/zosia/demo-5/wp-content/uploads/2022/09/zosia-logo.png" alt=""
                    srcset="">
                <p>A personal blog theme</p>
            </div>
            <div>
                <img src="https://www.3forty.media/zosia/demo-5/wp-content/uploads/2022/09/header-promo.png" alt=""
                    srcset="">
            </div>
        </div>
        <hr>
        <mynav/>
        <nav class="w-full mx-auto px-6 py-2 md:px-6 lg:px-10 shadow-sm grid grid-cols-3" aria-label="Global">
            <div class="relative sm:flex sm:items-center">
                <div class="flex items-center justify-start">
                    <div class="sm:hidden">
                        <button type="button"
                            class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg  bg-white   text-black shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent "
                            data-hs-collapse="#navbar-slide-up-animation" aria-controls="navbar-slide-up-animation"
                            aria-label="Toggle navigation">
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
                        <div id="navbar-slide-up-animation"
                            class="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block">
                            <div
                                class="flex flex-col gap-5 mt-8 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                                <nuxt class="font-medium text-blue-500" href="#" aria-current="page">Home </nuxt>

                                <div
                                    class="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover] ">
                                    <button type="button"
                                        class="sm:py-4 flex items-center w-full text-black hover:text-gray-600 font-medium ">
                                        Case Brief
                                        <svg class="ms-2 flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>

                                    <div
                                        class="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-[800px] items-center justify-center hidden z-10 sm:mt-3 top-full start-0  bg-white sm:shadow-md rounded-lg py-2 sm:px-2  sm:dark:border  before:absolute">
                                        <div class="sm:grid sm:grid-cols-4">
                                            <div class="flex flex-col">
                                                <nuxt
                                                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                                    href="#">
                                                    Administrative Law
                                                </nuxt>
                                                <nuxt
                                                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                                    href="#">
                                                    Services
                                                </nuxt>
                                                <nuxt
                                                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                                    href="#">
                                                    Company Law
                                                </nuxt>
                                                <nuxt
                                                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                                    href="#">
                                                    Contract Law
                                                </nuxt>
                                            </div>

                                            <div class="flex flex-col">
                                                <nuxt
                                                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                                    href="#">
                                                    Administrative Law
                                                </nuxt>
                                                <nuxt
                                                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                                    href="#">
                                                    Services
                                                </nuxt>
                                                <nuxt
                                                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                                    href="#">
                                                    Company Law
                                                </nuxt>
                                                <nuxt
                                                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                                    href="#">
                                                    Contract Law
                                                </nuxt>
                                            </div>


                                            <div class="flex flex-col">
                                                <nuxt
                                                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                                    href="#">
                                                    Administrative Law
                                                </nuxt>
                                                <nuxt
                                                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                                    href="#">
                                                    Services
                                                </nuxt>
                                                <nuxt
                                                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                                    href="#">
                                                    Company Law
                                                </nuxt>
                                                <nuxt
                                                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                                    href="#">
                                                    Contract Law
                                                </nuxt>
                                            </div>
                                            <div class="flex flex-col">
                                                <nuxt
                                                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                                    href="#">
                                                    Administrative Law
                                                </nuxt>
                                                <nuxt
                                                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                                    href="#">
                                                    Services
                                                </nuxt>
                                                <nuxt
                                                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                                    href="#">
                                                    Company Law
                                                </nuxt>
                                                <nuxt
                                                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                                    href="#">
                                                    Contract Law
                                                </nuxt>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <nuxt-link class="font-medium text-black hover:text-gray-400" to="">About</nuxt-link>
                            </div>
                        </div>
                    </div>
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
            </div>
            <nuxt class="sm:hidden flex items-center text-xl font-semibold text-black" href="#"><img
                    src="https://www.3forty.media/zosia/demo-5/wp-content/uploads/2022/09/zosia-logo.png" alt=""
                    srcset="" class="h-5">
            </nuxt>
            <div class="relative ">
                <div id="navbar-slide-up-animation"
                    class="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block">
                    <div class="flex flex-col gap-5 mt-8 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                        <nuxt class="font-medium text-blue-500" href="#" aria-current="page">Home </nuxt>

                        <div
                            class="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover] ">
                            <button type="button"
                                class="sm:py-4 flex items-center w-full text-black hover:text-gray-600 font-medium ">
                                Case Brief
                                <svg class="ms-2 flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>

                            <div
                                class="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-[800px] items-center justify-center hidden z-10 sm:mt-3 top-full start-0  bg-white sm:shadow-md rounded-lg py-2 sm:px-2  sm:dark:border  before:absolute">
                                <div class="sm:grid sm:grid-cols-4">
                                    <div class="flex flex-col">
                                        <nuxt
                                            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                            href="#">
                                            Administrative Law
                                        </nuxt>
                                        <nuxt
                                            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                            href="#">
                                            Services
                                        </nuxt>
                                        <nuxt
                                            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                            href="#">
                                            Company Law
                                        </nuxt>
                                        <nuxt
                                            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                            href="#">
                                            Contract Law
                                        </nuxt>
                                    </div>

                                    <div class="flex flex-col">
                                        <nuxt
                                            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                            href="#">
                                            Administrative Law
                                        </nuxt>
                                        <nuxt
                                            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                            href="#">
                                            Services
                                        </nuxt>
                                        <nuxt
                                            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                            href="#">
                                            Company Law
                                        </nuxt>
                                        <nuxt
                                            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                            href="#">
                                            Contract Law
                                        </nuxt>
                                    </div>


                                    <div class="flex flex-col">
                                        <nuxt
                                            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                            href="#">
                                            Administrative Law
                                        </nuxt>
                                        <nuxt
                                            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                            href="#">
                                            Services
                                        </nuxt>
                                        <nuxt
                                            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                            href="#">
                                            Company Law
                                        </nuxt>
                                        <nuxt
                                            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                            href="#">
                                            Contract Law
                                        </nuxt>
                                    </div>
                                    <div class="flex flex-col">
                                        <nuxt
                                            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                            href="#">
                                            Administrative Law
                                        </nuxt>
                                        <nuxt
                                            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                            href="#">
                                            Services
                                        </nuxt>
                                        <nuxt
                                            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                            href="#">
                                            Company Law
                                        </nuxt>
                                        <nuxt
                                            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                                            href="#">
                                            Contract Law
                                        </nuxt>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nuxt-link class="font-medium text-black hover:text-gray-400" to="">About</nuxt-link>
                    </div>
                </div>
            </div>
            <div class="watsup-group flex items-center justify-end space-x-5">
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
               <!-- <input type="checkbox" id="my_modal_7" class="modal-toggle" />
                <div class="modal w-screen" role="dialog">
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

                </div> -->
                <button type="button"
                    class="whatsapp-icon hidden md:block p-2  justify-center items-center rounded-full bg-green-500 text-white hover:bg-green-600"
                    aria-label="WhatsApp">
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4.79 20a11.22 11.22 0 0 1 2.34-.92c1.04-.25 2-.58 2.85-1L15.54 19c.75.2 1.47.3 2.14.3 1.16 0 2.26-.3 3.27-.86A5.78 5.78 0 0 0 22 14.51c0-1.04-.27-2-.76-2.9l.38-.65c.27-.46.4-.96.4-1.46a5.78 5.78 0 0 0-5.15-5.74A11.44 11.44 0 0 0 12 2C6.6 2 2 6.61 2 12s4.6 10 10 10c2.05 0 4.01-.6 5.68-1.73L21 22l-3.39-1.11C15.86 21.72 14 22 12 22c-1.82 0-3.53-.4-5.07-1.12L2 22l1.79-4.79zM7 14.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm6.5 1c-.26 0-.51-.03-.76-.08l-2.6-.65c-.52.28-1.12.43-1.74.43-.55 0-1.08-.13-1.57-.37l-.15-.07-.39.33a7.82 7.82 0 0 1-2.42-1.54l-.18-.19.27-.41a5.64 5.64 0 0 1-.4-1.76c0-1.01.27-1.98.78-2.82l.15-.23-.27-.22a6.09 6.09 0 0 1-1.51-3.99c0-.51.05-1.02.15-1.52l.12-.42L5 4.1a.18.18 0 0 1 .16-.1l3.4-.05c.17 0 .33.1.41.26l.5 1.05c.08.17.25.28.44.28.2 0 .38-.14.45-.34l.26-.75 1.05-.01c.17 0 .33.1.41.26l.48 1.07c.08.17.25.28.44.28h.05c.17 0 .33.1.41.26l1.05 2.32c.09.2.3.34.55.34h.05c.13 0 .25-.04.35-.12l1.89-1.52c.18-.14.42-.17.64-.07l2.34 1 .25.25c.23.23.34.53.31.83a6.09 6.09 0 0 1-1.5 3.99l-.27.33.17.38c.52 1.13.79 2.4.79 3.68 0 .97-.15 1.91-.43 2.79l-.17.51.51.16c.9.28 1.86.43 2.84.43 1.02 0 1.99-.14 2.91-.41l.52-.16.16.51a10.28 10.28 0 0 1-.46 2.81l-.2.56-.56.2c-1.24.41-2.57.63-3.94.63z">
                        </path>
                    </svg> -->
                    WatsApp Group
                </button>
            </div>
        </nav>
    </header>
    <slot />
    <footer class="bg-sky-400">
        <div class="mx-auto max-w-7xl py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <nav class="-mx-5 -my-2 flex flex-wrap justify-center order-2" aria-label="Footer">
                <div class="px-5">
                    <a href="#" class="text-base text-white hover:text-gray-200">Terms of Service</a>
                </div>

                <div class="px-5">
                    <a href="#" class="text-base text-white hover:text-gray-200">Privacy Policy</a>
                </div>
            </nav>
            <div class="mt-8 md:mb-8 flex justify-center space-x-6 md:order-3  ">
                <a href="#" class="text-white hover:text-gray-200">
                    <span class="sr-only">Facebook</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clip-rule="evenodd" />
                    </svg>
                </a>

                <a href="#" class="text-white hover:text-gray-200">
                    <span class="sr-only">Twitter</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                </a>

                <a href="#" class="text-white hover:text-gray-200">
                    <span class="sr-only">GitHub</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
            <div class="mt-8  md:order-1 md:mt-0 ">
                <p class="text-center text-base text-white">
                    &copy; FG-Lawkit Blog App.
                </p>
            </div>
        </div>
    </footer>
</template>

<script>

export default {

}
</script>

<style scoped>
.nav-item {
    @apply font-medium text-gray-500 py-3 md:py-6 dark:text-neutral-400
}

.nav-active, .router-link-exact-active {
    @apply font-medium text-blue-600 py-3 md:py-6 dark:text-blue-500
}
</style>