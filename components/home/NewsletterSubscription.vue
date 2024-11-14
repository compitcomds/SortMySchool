<template>
    <div class="w-full mx-auto bg-[#fef1e1] overflow-hidden rounded-xl md:flex md:items-center md:space-x-6">
        <div class="hidden lg:block lg:w-1/3">
            <img src="/assets/mail illustration.png" alt="">
        </div>
        <div class="p-6 lg:w-2/3 flex flex-col space-y-4 ">
            <!-- Label -->
            <p class=" text-gray-600 bg-[#DED5D1] text-sm font-semibold py-1 px-4 rounded-full inline-block self-start">
                Our newsletters
            </p>

            <!-- Title and Description -->
            <h2 class="text-2xl font-bold text-[#4A6572] leading-snug">
                Subscribe to our newsletter to receive more updates
            </h2>
            <p class="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </p>

            <!-- Email Input and Subscribe Button -->
             <div class=" hidden md:block">
            <div class="flex items-center bg-[#EEF8F3] rounded-lg p-2 mt-4">
                <input type="email" placeholder="Write your email"
                    class="flex-grow bg-transparent placeholder-[#6D9A7D] border-l border-t border-b rounded-l-xl text-gray-700 p-[10px] focus:outline-none" />
                <button class="bg-[#0ba083] text-white px-6 py-3 rounded-md hover:bg-[#1b584c] transition-colors">
                    Subscribe
                </button>
            </div></div>
            <div class="flex flex-col items-center bg-[#EEF8F3] rounded-lg p-3 gap-2 mt-4 md:hidden">
                <input type="email" placeholder="Write your email"
                    class="w-full bg-transparent placeholder-[#6D9A7D] border rounded-xl text-gray-700 p-[10px] focus:outline-none" />
                <button class="bg-[#0ba083] text-white  w-full px-6 py-3 rounded-md hover:bg-[#1b584c] transition-colors">
                    Subscribe
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NewsletterSubscription",
};
</script>

<style scoped>
/* Additional responsive adjustments can be applied here */
</style>