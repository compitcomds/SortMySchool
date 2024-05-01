<template>
  
<Listofcontent :propName="content"  />
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