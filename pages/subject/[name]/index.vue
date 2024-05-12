<template>
  <Listofcontent :propContent="content" />
</template>

<script setup>
import { getBlogsBySubjectId } from "~/utils/appwrite";

const content = useState("content", () => null);
const route = useRoute();
const name = route.params.name || "";

try {
  const subs = await getBlogsBySubjectId(name);
  content.value = divideDocumentsAlphabetically(subs);
  console.log(subs);
} catch (error) {
  console.error("Error fetching blogs:", error);
}

useSeoMeta({
  title: `SortMyLawSchool | Subject | ${name}`,
  description: "SortMyLawSchool | Subject",
});
</script>
