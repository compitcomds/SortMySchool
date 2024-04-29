<template>
  <div>
    <h1>cases</h1>
    <ul>
      <li v-for="subject in subjects" :key="subject.id">
        {{ subject.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAllSubjects } from "~/utils/appwrite";
const subjects = ref([]);

async function fillAllSubjects() {
  const subs = await getAllSubjects();
  subjects.value = subs.documents;
  console.log(subs);
}

onMounted(fillAllSubjects);
</script>

<style lang="scss" scoped></style>
