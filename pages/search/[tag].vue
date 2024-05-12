<template>
  <Head>
    <Title>SortMyLawSchool | searching for: {{ tag }}</Title>
  </Head>
  <div>
    <Listofcontent :propName="tag" :propContent="content" />
  </div>
</template>

<script>
import { searchBlogByTag } from "~/utils/appwrite";

export default {
  data() {
    return {
      content: null,
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
      const blogs = await searchBlogByTag(inputname);
      this.content = divideDocumentsAlphabetically(blogs, "title");
      console.log("Search query: ", inputname);
      console.log(divideDocumentsAlphabetically(blogs, "title"));
    },
  },
};
</script>

<style lang="scss" scoped></style>
