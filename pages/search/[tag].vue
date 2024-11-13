<template>

  <Head>
    <Title>SortMyLawSchool | searching for: {{ tag }}</Title>
  </Head>
  <div class="mt-28">
    <Listofcontent v-if="isLoading || content" :propContent="content" />
    <div v-else class="h-[50vh] my-20  flex flex-col gap-10 items-center">
      <h1 class="text-3xl text-center font-bold">No Results Found!</h1>
      <nuxt-link to="/subject"
        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-sky-500 text-white hover:bg-sky-700 disabled:opacity-50 disabled:pointer-events-none">
        Explore others
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { searchBlogByTag } from "~/utils/appwrite";

export default {
  data() {
    return {
      content: null,
      isLoading: false
    };
  },
  computed: {
    tag() {
      return this.$route.params.tag || "";
      // Ensure a default value if id is not present
    },
  },
  mounted() {
    this.searchBlog(this.tag);
  },
  methods: {
    async searchBlog(inputname) {
      this.isLoading = true
      const blogs = await searchBlogByTag(inputname);
      if (blogs.total === 0) {
        this.isLoading = false;
        return
      }
      this.content = divideDocumentsAlphabetically(blogs, "title");
      this.isLoading = false
    },
  },
};
</script>

<style scoped></style>
