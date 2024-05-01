<!-- have list of subject  -->
<template>
    <div>
        <p>This is Subject Index:</p>
        <hr>

        <ul class="flex flex-wrap justify-center items-center gap-5 p-5 w-full mx-auto">
            <li v-for="sub in subject" :key="sub.$id">
                <nuxt-link :to="`/subject/${sub.$id}`"
                    class="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition min-w-80">
                    <div class="relative rounded-t-xl w-full h-fit min-h-48 overflow-hidden">
                        <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                            src="https://placehold.co/600x400" alt="Image Description">
                    </div>
                    <div class="p-3 md:px-4">
                        <h3 class="text-lg font-bold capitalize text-gray-800">
                            {{ sub.name }}
                        </h3>
                        <p class="mt-1 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                            href="#">
                            Go to blogs
                            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                        </p>
                    </div>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { getAllSubjects } from "~/utils/appwrite";

export default {
    data() {
        return {
            subject: []
        };
    },

    mounted() {
        this.fillAllSubject();
    },

    methods: {
        async fillAllSubject() {
            try {
                const subs = await getAllSubjects();
                this.subject = subs.documents;
            } catch (error) {
                console.error("Error fetching subjects:", error);
            }
        }
    }
};
</script>

<style scoped>
/* Add your scoped styles here if needed */
</style>
