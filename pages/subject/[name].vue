<template>
    <div>
      <p>Route Parameter: {{ name }}</p>

      <div v-if="content">
        <ul>
          <li v-for="blog in content" :key="blog.id">
            {{ blog.title }}
            <nuxt-link :to="`/case/${blog.$id}`">click</nuxt-link>
            <br>
            <nuxt-link :to="`${name}/${blog.$id}`">second click</nuxt-link>
          </li>
        </ul>
      </div>
      <div v-else>
        Loading... 
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
        return this.$route.params.name || ''; // Ensure a default value if id is not present
      }
    },
  
    mounted() {
      this.fillAllBlog();
    },
  
    methods: {
      async fillAllBlog() {
        try {
          const subs = await getBlogsBySubjectId(this.name);
          this.content = subs.documents;
        } catch (error) {
          console.error("Error fetching blogs:", error);
        }
      }
    }
  };
  </script>
  