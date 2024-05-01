<template>
    <header
        class="flex flex-col flex-wrap sm:justify-center sm:flex-nowrap z-50 w-full bg-white text-sm sm:py-0 text-black">
        <div class="inline-flex gap-5 justify-between items-center sm:p-0 md:p-0 lg:py-6 lg:px-10">

            <div class="h-auto w-36 hidden sm:block md:block"><nuxt-link to="/">
                    <img src="https://www.3forty.media/zosia/demo-5/wp-content/uploads/2022/09/zosia-logo.png" alt=""
                        srcset="" /></nuxt-link>
                <p>A personal blog theme</p>
            </div>

            <div class="object-cover lg:w-1/2 lg:rounded-lg"><nuxt-link to="https://www.youtube.com/@fglawkit">
                    <img src="https://yt3.googleusercontent.com/tis5V1pB6fvLi4yEXiivr9tCfw9gXNj95uyafLNH8MNzV058-yT048b4inWqeIkIO1wHkZcTyA=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                        alt="" srcset="" class="rounded-lg" /></nuxt-link>
            </div>
        </div>
        <hr />
        <mynav />
        <!-- here is cuted dipesh nav  -->
    </header>
    <slot />
    <myfooter/>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-item {
    @apply font-medium text-gray-500 py-3 md:py-6 dark:text-neutral-400;
}

.nav-active,
.router-link-exact-active {
    @apply font-medium text-blue-600 py-3 md:py-6 dark:text-blue-500;
}
</style>
