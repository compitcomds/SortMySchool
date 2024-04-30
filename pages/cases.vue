<template>
  <div>
    <h1>cases</h1>
    <div v-if="subjects ">
      <ul>
        <li v-for="subject in subjects" :key="subject.id">
          <!-- {{ subject.name }} -->
          {{ subject }}
          <div class="badge badge-primary">
          <nuxt-link :to="`case/${subject.name}`">click</nuxt-link>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      loading...
    </div>
    
  </div>
</template>

<script>
import { getAllSubjects } from "~/utils/appwrite";

export default {
  data() {
    return {
      subjects: null
    };
  },
  async mounted() {
    await this.fillAllSubjects();
  },
  methods: {
    async fillAllSubjects() {
      const subs = await getAllSubjects();
      this.subjects = subs.documents;
    }
  }
}
</script>

<style lang="scss" scoped></style>
