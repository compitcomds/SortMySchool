<template>
  <h1 class="bg-sky-800 text-center text-white py-5 text-3xl mb-5 mt-24">
    {{ subject?.name || "Subject Not Found" }}
  </h1>
  <Listofcontent :propContent="content" />
</template>

<script setup>
import { getBlogsBySubjectId, getSubjectById } from "~/utils/appwrite";

const subject = useState("subject", () => null);
const content = useState("content", () => null);
const route = useRoute();
const name = route.params.name || "";
try {
  subject.value = await getSubjectById(name);
} catch (error) {}

try {
  const subs = await getBlogsBySubjectId(name);
  content.value = divideDocumentsAlphabetically(subs);
} catch (error) {
  console.error("Error fetching blogs:", error);
}

useSeoMeta({
  title: `SortMyLawSchool | ${subject.value.name}`,
  description: `SortMyLawSchool | ${subject.value.name}`,
  ogTitle: `SortMyLawSchool | ${subject.value.name}`,
  ogDescription: `SortMyLawSchool | ${subject.value.name}`,
});
defineOgImageComponent("NuxtSeo", {
  siteName: "SortMyLawSchool",
  description: "Read more...",
  siteLogo: "https://sortmylawschool.com/favicon.png",
  colorMode: "dark",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: `${useRuntimeConfig().public.siteUrl}/subject/${name}`,
    },
  ],
});
</script>
