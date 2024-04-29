<template>
    
    <slot />

</template>

<script>

export default {
    
}
</script>

<style scoped>
.nav-item{
    @apply font-medium text-gray-500 py-3 md:py-6 dark:text-neutral-400 
}
.nav-active ,.router-link-exact-active{
    @apply font-medium text-blue-600 py-3 md:py-6 dark:text-blue-500
}
</style>