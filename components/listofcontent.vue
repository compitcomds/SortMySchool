<template>
  <div>
    <div v-if="propContent">
      <!-- Timeline -->
      <div class="max-w-5xl mx-auto w-full p-5 bg-indigo-150 my-4 rounded-xl shadow-base-200 shadow-xl border-2">
        <template v-for="(blogs, letter) in propContent" :key="letter">
          <!-- Heading -->
          <div class="flex gap-x-3">
            <!-- Icon -->
            <div
              class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
              <div class="relative z-10 size-7 flex justify-center items-center">
                <span
                  class="flex flex-shrink-0 justify-center items-center size-7 border border-gray-200 text-sm font-semibold uppercase text-gray-800 rounded-full">
                  {{ letter }}
                </span>
              </div>
            </div>
            <!-- End Icon -->
          </div>
          <!-- End Heading -->

          <!-- Item -->
          <template v-for="(blog, index) in blogs" :key="`listed-blog-${index}`">
            <div class="flex gap-1 md:gap-x-3 relative group rounded-lg hover:bg-gray-100">
              <nuxt-link :to="`/subject/${blog.subject?.$id || 'others'}/${blog.title}`"
                class="absolute inset-0 z-[1]"></nuxt-link>

              <!-- Icon -->
              <div
                class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                <div class="relative z-10 size-7 flex justify-center items-center">
                  <div class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"></div>
                </div>
              </div>
              <!-- End Icon -->

              <!-- Right Content -->
              <div class="grow p-2 pb-8">
                <h3 class="md:text-lg flex gap-x-1 md:gap-x-1.5 font-semibold text-gray-800">
                  {{ blog.title }}
                </h3>
              </div>
              <!-- End Right Content -->
            </div>
          </template>
          <!-- End Item -->
        </template>
      </div>
      <!-- End Timeline -->
    </div>
    <div v-else>
      <ul class="flex flex-wrap justify-center items-center gap-5 p-5 max-w-5xl w-full mx-auto">
        <li class="w-full" v-for="i in 3">
          <div class="w-full flex flex-col group bg-white rounded-xl overflow-hidden transition min-w-80">
            <div class="size-7 rounded-full bg-gray-300 mb-1 skeleton"></div>
            <div v-for="i in 3"
              class="relative rounded-xl w-full h-fit min-h-16 mb-1 overflow-hidden bg-gray-300 skeleton">
              <div class="bg-gray-300 skeleton"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["propContent"],
};
</script>
