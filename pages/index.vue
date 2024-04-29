<template>
  <section class="bg-cover bg-center bg-w3schools h-[300px] flex flex-col items-center">
    <div class="mb-8 text-white pt-6">
        <h2 class="text-3xl lg:text-4xl font-bold mb-3">
            Looking for a solution?
        </h2>
        <p class="text-lg lg:text-xl opacity-80">
            Search the forum for the answer to your question
        </p>
    </div>
    <div class="container mx-auto px-4 flex w-full justify-center items-center">
        
        <!-- Search bar goes here -->
        <div class=" flex  rounded-md w-full px-4 max-w-xl ">
            
          <input
            type="text"
            placeholder="Search..." name="q" id="query"
            class="w-full p-3 rounded-md border-2 border-r-white rounded-r-none border-gray-300 placeholder-gray-500  "
          />
          <button
            class="inline-flex items-center gap-2 bg-violet-700 text-white text-lg font-semibold py-3 px-6 rounded-r-md">
            <span>Search</span>
            <span class="hidden md:block">
                <svg class="text-gray-200 h-5 w-5 p-0 fill-current" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                    viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                    width="512px" height="512px">
                    <path
                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
            </span>
        </button>
        </div>
      </div>
    
  </section>
  <section>
    <div class="container mx-auto px-4 my-4">
        <div class="flex flex-col md:flex-row justify-between">
            <div class="md:w-1/2 w-full pr-4 mb-6 md:mb-0">
                <h1 class="text-3xl font-bold my-2 mx-6">Heading of the Section</h1>
                <p class="text-gray-600 mb-6 mx-6">This is some introductory text that gives context to the section below. Lorem ipsum dolor sit amet.</p>
                <ul class="list-none space-y-2">
                    <li class="flex justify-center items-center">
                        <span>Lorem ipsum dolor sit amet.</span>
                        <svg class="w-5 h-5 text-white ml-2   bg-green-600 rounded-full p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    </li>
                    <li class="flex justify-center items-center">
                        <span>Lorem ipsum dolor sit amet.</span>
                        <svg class="w-5 h-5 text-white ml-2   bg-green-600 rounded-full p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    </li>
                    <li class="flex justify-center items-center">
                        <span>Lorem ipsum dolor sit amet.</span>
                        <svg class="w-5 h-5 text-white ml-2   bg-green-600 rounded-full p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    </li>
                    <li class="flex justify-center items-center">
                        <span>Lorem ipsum dolor sit amet.</span>
                        <svg class="w-5 h-5 text-white ml-2   bg-green-600 rounded-full p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    </li>
                    <li class="flex justify-center items-center">
                        <span>Lorem ipsum dolor sit amet.</span>
                        <svg class="w-5 h-5 text-white ml-2   bg-green-600 rounded-full p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    </li>
                </ul>
            </div>
            <div class="md:w-1/2 w-full pl-4 flex items-center py-4">
                <img src="https://images.surferseo.art/e1328a58-93b1-42e3-bb00-b5f2c4ca76af.png" alt="Descriptive Alt Text" class="w-full h-[350px] object-cover rounded-md shadow-lg">
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { searchBlogsByTitle } from "~/utils/appwrite";
const consoleAllBlogs = async () => {
  const blogs = await searchBlogsByTitle("titl");
  console.log(blogs);
};
consoleAllBlogs();

export default {};
</script>

<style scoped>
.bg-w3schools {
  background-image: url("/assets/sky.png");
}
</style>
