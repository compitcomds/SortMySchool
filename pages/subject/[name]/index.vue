<template>
  <div>
    this is [name].vue
    <p>Route Parameter: {{ name }}</p>
    <div v-if="content">
      <ul class="flex flex-col p-5 max-w-5xl mx-auto w-full divide-y  divide-gray-200">
        <li v-for="(blogs, letter) in content" :key="letter" class="py-3 px-4 text-sm font-medium text-gray-800">
          <h2 class="text-3xl font-medium mb-5">{{ letter }}</h2>
          <ul v-for="(blog, index) in blogs" :key="index"
            class="marker:text-blue-600 list-disc ps-7 space-y-2 text-lg text-black font-normal">
            <li>
              <nuxt-link :to="`${name}/${blog.$id}`" class="hover:underline hover:text-blue-600">{{ blog.title
                }}</nuxt-link>
            </li>
          </ul>
          <br>
        </li>
      </ul>
    </div>
    <div v-else>
      <div class="flex flex-col p-5 max-w-5xl mx-auto w-full divide-y  divide-gray-200">
        <p class="h-4 bg-gray-200 rounded-full" style="width: 40%;"></p>

        <ul class="mt-5 space-y-3">
          <li class="w-full h-4 bg-gray-200 rounded-full"></li>
          <li class="w-full h-4 bg-gray-200 rounded-full"></li>
          <li class="w-full h-4 bg-gray-200 rounded-full"></li>
          <li class="w-full h-4 bg-gray-200 rounded-full"></li>
          <li class="w-full h-4 bg-gray-200 rounded-full"></li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import { getBlogsBySubjectId } from "~/utils/appwrite";

export default {
  data() {
    return {
      content: null
    };
  },

  computed: {
    name() {
      return this.$route.params.name || '';
      // Ensure a default value if id is not present
    }
  },

  mounted() {
    this.fillAllBlog();
  },

  methods: {
    async fillAllBlog() {
      try {
        const subs = await getBlogsBySubjectId(this.name);
        const dividedDocuments = {};
        subs.documents.forEach(document => {
          // Get the first letter of the title, convert to uppercase
          const firstLetter = document.title[0].toUpperCase();

          // Check if there's already an array for this letter, if not, create one
          if (!dividedDocuments[firstLetter]) {
            dividedDocuments[firstLetter] = [];
          }

          // Push the document to the array corresponding to its first letter
          dividedDocuments[firstLetter].push(document);
        });
        this.content = dividedDocuments;
        console.log(dividedDocuments)
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
  }
};
</script>