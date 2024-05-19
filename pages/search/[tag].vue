<template>

  <Head>
    <Title>SortMyLawSchool | searching for: {{ tag }}</Title>
  </Head>
  <div>
    <Listofcontent v-if="isLoading || content" :propContent="content" />
    <div v-else class="h-[50vh] my-20">
      <h1 class="text-3xl text-center font-bold">No Results Found!</h1>

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
      console.log("Search query: ", inputname);
      console.log(blogs)
      console.log(divideDocumentsAlphabetically(blogs, "title"));
      this.isLoading = false
    },
  },
};
</script>

<style lang="scss" scoped></style>
