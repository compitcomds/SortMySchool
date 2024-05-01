<template>
    <section
        class="bg-cover bg-center bg-w3schools lg:min-h-[600px] min-h-[300px] pb-14 flex flex-col items-center justify-center relative">
        <img src="assets\lynx_in_space.png" alt="Background Image"
            class="hidden sm:block absolute right-0 lg:pr-[120px] md:block h-auto w-auto md:max-w-none" />
        <div class="mb-8 text-white flex flex-col items-center justify-center">
            <h2 class="sm:text-3xl lg:text-4xl text-2xl font-bold mb-3">
                Looking for a solution?
            </h2>
            <p class="text-lg lg:text-xl sm:text-lg opacity-80">
                Search the forum for the answer to your question
            </p>
        </div>
        <div class="container mx-auto px-4 flex flex-col w-full justify-center items-center relative">

            <!-- Search bar goes here -->

            <div class="flex rounded-md w-full px-4 max-w-xl relative">

                <input type="text" placeholder="Search..." name="q" id="query" v-model="name"
                    class="w-full p-3 rounded-full border-2 border-r-white rounded-r-none border-gray-300 placeholder-gray-500" />
                <button v-on:click="searchBlog(name)"
                    class="inline-flex items-center gap-2 bg-green-600 text-white text-lg font-semibold py-3 px-6 rounded-r-full">
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
                <!-- Image for larger screens -->

            </div>
            <nuxt-link to="/about" class="text-lg lg:text-xl opacity-80 text-white my-6 underline">
                Not Sure Where to Begin?
            </nuxt-link>

        </div>
    </section>
    <section class="bg-indigo-50 h-screen flex justify-center items-center">
        <div class="container mx-auto px-4 my-4">
            <div class="flex flex-col md:flex-row justify-between">
                <div class="md:w-1/2 w-full pr-4 mb-6 md:mb-0">
                    <h1 class="text-3xl font-bold my-2 mx-6">Heading of the Section</h1>
                    <p class="text-gray-600 mb-6 mx-6">This is some introductory text that gives context to the section
                        below. Lorem ipsum dolor sit amet.</p>
                    <ul class="list-none space-y-2">
                        <li class="flex justify-center items-center">
                            <span>Lorem ipsum dolor sit amet.</span>
                            <svg class="w-5 h-5 text-white ml-2   bg-green-600 rounded-full p-1" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                        </li>
                        <li class="flex justify-center items-center">
                            <span>Lorem ipsum dolor sit amet.</span>
                            <svg class="w-5 h-5 text-white ml-2   bg-green-600 rounded-full p-1" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                        </li>
                        <li class="flex justify-center items-center">
                            <span>Lorem ipsum dolor sit amet.</span>
                            <svg class="w-5 h-5 text-white ml-2   bg-green-600 rounded-full p-1" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                        </li>
                        <li class="flex justify-center items-center">
                            <span>Lorem ipsum dolor sit amet.</span>
                            <svg class="w-5 h-5 text-white ml-2   bg-green-600 rounded-full p-1" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                        </li>
                        <li class="flex justify-center items-center">
                            <span>Lorem ipsum dolor sit amet.</span>
                            <svg class="w-5 h-5 text-white ml-2   bg-green-600 rounded-full p-1" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                        </li>
                    </ul>
                </div>
                <div class="md:w-1/2 w-full pl-4 flex items-center py-4">
                    <img src="https://images.surferseo.art/e1328a58-93b1-42e3-bb00-b5f2c4ca76af.png"
                        alt="Descriptive Alt Text" class="w-full h-[350px] object-cover rounded-md shadow-lg">
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonial -->

    <section class="bg-white ">
        <!-- Container -->
        <div class="mx-auto w-full  px-5 py-8 md:px-10 md:py-8 lg:py-8">
            <!-- Component -->
            <div class="mx-auto max-w-[1088px]">
                <!-- Header -->
                <div class="mx-auto mb-8 max-w-3xl text-center md:mb-6 lg:mb-8">
                    <h2 class="mb-4 mt-6 text-3xl font-extrabold md:text-5xl">Our Team Members</h2>
                    <p class="mx-auto mt-4 max-w-[528px] text-[#636262]">Lorem ipsum dolor sit amet elit ut aliquam</p>
                </div>
                <!-- Team Items -->
                <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <!-- Team Item -->
                    <div class="mx-auto flex w-4/5 grid-cols-1 flex-col gap-4 justify-self-auto rounded-md py-4">
                        <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f683b1e3793b739a1c355_image%2012.png"
                            alt=""
                            class="mx-auto mb-4 inline-block h-40 w-40 flex-none rounded-full object-cover lg:h-48 lg:w-48" />
                        <div class="flex flex-col items-center">
                            <p class="font-bold">John Robert</p>
                            <p class="text-center text-sm text-[#636262]">Webflow Developer</p>
                        </div>
                        <div class="mt-4 flex flex-wrap items-center justify-center">
                            <a href="#"
                                class="mr-2 inline-block max-w-full rounded-full border border-solid border-black p-[8px]">
                                <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f683b1e3793b739a1c348_FacebookLogo%20(4).svg"
                                    alt="" class="inline-block w-6" />
                            </a>
                            <a href="#"
                                class="inline-block max-w-full rounded-full border border-solid border-black p-[8px]">
                                <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f683b1e3793b739a1c346_InstagramLogo%20(4).svg"
                                    alt="" class="inline-block w-6" />
                            </a>
                        </div>
                    </div>
                    <!-- Team Item -->
                    <div class="mx-auto flex w-4/5 grid-cols-1 flex-col gap-4 justify-self-auto rounded-md py-4">
                        <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f683b1e3793b739a1c35b_image%209.png"
                            alt=""
                            class="mx-auto mb-4 inline-block h-40 w-40 flex-none rounded-full object-cover lg:h-48 lg:w-48" />
                        <div class="flex flex-col items-center">
                            <p class="font-bold">John Robert</p>
                            <p class="text-center text-sm text-[#636262]">Webflow Developer</p>
                        </div>
                        <div class="mt-4 flex flex-wrap items-center justify-center">
                            <a href="#"
                                class="mr-2 inline-block max-w-full rounded-full border border-solid border-black p-[8px]">
                                <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f683b1e3793b739a1c348_FacebookLogo%20(4).svg"
                                    alt="" class="inline-block w-6" />
                            </a>
                            <a href="#"
                                class="inline-block max-w-full rounded-full border border-solid border-black p-[8px]">
                                <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f683b1e3793b739a1c346_InstagramLogo%20(4).svg"
                                    alt="" class="inline-block w-6" />
                            </a>
                        </div>
                    </div>
                    <!-- Team Item -->
                    <div class="mx-auto flex w-4/5 grid-cols-1 flex-col gap-4 justify-self-auto rounded-md py-4">
                        <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f683b1e3793b739a1c351_image%2011.png"
                            alt=""
                            class="mx-auto mb-4 inline-block h-40 w-40 flex-none rounded-full object-cover lg:h-48 lg:w-48" />
                        <div class="flex flex-col items-center">
                            <p class="font-bold">John Robert</p>
                            <p class="text-center text-sm text-[#636262]">Webflow Developer</p>
                        </div>
                        <div class="mt-4 flex flex-wrap items-center justify-center">
                            <a href="#"
                                class="mr-2 inline-block max-w-full rounded-full border border-solid border-black p-[8px]">
                                <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f683b1e3793b739a1c348_FacebookLogo%20(4).svg"
                                    alt="" class="inline-block w-6" />
                            </a>
                            <a href="#"
                                class="inline-block max-w-full rounded-full border border-solid border-black p-[8px]">
                                <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f683b1e3793b739a1c346_InstagramLogo%20(4).svg"
                                    alt="" class="inline-block w-6" />
                            </a>
                        </div>
                    </div>
                    <!-- Team Item -->
                    <div class="mx-auto flex w-4/5 grid-cols-1 flex-col gap-4 justify-self-auto rounded-md py-4">
                        <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f683b1e3793b739a1c35d_image%2010.png"
                            alt=""
                            class="mx-auto mb-4 inline-block h-40 w-40 flex-none rounded-full object-cover lg:h-48 lg:w-48" />
                        <div class="flex flex-col items-center">
                            <p class="font-bold">John Robert</p>
                            <p class="text-center text-sm text-[#636262]">Webflow Developer</p>
                        </div>
                        <div class="mt-4 flex flex-wrap items-center justify-center">
                            <a href="#"
                                class="mr-2 inline-block max-w-full rounded-full border border-solid border-black p-[8px]">
                                <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f683b1e3793b739a1c348_FacebookLogo%20(4).svg"
                                    alt="" class="inline-block w-6" />
                            </a>
                            <a href="#"
                                class="inline-block max-w-full rounded-full border border-solid border-black p-[8px]">
                                <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f683b1e3793b739a1c346_InstagramLogo%20(4).svg"
                                    alt="" class="inline-block w-6" />
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { searchBlogsByTitle } from "~/utils/appwrite";
const consoleAllBlogs = async () => {
    const blogs = await searchBlogsByTitle("titl");
    // console.log(blogs);
};
consoleAllBlogs();

export default {
    data() {
        return {
            name: null
        }
    },
    methods: {
        searchBlog(inputname) {
            console.log(inputname)
        }
    },
};
</script>

<style scoped>
.bg-w3schools {
    background-image: url("/assets/sky.png");
}
</style>
