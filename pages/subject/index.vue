<!-- have list of subject  -->
<template>
  <div v-if="subjectObj">
    <h3 class="text-center py-6 text-2xl font-bold">Legal Case Briefs for Academics</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl w-full p-5 mx-auto">
      <div v-for="(subjects, letter) in subjectObj" :key="letter"
        class="rounded-xl overflow-clip md:w-full md:h-full bg-sky-400/10">
        <p class="text-center py-4 text-lg md:text-2xl bg-sky-400 text-white">{{ letter }}</p>
        <ul class="flex flex-col justify-center items-center">
          <li v-for="subject in subjects" :key="subject.$id" class="text-center w-full">
            <nuxt-link :to="`/subject/${subject.$id}`"
              class="block w-full h-full hover:bg-sky-400/20 cursor-pointer py-4">
              {{ subject.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>

  </div>
  <div v-else>
    <ul class="flex flex-wrap justify-center items-center gap-5 p-5 w-full mx-auto">
      <li v-for="i in generateRange(1, 24, 2)" :key="i">
        <div
          class="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition min-w-80">
          <div class="relative rounded-t-xl w-full h-fit min-h-80 overflow-hidden bg-gray-300 skeleton">
            <!-- Skeleton for image placeholder -->
            <div class="bg-gray-300 skeleton"></div>
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script setup>
import { getAllSubjects } from "~/utils/appwrite";

const subjectObj = useState("subjectObj", () => null);
try {
  const subs = await getAllSubjects();
  subjectObj.value = divideDocumentsAlphabetically(subs, "name");
} catch (error) {
  console.error("Error fetching subjects:", error);
}

function generateRange(start, stop, step) {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step
  );
}

useSeoMeta({
  title: "SortMyLawSchool | Legal Case Briefs for Academics",
  description: "SortMyLawSchool | Legal Case Briefs for Academics",
  ogTitle: "SortMyLawSchool | Legal Case Briefs for Academics",
  ogDescription: "SortMyLawSchool | Legal Case Briefs for Academics"
});
defineOgImageComponent('NuxtSeo', {
  siteName: 'SortMyLawSchool',
  description: "Read more...",
  siteLogo: "https://sortmylawschool.com/favicon.png",
  colorMode: "dark",
})
</script>

<style scoped>
/* Add your scoped styles here if needed */
</style>
