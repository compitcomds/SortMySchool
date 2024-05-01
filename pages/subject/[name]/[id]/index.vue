<template>
    <div>
        <!-- {{ name }}
        <hr>
        {{ id }}
        <hr> -->
        <!-- Blog Article -->
        <div class="max-w-[85rem]  mx-auto" id="app">
            <div class="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 px-4 sm:px-6 lg:px-8 bg-indigo-50">
                <!-- Content -->
                <div class="lg:col-span-2">                    
                    <div class="py-6 lg:pe-8">
                        <div class="flex mb-4" aria-label="Breadcrumb">
                            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                              <li class="inline-flex items-center">
                                <a href="#" class="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 h-4 w-4">
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                  </svg>
                                  Documentation
                                </a>
                              </li>
                              <li>
                                <div class="flex items-center">
                                  <span class="mx-2.5 text-gray-800 ">/</span>
                                  <a href="#" class="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
                                    Database
                                  </a>
                                </div>
                              </li>
                              <li aria-current="page">
                                <div class="flex items-center">
                                  <span class="mx-2.5 text-gray-800 ">/</span>
                                  <span class="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
                                    Replication
                                  </span>
                                </div>
                              </li>
                            </ol>
                        </div>
                        <div class="space-y-5 lg:space-y-8">
                            <!-- <nuxt-link
                                class="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline "
                                to="pages\subject\[name]\index.vue">
                                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m15 18-6-6 6-6" />
                                </svg>
                                Back to Blog
                            </nuxt-link> -->
                            <div class="flex items-center gap-x-5">
                                <div v-for="(tag, index) in tags" :key="index">
                                    <a class="inline-flex items-center lg:animate-pulse gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-200 text-gray-800 hover:bg-gray-300"
                                        href="#">
                                        {{ tag }}
                                    </a>
                                </div>
                                <!-- <p class="text-xs sm:text-sm text-gray-800 ">January 18, 2023</p> -->
                            </div>
                            <h2 class="text-3xl font-bold lg:text-5xl ">{{ title }}</h2>
                            <div>
                                <div class="text-center">
                                    <div class="gap-3">
                                        <figure class="relative w-full h-60">
                                            <img class="size-full absolute top-0 start-0 object-cover rounded-xl"
                                                :src="imgSrc" alt="Image Description">
                                        </figure>
                                    </div>
                                    <!-- <span class="mt-3 block text-sm text-center text-gray-500 ">
                                    Working process
                                </span> -->
                                </div>
                                <div class="flex justify-between px-4 items-center gap-x-1.5 pt-6">
                                    <!-- Button -->
                                    <div class="hs-tooltip inline-block">
                                        <div
                                            class="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span class="text-gray-500 hover:text-gray-800">875 views</span>
                                        </div>
                                    </div>


                                    <!-- Button -->

                                    <div class="block h-3 border-e border-gray-300 mx-3 "></div>

                                    <!-- Button -->
                                    <div class="hs-dropdown relative inline-flex">
                                        <button type="button" id="blog-article-share-dropdown"
                                            class="hs-dropdown-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 ">
                                            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                                <polyline points="16 6 12 2 8 6" />
                                                <line x1="12" x2="12" y1="2" y2="15" />
                                            </svg>
                                            Share
                                        </button>
                                        <div class="hs-dropdown-menu w-56 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mb-1 z-10 bg-gray-900 shadow-md rounded-xl p-2 "
                                            aria-labelledby="blog-article-share-dropdown">
                                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400 "
                                                href="#">
                                                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round">
                                                    <path
                                                        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                                    <path
                                                        d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                                </svg>
                                                Copy link
                                            </a>
                                            <div class="border-t border-gray-600 my-2 "></div>
                                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400 "
                                                href="#">
                                                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                                Share on Twitter
                                            </a>
                                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400 "
                                                href="#">
                                                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                                Share on Facebook
                                            </a>
                                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400 "
                                                href="#">
                                                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                                </svg>
                                                Share on LinkedIn
                                            </a>
                                        </div>
                                    </div>
                                    <!-- Button -->
                                </div>
                            </div>
                            <div class="max-w-5xl p-5 mx-auto bg-indigo-100 rounded-lg">
                                <div class="prose lg:prose-xl" v-html="content"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Content -->

                <!-- Sidebar -->
                <div
                    class="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent ">
                    <div class="sticky top-0 start-0 py-8 lg:ps-8">
                        <!-- Avatar Media -->
                        <div class="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8">
                            <a class="block flex-shrink-0" href="#">
                                <img class="size-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                    alt="Image Description">
                            </a>

                            <a class="group grow block" href="">
                                <h5 class="group-hover:text-gray-600 text-sm font-semibold text-gray-800 ">
                                    Leyla Ludic
                                </h5>
                                <p class="text-sm text-gray-500 ">
                                    UI/UX enthusiast
                                </p>
                            </a>

                            <div class="grow">
                                <div class="flex justify-end">
                                    <button type="button"
                                        class="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <line x1="19" x2="19" y1="8" y2="14" />
                                            <line x1="22" x2="16" y1="11" y2="11" />
                                        </svg>
                                        Follow
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- End Avatar Media -->

                        <div class="space-y-6">
                            <!-- Media -->
                            <a class="group flex items-center gap-x-6" href="#">
                                <div class="grow">
                                    <span class="text-sm font-bold text-gray-800 group-hover:text-blue-600 ">
                                        5 Reasons to Not start a UX Designer Career in 2022/2023
                                    </span>
                                </div>

                                <div class="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                                    <img class="size-full absolute top-0 start-0 object-cover rounded-lg"
                                        src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                        alt="Image Description">
                                </div>
                            </a>
                            <!-- End Media -->

                            <!-- Media -->
                            <a class="group flex items-center gap-x-6" href="#">
                                <div class="grow">
                                    <span class="text-sm font-bold text-gray-800 group-hover:text-blue-600 ">
                                        If your UX Portfolio has this 20% Well Done, it Will Give You an 80% Result
                                    </span>
                                </div>

                                <div class="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                                    <img class="size-full absolute top-0 start-0 object-cover rounded-lg"
                                        src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                        alt="Image Description">
                                </div>
                            </a>
                            <!-- End Media -->

                            <!-- Media -->
                            <a class="group flex items-center gap-x-6" href="#">
                                <div class="grow">
                                    <span class="text-sm font-bold text-gray-800 group-hover:text-blue-600 ">
                                        7 Principles of Icon Design
                                    </span>
                                </div>

                                <div class="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                                    <img class="size-full absolute top-0 start-0 object-cover rounded-lg"
                                        src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                        alt="Image Description">
                                </div>
                            </a>
                            <!-- End Media -->
                        </div>
                    </div>
                </div>
                <!-- End Sidebar -->
            </div>
        </div>
        <!-- End Blog Article -->
        <!-- <div id="app" class="flex">
            <div class="w-9/12 bg-blue-100">
                <div class="text-xl">{{ tags }}</div>
                <div class="text-xl">{{ title }}</div>
                <div class="text-xl">{{ imgSrc }}</div>
                <div class="max-w-5xl p-5 mx-auto">
                    <div class="prose lg:prose-xl" v-html="content"></div>
                </div>
            </div>
            <div class="w-3/12 bg-blue-200">
               
                <p>This is the smaller section covering 3/12 of the space.</p>
            </div>
        </div> -->
    </div>

</template>

<script>
import { getBlogById } from "~/utils/appwrite";

export default {
    data() {
        return {
            content: null,
            title: null,
            tags: null,
            imgSrc: null
        }
    },
    computed: {
        name() {
            return this.$route.params.name || '';
            // Ensure a default value if id is not present
        },
        id() {
            return this.$route.params.id || '';
        }
    },
    mounted() {
        this.getDataById();
    },
    methods: {
        // here write a login to get data
        // for get data use this keyword 

        async getDataById() {
            try {
                const blog = await getBlogById(this.id);
                this.content = blog.content;
                this.title = blog.title;
                this.tags = blog.tags;
                this.imgSrc = blog.imgSrc;
                console.log(blog);
            } catch (error) {
                console.error("Error fetching blog:", error);
            }

        }
    },
    head: {
        // Other head elements...
        script: [
            { src: './node_modules/preline/dist/preline.js', body: true } // Add preline.js script
        ]
    }
}
</script>

<style lang="scss" scoped></style>