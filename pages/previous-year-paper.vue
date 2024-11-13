<template>
    <div class="max-w-5xl w-full p-5 mx-auto mt-10 py-16">
        <h1 class="bg-sky-800 text-center text-white py-5 text-3xl mb-5">
            Previous Year Papers <br class="lg:hidden"> Case Materials
        </h1>
        <p class="mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis veritatis necessitatibus vel?
            Architecto, ipsum nulla quibusdam fuga quod veniam. Esse odit consequatur harum reprehenderit magni.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-8 w-full">
            <div v-for="(courses, index) in llbCourses" :key="`course-${index}`"
                class="rounded-xl overflow-clip md:w-full md:h-full bg-sky-400/10">
                <h2 class="text-center py-4 text-lg md:text-2xl bg-sky-400 text-white">
                    {{ courses.term }}
                </h2>
                <ul class="flex flex-col justify-center items-center">
                    <li v-for="(subject, j) in courses.subjects" :key="`subject-${index}-${j}`"
                        class="w-full flex items-center justify-between gap-5 px-4">
                        <nuxt-link :target="subject.pdfLink !== '#' ? '_blank' : ''"
                            :to="subject.pdfLink !== '#' ? subject.pdfLink : ''" class="block" :class="subject.pdfLink !== '#'
                                ? 'cursor-pointer hover:text-red-500 font-semibold py-3'
                                : 'text-sm text-gray-400 pt-3 pb-2'
                                ">
                            {{ subject.name }}
                        </nuxt-link>
                        <a v-if="subject.pdfLink !== '#'" :download="`${subject.name}.pdf`" :href="subject.pdfLink"
                            class="block font-semibold hover:text-red-500 cursor-pointer py-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                class="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
const llbCourses = [

    {
        term: "CLAT PG",
        subjects: [
            {
                name: "Past Year Paper 2020",
                pdfLink: "/pyq/CLAT PG Past Year Solve Papers with Explanations (2020 - 2024) e-book-flat-338-425.pdf",
            },
            {
                name: "Past Year Paper 2021",
                pdfLink: "/pyq/CLAT PG Past Year Solve Papers with Explanations (2020 - 2024) e-book-flat-265-337.pdf"
            },
            {
                name: "Past Year Paper 2022",
                pdfLink: "/pyq/CLAT PG Past Year Solve Papers with Explanations (2020 - 2024) e-book-flat-179-264.pdf",
            },
            {
                name: "Past Year Paper 2023",
                pdfLink: "/pyq/CLAT PG Past Year Solve Papers with Explanations (2020 - 2024) e-book-flat-96-178.pdf"
            },

            {
                name: "Past Year Paper 2024",
                pdfLink: "/pyq/CLAT PG Past Year Solve Papers with Explanations (2020 - 2024) e-book-flat-11-96.pdf",
            },


        ],
    },
    {
        term: "UGC Net",
        subjects: [
            {
                name: "UGC Net June-2019",
                pdfLink: "/pyq/ugc-net-2019-june.pdf",
            },
            {
                name: "UGC Net September-2019",
                pdfLink: "/pyq/ugc-net-2019-september.pdf",
            },
            {
                name: "UGC Net September-2020 Paper",
                pdfLink: "/pyq/ugc-net-paper-2020.pdf",
            },
        ],
    },

];

defineOgImageComponent("NuxtSeo", {
    siteName: "SortMyLawSchool",
    description: "Read more...",
    siteLogo: "https://sortmylawschool.com/favicon.png",
    colorMode: "dark",
});

useSeoMeta({
    title: "SortMyLawSchool | Case Materials",
    description: "Case Materials",
    ogTitle: "SortMyLawSchool | Case Materials",
    ogDescription: "Case Materials",
});

useHead({
    link: [
        {
            rel: "canonical",
            href: `${useRuntimeConfig().public.siteUrl}/case-material`,
        },
    ],
});
</script>

<style scoped></style>