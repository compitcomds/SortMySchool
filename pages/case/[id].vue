<template>
    <div>
        this is main blog page
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
  