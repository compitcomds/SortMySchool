<template>
    <header class="flex flex-col flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm  sm:py-0 text-black">
        <div class="inline-flex gap-5 justify-between items-center sm:p-0 md:p-0 lg:py-6 lg:px-10">
            <div class="h-auto w-36 hidden sm:block md:block">
                <img src="https://www.3forty.media/zosia/demo-5/wp-content/uploads/2022/09/zosia-logo.png" alt="" srcset="">
                <p>A personal blog theme</p>
            </div>
            <div>
                <img src="https://www.3forty.media/zosia/demo-5/wp-content/uploads/2022/09/header-promo.png" alt="" srcset="">
            </div>
        </div>
        <hr>
  <nav class="max-w-[85rem] w-full mx-auto px-6 py-2 md:px-6 lg:px-10 shadow-sm" aria-label="Global">
    <div class="relative sm:flex sm:items-center">
      <div class="flex items-center justify-between">
         <nuxt class="flex-none text-xl font-semibold text-black" href="#"><img src="https://www.3forty.media/zosia/demo-5/wp-content/uploads/2022/09/zosia-logo.png" alt="" srcset="" class="h-5"> </nuxt>
        <div class="sm:hidden">
          <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white   text-black shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent " data-hs-collapse="#navbar-slide-up-animation" aria-controls="navbar-slide-up-animation" aria-label="Toggle navigation">
            <svg class="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
            <svg class="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        
      </div>

      <div id="navbar-slide-up-animation" class="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block">
        <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
           <nuxt class="font-medium text-blue-500" href="#" aria-current="page">Home </nuxt>

          <div class="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover] ">
            <button type="button" class="sm:py-4 flex items-center w-full text-black hover:text-gray-600 font-medium ">
              Case Brief
              <svg class="ms-2 flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>

            <div class="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 sm:mt-3 top-full start-0 min-w-60 bg-white sm:shadow-md rounded-lg py-2 sm:px-2  sm:dark:border  before:absolute">
              <div class="sm:grid sm:grid-cols-4">
                <div class="flex flex-col">
                   <nuxt class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  " href="#">
                    Administrative Law
                   </nuxt>
                   <nuxt class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  " href="#">
                    Services
                   </nuxt>
                   <nuxt class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  " href="#">
                    Company Law
                   </nuxt>
                   <nuxt class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  " href="#">
                    Contract Law
                   </nuxt>
                </div>

                <div class="flex flex-col">
                     <nuxt class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  " href="#">
                        Administrative Law
                       </nuxt>
                       <nuxt class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  " href="#">
                        Services
                       </nuxt>
                       <nuxt class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  " href="#">
                        Company Law
                       </nuxt>
                       <nuxt class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  " href="#">
                        Contract Law
                       </nuxt>
                </div>
                

                <div class="flex flex-col">
                     <nuxt class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  " href="#">
                        Administrative Law
                       </nuxt>
                       <nuxt class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  " href="#">
                        Services
                       </nuxt>
                       <nuxt class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  " href="#">
                        Company Law
                       </nuxt>
                       <nuxt class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  " href="#">
                        Contract Law
                       </nuxt>
                </div>
                <div class="flex flex-col">
                     <nuxt class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  " href="#">
                        Administrative Law
                       </nuxt>
                       <nuxt class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  " href="#">
                        Services
                       </nuxt>
                       <nuxt class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  " href="#">
                        Company Law
                       </nuxt>
                       <nuxt class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm   text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  " href="#">
                        Contract Law
                       </nuxt>
                  </div>
              </div>
            </div>
          </div>

          <nuxt-link class="font-medium text-black hover:text-gray-400" to="">About</nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</header>
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