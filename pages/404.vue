<template>
    <div class="flex flex-col justify-center items-center my-10 min-h-[60vh] max-w-full">
        <nuxt-link to="/"
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-sky-500 text-white hover:bg-sky-700 disabled:opacity-50 disabled:pointer-events-none">
            Go back to home
        </nuxt-link>
        <img src="/assets/not-found.svg" alt="Not found" class="max-w-full object-cover" />
    </div>
</template>

<script setup>
defineProps(['error'])
</script>

<style lang="scss" scoped></style>