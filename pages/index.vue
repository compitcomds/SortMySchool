<template>
    <section class="bg-cover bg-center bg-w3schools h-[400px] lg:h-[700px] pb-14 sm:py-4 flex flex-col items-center justify-center lg:-mt-16 relative">
        <img src="assets\lynx_in_space.png" alt="Background Image"
            class="hidden sm:block object-cover absolute right-0 lg:pr-[120px] md:block h-auto w-auto md:max-w-none" />
        <div class="mb-8 text-white flex flex-col items-center justify-center px-4">
            <h2 class="sm:text-3xl lg:text-4xl text-2xl font-bold mb-3">
                Looking for a case brief?
            </h2>
            <p class="text-lg lg:text-xl sm:text-lg opacity-80">
                Creating India's Largest Database of Case Brief for Academia...
            </p>
        </div>
        <div class="container mx-auto px-4 flex flex-col w-full justify-center items-center relative">

            <!-- Search bar goes here -->

            <div class="flex rounded-md w-full px-4 max-w-xl relative">

                <input type="text" placeholder="Find your brief here...." name="q" id="query" v-model="name"
                    class="w-full p-3 rounded-full  border-r-white rounded-r-none  placeholder-gray-500" />
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
            <P class="text-lg lg:text-xl opacity-80 text-white my-6 "> Didn't find your brief ?
                <nuxt-link to="/about"
                    class="transition duration-300 ease-in-out hover:scale-110 text-lg lg:text-xl opacity-80 font-bold hover:text-green-400 my-6 underline">
                    Click here !!
                </nuxt-link>
            </P>

        </div>
    </section>
    <!-- full Image -->
    <section style="background-color: #eef8ff;">
        <!-- <div class="max-w-750 mx-auto text-center mb-4 pt-8 ">
            <h2 class="text-2xl md:text-3xl font-medium mb-2 lg:px-0 px-2" style="color: #2B0380;">Find the best courses, wherever
                they exist</h2>
        </div> -->

        <div class=" max:w-full flex items-center justify-center">
            <img src="assets\madam.png" alt="">
        </div>
    </section>
    <!-- comparision -->
    <section>

        <div class="container mx-auto px-10 py-4">
            <div
                class="flex flex-col md:flex-row justify-center shadow-slate-200 text-start items-center bg-indigo-50 rounded-2xl">
                <div class="md:w-1/2 w-full pr-4 mb-6 md:mb-0 px-4">
                    <ul class="list-none space-y-2 flex-col items-start">
                        <li class="flex justify-start items-center font-medium text-lg">
                            <span>Case Briefs for Academics</span>
                            <svg class="w-5 h-5 text-white ml-2 bg-green-600 rounded-full p-1 hidden sm:block " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            
                        </li>
                        <li class="flex jjustify-start items-center font-medium text-lg">
                            <span>Free Quality Content: Accessible for All</span>
                            <svg class="w-5 h-5 text-white ml-2 bg-green-600 rounded-full p-1 hidden sm:block " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            
                        </li>
                        <li class="flex justify-start items-center font-medium text-lg">
                            <span>Your Success, Our Victory </span>
                            <svg class="w-5 h-5 text-white ml-2 bg-green-600 rounded-full p-1 hidden sm:block " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            
                        </li>
                        
                    </ul>
                </div>
                <div class="max:w-full px-4 flex items-center justify-center py-4">
                    <img src="assets\dssg.png"
                        alt="Descriptive Alt Text" class="transition duration-300 ease-in-out hover:scale-110 w-full h-[350px] object-fill rounded-md shadow-lg">
                </div>
            </div>
        </div>
    </section>
    

    <!-- Testimonial -->

    <section>
        <!-- Container -->
        <div class="mx-auto px-5 py-8 md:px-10 lg:py-12">
            <!-- Component -->
            <div class="mx-auto max-w-7xl">
                <!-- Header -->
                <div class="mx-auto mb-8 max-w-3xl text-center md:mb-6 lg:mb-8">
                    <h2 class="mb-4 mt-6 text-3xl font-extrabold md:text-5xl">Knowledge Partners</h2>
                    <!-- <p class="mx-auto mt-4 max-w-[528px] text-[#636262]">Lorem ipsum dolor sit amet elit ut aliquam</p> -->
                </div>
                <!-- Team Items -->
                <div class="flex flex-wrap  justify-center gap-3 md:justify-between md:gap-6  my-12">
                    <div
                        class="transition duration-300 ease-in-out hover:scale-110 relative text-left bg-slate-200 rounded-lg shadow-black hover:shadow-orange-400 shadow-md">
                        <div
                            class="flex flex-col justify-between bg-background-medium p-6 w-[291px] h-[382px] relative">
                            <div class="flex flex-col gap-1">
                                <h2 class="text-xl font-semibold z-50">Rahul Soni</h2>
                                <p class="text-sm max-w-xs z-50">Co-Founder &amp; CEO at Mudrex (YC-W19)</p>
                                <div class="flex flex-row gap-2">
                                    <!-- <a href="https://twitter.com/imrgoyal">
                                        <svg viewBox="0 0 1024 1024" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 16px; height: 16px;">
                                            <path d="M781.882 81.235h143.936l-314.458 359.402 369.933 489.066h-289.658l-226.865-296.616-259.588 296.616h-144.022l336.341-384.421-354.877-464.047h297.008l205.068 271.118 237.181-271.118zM731.366 843.552h79.75l-514.822-680.691h-85.587l520.658 680.691z"></path>
                                        </svg>
                                    </a> -->
                                    <a href="https://www.linkedin.com/in/r0hitgoyal/">
                                        <svg viewBox="0 0 1024 1024"
                                            style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 16px; height: 16px;">
                                            <path
                                                d="M948.198 0h-872.598c-41.8 0-75.6 33-75.6 73.8v876.203c0 40.8 33.8 73.997 75.6 73.997h872.598c41.805 0 75.802-33.197 75.802-73.798v-876.401c0-40.8-33.997-73.8-75.802-73.8zM303.8 872.602h-151.999v-488.802h151.999v488.802zM227.8 317.2c-48.8 0-88.2-39.4-88.2-88s39.4-88 88.2-88c48.6 0 87.999 39.4 87.999 88 0 48.4-39.4 88-87.999 88zM872.602 872.602h-151.802v-237.601c0-56.6-0.998-129.601-79.002-129.601-78.998 0-90.998 61.8-90.998 125.601v241.601h-151.6v-488.802h145.6v66.801h2c20.2-38.4 69.8-79 143.6-79 153.798 0 182.202 101.2 182.202 232.8v268.202z">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div class="text-white text-4xl font-semibold leading-[40px] z-50 -ml-4">Rahul<br> Soni
                            </div>
                            <img loading="lazy" width="232" height="290" decoding="async" data-nimg="1"
                                class="absolute  left-[3.75rem] top-[5.75rem] z-[50] grayscale hover:grayscale-0"
                                src="/assets/team1.png" style="color: transparent;">
                        </div>
                    </div>

                    <!-- Repeat the same structure for other team members -->
                    <div
                        class="transition duration-300 ease-in-out hover:scale-110 relative text-left bg-slate-200 rounded-lg shadow-black hover:shadow-orange-400 shadow-md">
                        <div
                            class="flex flex-col justify-between bg-background-medium p-6 w-[291px] h-[382px] relative">
                            <div class="flex flex-col gap-1">
                                <h2 class="text-xl font-semibold z-50">Rahul Soni</h2>
                                <p class="text-sm max-w-xs z-50">Co-Founder &amp; CEO at Mudrex (YC-W19)</p>
                                <div class="flex flex-row gap-2">
                                    <!-- <a href="https://twitter.com/imrgoyal">
                                        <svg viewBox="0 0 1024 1024" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 16px; height: 16px;">
                                            <path d="M781.882 81.235h143.936l-314.458 359.402 369.933 489.066h-289.658l-226.865-296.616-259.588 296.616h-144.022l336.341-384.421-354.877-464.047h297.008l205.068 271.118 237.181-271.118zM731.366 843.552h79.75l-514.822-680.691h-85.587l520.658 680.691z"></path>
                                        </svg>
                                    </a> -->
                                    <a href="https://www.linkedin.com/in/r0hitgoyal/">
                                        <svg viewBox="0 0 1024 1024"
                                            style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 16px; height: 16px;">
                                            <path
                                                d="M948.198 0h-872.598c-41.8 0-75.6 33-75.6 73.8v876.203c0 40.8 33.8 73.997 75.6 73.997h872.598c41.805 0 75.802-33.197 75.802-73.798v-876.401c0-40.8-33.997-73.8-75.802-73.8zM303.8 872.602h-151.999v-488.802h151.999v488.802zM227.8 317.2c-48.8 0-88.2-39.4-88.2-88s39.4-88 88.2-88c48.6 0 87.999 39.4 87.999 88 0 48.4-39.4 88-87.999 88zM872.602 872.602h-151.802v-237.601c0-56.6-0.998-129.601-79.002-129.601-78.998 0-90.998 61.8-90.998 125.601v241.601h-151.6v-488.802h145.6v66.801h2c20.2-38.4 69.8-79 143.6-79 153.798 0 182.202 101.2 182.202 232.8v268.202z">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div class="text-white text-4xl font-semibold leading-[40px] z-50 -ml-4">Rahul<br> Soni
                            </div>
                            <img loading="lazy" width="232" height="290" decoding="async" data-nimg="1"
                                class="absolute left-[3.75rem] top-[5.75rem] z-[50] grayscale hover:grayscale-0"
                                src="/assets/team1.png" style="color: transparent;">
                        </div>
                    </div>
                    <div
                        class="transition duration-300 ease-in-out hover:scale-110 relative text-left bg-slate-200 rounded-lg shadow-black hover:shadow-orange-400 shadow-md">
                        <div
                            class="flex flex-col justify-between bg-background-medium p-6 w-[291px] h-[382px] relative">
                            <div class="flex flex-col gap-1">
                                <h2 class="text-xl font-semibold z-50">Rahul Soni</h2>
                                <p class="text-sm max-w-xs z-50">Co-Founder &amp; CEO at Mudrex (YC-W19)</p>
                                <div class="flex flex-row gap-2">
                                    <!-- <a href="https://twitter.com/imrgoyal">
                                        <svg viewBox="0 0 1024 1024" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 16px; height: 16px;">
                                            <path d="M781.882 81.235h143.936l-314.458 359.402 369.933 489.066h-289.658l-226.865-296.616-259.588 296.616h-144.022l336.341-384.421-354.877-464.047h297.008l205.068 271.118 237.181-271.118zM731.366 843.552h79.75l-514.822-680.691h-85.587l520.658 680.691z"></path>
                                        </svg>
                                    </a> -->
                                    <a href="https://www.linkedin.com/in/r0hitgoyal/">
                                        <svg viewBox="0 0 1024 1024"
                                            style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 16px; height: 16px;">
                                            <path
                                                d="M948.198 0h-872.598c-41.8 0-75.6 33-75.6 73.8v876.203c0 40.8 33.8 73.997 75.6 73.997h872.598c41.805 0 75.802-33.197 75.802-73.798v-876.401c0-40.8-33.997-73.8-75.802-73.8zM303.8 872.602h-151.999v-488.802h151.999v488.802zM227.8 317.2c-48.8 0-88.2-39.4-88.2-88s39.4-88 88.2-88c48.6 0 87.999 39.4 87.999 88 0 48.4-39.4 88-87.999 88zM872.602 872.602h-151.802v-237.601c0-56.6-0.998-129.601-79.002-129.601-78.998 0-90.998 61.8-90.998 125.601v241.601h-151.6v-488.802h145.6v66.801h2c20.2-38.4 69.8-79 143.6-79 153.798 0 182.202 101.2 182.202 232.8v268.202z">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div class="text-white text-4xl font-semibold leading-[40px] z-50 -ml-4">Rahul<br> Soni
                            </div>
                            <img loading="lazy" width="232" height="290" decoding="async" data-nimg="1"
                                class="absolute left-[3.75rem] top-[5.75rem] z-[50] grayscale hover:grayscale-0"
                                src="/assets/team1.png" style="color: transparent;">
                        </div>
                    </div>
                    <div
                        class="transition duration-300 ease-in-out hover:scale-110 relative text-left bg-slate-200 rounded-lg shadow-black hover:shadow-orange-400 shadow-md">
                        <div
                            class="flex flex-col justify-between bg-background-medium p-6 w-[291px] h-[382px] relative">
                            <div class="flex flex-col gap-1">
                                <h2 class="text-xl font-semibold z-50">Rahul Soni</h2>
                                <p class="text-sm max-w-xs z-50">Co-Founder &amp; CEO at Mudrex (YC-W19)</p>
                                <div class="flex flex-row gap-2">
                                    <!-- <a href="https://twitter.com/imrgoyal">
                                        <svg viewBox="0 0 1024 1024" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 16px; height: 16px;">
                                            <path d="M781.882 81.235h143.936l-314.458 359.402 369.933 489.066h-289.658l-226.865-296.616-259.588 296.616h-144.022l336.341-384.421-354.877-464.047h297.008l205.068 271.118 237.181-271.118zM731.366 843.552h79.75l-514.822-680.691h-85.587l520.658 680.691z"></path>
                                        </svg>
                                    </a> -->
                                    <a href="https://www.linkedin.com/in/r0hitgoyal/">
                                        <svg viewBox="0 0 1024 1024"
                                            style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 16px; height: 16px;">
                                            <path
                                                d="M948.198 0h-872.598c-41.8 0-75.6 33-75.6 73.8v876.203c0 40.8 33.8 73.997 75.6 73.997h872.598c41.805 0 75.802-33.197 75.802-73.798v-876.401c0-40.8-33.997-73.8-75.802-73.8zM303.8 872.602h-151.999v-488.802h151.999v488.802zM227.8 317.2c-48.8 0-88.2-39.4-88.2-88s39.4-88 88.2-88c48.6 0 87.999 39.4 87.999 88 0 48.4-39.4 88-87.999 88zM872.602 872.602h-151.802v-237.601c0-56.6-0.998-129.601-79.002-129.601-78.998 0-90.998 61.8-90.998 125.601v241.601h-151.6v-488.802h145.6v66.801h2c20.2-38.4 69.8-79 143.6-79 153.798 0 182.202 101.2 182.202 232.8v268.202z">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div class="text-white text-4xl font-semibold leading-[40px] z-50 -ml-4">Rahul<br> Soni
                            </div>
                            <img loading="lazy" width="232" height="290" decoding="async" data-nimg="1"
                                class="absolute left-[3.75rem] top-[5.75rem] z-[50] grayscale hover:grayscale-0"
                                src="/assets/team1.png" style="color: transparent;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- how it works -->

    <section>
        <!-- Container -->
        <div class="mx-auto max-w-7xl px-5 py-8 md:px-10 md:py-8 lg:py-8">
            <!-- Heading Div -->
            <div class="mx-auto w-full max-w-3xl">
                <!-- Component -->
                <div class="text-center">
                    <p class="uppercase text-[#1353fe]">3 easy steps</p>
                    <h2 class="text-3xl font-semibold capitalize md:text-5xl">We Help You With <span
                            class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                            <span class="relative text-white">work</span>
                        </span>
                    </h2>
                    <div class="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
                        <p class="text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                            aliquam,purus sit amet luctus magna fringilla urna</p>
                    </div>
                </div>
            </div>
            <!-- How it Works Div -->
            <div class="mx-auto grid grid-cols-1 gap-4 sm:justify-items-stretch md:grid-cols-3 lg:gap-8">
                <!-- How it Works Item -->
                <div class="relative flex flex-col items-center gap-4 p-2 text-center">
                    <div
                        class="mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-2 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
                        <p class="text-xl font-bold"><img class="w-16" src="assets\man.avif" alt=""></p>
                    </div>
                    <p class="mb-2 text-xl font-semibold">Find Component</p>
                    <p class="text-sm text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
                        purus sit.</p>
                    <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639833af1925275b6f0b43e1_Vector%2032.svg"
                        alt=""
                        class="absolute bottom-[-33%] left-0 right-auto top-auto -z-10 hidden w-96 md:bottom-auto md:left-[136px] md:right-[-50%] md:top-[18%] md:inline-block lg:left-auto" />
                </div>
                <!-- How it Works Item -->

                <div class="relative flex flex-col items-center gap-4 p-2 text-center">
                    <div
                        class="mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
                        <p class="text-xl font-bold"><img class="w-24 rounded-xl" src="assets\man2.jpeg" alt=""></p>
                    </div>
                    <p class="mb-2 text-xl font-semibold">Copy and Paste</p>
                    <p class="text-sm text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
                        purus sit.</p>
                    <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639834731925279c5e0b4ee5_Vector%2033.svg"
                        alt=""
                        class="absolute bottom-[-33%] left-0 right-auto top-auto -z-10 hidden w-96 md:bottom-auto md:left-[136px] md:right-[-50%] md:top-[8%] md:inline-block lg:left-auto" />
                </div>
                <!-- How it Works Item -->
                <div class="relative flex flex-col items-center gap-4 p-2 text-center">
                    <div
                        class="mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
                        <p class="text-xl font-bold"><img class="w-32 rounded-xl" src="assets\man3.avif" alt=""></p>
                    </div>
                    <p class="mb-2 text-xl font-semibold">Done!</p>
                    <p class="text-sm text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
                        purus sit.</p>
                </div>

            </div>
        </div>
    </section>
    <!-- end section works -->

</template>

<script>
import { searchBlogByTag } from "~/utils/appwrite";

export default {
    name: 'CodeHelpAdvantages',
    data() {
        return {
            name: null
        }
    },
    methods: {
        async searchBlog(inputname) {
            const blogs = await searchBlogByTag(inputname);
            console.log("Search query: ", inputname);
            console.log(blogs);
        }
    },
};
</script>

<style scoped>
.bg-w3schools {
    background-image: url("/assets/sky.png");
    background-size: cover;
    object-fit: cover;
}
</style>
