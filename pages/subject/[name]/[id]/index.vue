<template>
    <div>
{{ name }}
<hr>
{{ id }}
<hr>
<div id="app">
 
    <div v-html="content"></div>
</div>
    </div>
</template>

<script>
    import { getBlogById } from "~/utils/appwrite";

    export default {
        data(){
            return{
                content:'<p class="text-lg uppercase text-gray-100 bg-gray-700">UI/UX Designer</p>'
            }
        },
        computed: {
        name() {
            return this.$route.params.name || ''; 
            // Ensure a default value if id is not present
        },
        id(){
            return this.$route.params.id || ''; 
        }
    },
    mounted(){
        this.getDataById();
    },
    methods: {
        // here write a login to get data
        // for get data use this keyword 
        
        async getDataById(){
            try {
                const blog = await getBlogById(this.id);
                this.content = blog.content;
                console.log(blog);
            } catch (error) {
                console.error("Error fetching blog:", error);
            }

        }
    },
    }
</script>

<style lang="scss" scoped>

</style>