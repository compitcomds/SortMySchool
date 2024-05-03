<template>

  <Listofcontent :propContent="content" />
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
        this.content = divideDocumentsAlphabetically(subs);
        console.log(dividedDocuments)
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
  }
};
</script>