<!-- have list of subject  -->
<template>
    <div>
        <p>This is Subject Index:</p>
        <hr>
        <ul>
            <li v-for="sub in subject" :key="sub.$id">
                {{ sub.name }}
                <nuxt-link :to="`/subject/${sub.name}`">click</nuxt-link>
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
