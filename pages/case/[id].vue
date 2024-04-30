<template>
    <div>
      <p>Route Parameter: {{ id }}</p>
    </div>
  </template>
  
  <script>
  import { getBlogsBySubjectId } from "~/utils/appwrite";

  export default {
    data() {
      return {
        id: ''
      };
    },
    created() {
      this.id = this.$route.params.id;
      // Do something with the id parameter
    }
    methods: {
        AllBolg(){

        }
    },
    
  };
  </script>
  