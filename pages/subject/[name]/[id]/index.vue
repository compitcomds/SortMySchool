<template>
    <div>
        <!-- {{ name }}
        <hr>
        {{ id }}
        <hr> -->
        <!-- Blog Article -->
        <div>
            <Title>{{ title }}</Title>
            <Meta name="description" :content="tags" />

        </div>
        <div class="max-w-[85rem] my-4 mx-auto" id="app">
            <div
                class="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 px-4 sm:px-6 lg:px-8  rounded-lg shadow-md border-2">
                <!-- Content -->
                <div class="lg:col-span-2">
                    <div class="py-6 lg:pe-8">
                        <div class="flex mb-4 items-center justify-between" aria-label="Breadcrumb">
                            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                                <li class="inline-flex items-center">
                                    <nuxt-link to="/"
                                        class="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-3">
                                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="mr-4 h-4 w-4">
                                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                        </svg> -->
                                        Home
                                    </nuxt-link>
                                </li>
                                <li>
                                    <div class="flex items-center">
                                        <span class=" text-gray-800 ">/</span>
                                        <nuxt-link to="/subject"
                                            class="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
                                            Subject
                                        </nuxt-link>
                                    </div>
                                </li>
                                <li aria-current="page">
                                    <div class="flex items-center">
                                        <span class=" text-gray-800 ">/</span>
                                        <nuxt-link :to="`/subject/${name}`">
                                            <span
                                                class="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
                                                {{ name }}
                                            </span>
                                        </nuxt-link>
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
                                    <div class="gap-3" v-if="imgSrc">
                                        <figure class="relative w-full h-96 object-cover">
                                            <img class="size-full absolute top-0 start-0 object-cover rounded-xl"
                                                :src="imgSrc" alt="Image Description">
                                        </figure>
                                    </div>
                                    <div v-else class="h-52 bg-slate-300 rounded-lg skeleton"></div>
                                    <!-- <span class="mt-3 block text-sm text-center text-gray-500 ">
                                    Working process
                                </span> -->
                                </div>
                                <div class="flex justify-between px-4 items-center gap-x-1.5 pt-6">
                                    <!-- Button -->
                                    <div
                                        class="hs-tooltip inline-block text-gray-900 bg-slate-300 hover:bg-slate-100 px-2 py-2 rounded-full hover:text-gray-700">
                                        <div
                                            class="flex items-center gap-x-2 text-sm text-gray-900 hover:text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span class="text-gray-900 hover:text-gray-700">{{ views }} views</span>
                                        </div>
                                    </div>


                                    <!-- Button -->

                                    <div class="block h-3 border-e border-gray-300 mx-3 "></div>

                                    <!-- Button -->
                                    <div class="hs-dropdown relative inline-flex">
                                        <button type="button" id="blog-article-share-dropdown"
                                            class="hs-dropdown-toggle flex items-center gap-x-2 text-sm text-gray-900 bg-slate-300 hover:bg-slate-100 px-2 py-2 rounded-full hover:text-gray-700 ">
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
                                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                                href="#" @click="copyLink">
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
                                                href="#" @click="shareOnWhatsApp">
                                                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232    " />
                                                </svg>
                                                Share on Whatsapp
                                            </a>
                                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400 "
                                                href="#" @click="shareOnFacebook">
                                                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                                Share on Facebook
                                            </a>
                                            <!-- <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400 "
                                                href="#">
                                                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                                </svg>
                                                Share on LinkedIn
                                            </a> -->
                                        </div>
                                    </div>
                                    <!-- Button -->
                                </div>
                            </div>
                            <div class="max-w-5xl p-5 mx-auto rounded-lg">

                                <div class="prose lg:prose-xl" v-html="content"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Content -->

                <!-- Sidebar -->
                <!-- <div class="lg:col-span-1 lg:w-full lg:h-full bg-indigo-150 ">
                    <div class="sticky top-0 start-0 py-8 lg:ps-8">
                        

                        <div class="space-y-6">
                            
                            <article
                                class="relative isolate flex flex-col justify-end skeleton overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-2">
                                <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
                                    alt="University of Southern California"
                                    class="absolute inset-0 h-full w-full object-cover">
                                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                <h3 class="z-10 mt-3 text-3xl font-bold text-white"></h3>
                                <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                </div>
                            </article>
                            <article
                                class="relative isolate flex flex-col justify-end skeleton overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-8">
                                <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
                                    alt="University of Southern California"
                                    class="absolute inset-0 h-full w-full object-cover">
                                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                <h3 class="z-10 mt-3 text-3xl font-bold text-white"></h3>
                                <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                </div>
                            </article>
                            <article
                                class="relative isolate flex flex-col justify-end skeleton overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-8">
                                <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
                                    alt="University of Southern California"
                                    class="absolute inset-0 h-full w-full object-cover">
                                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                <h3 class="z-10 mt-3 text-3xl font-bold text-white"></h3>
                                <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                </div>
                            </article>
                        </div>
                    </div>
                </div> -->
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
import { getBlogById, addViewToBlog } from "~/utils/appwrite";

export default {
    data() {
        return {
            content: null,
            title: null,
            tags: null,
            imgSrc: null,
            views: null
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
        shareOnFacebook() {
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href, '_blank');
        },
        shareOnWhatsApp() {
            window.open('whatsapp://send?text=' + window.location.href, '_blank');
        },
        copyLink() {
            const dummyInput = document.createElement("input");
            const text = window.location.href;
            dummyInput.value = text;
            document.body.appendChild(dummyInput);
            dummyInput.select();
            document.execCommand("copy");
            document.body.removeChild(dummyInput);
        },
        async getDataById() {
            try {
                const blog = await getBlogById(this.id);
                if (!blog) {
                    throw Error("Blog not found");
                }
                this.content = blog.content;
                this.title = blog.title;
                this.tags = blog.tags.split(',').map(item => item.trim());
                this.imgSrc = blog.imgSrc;
                this.views = blog.views + 1;
                console.log(blog.tags);
                addViewToBlog(this.id, blog.views + 1);
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