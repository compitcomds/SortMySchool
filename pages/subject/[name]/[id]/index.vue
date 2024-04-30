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
    methods: {
        // here write a login to get data
        // for get data use this keyword 
        
        getDataById(){
            this.content=''

        }
    },
    }
</script>

<style lang="scss" scoped>

</style>