<template>
  <!-- ========== HEADER ========== -->
  <!-- ========== HEADER ========== -->
  <header
    class="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full before:absolute before:inset-0 before:max-w-[66rem] before:mx-2 before:lg:mx-auto before:rounded-[26px] before:bg-neutral-800/30 before:backdrop-blur-md"
  >
    <nav
      class="relative max-w-[66rem] w-full py-2.5 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto"
    >
      <div class="flex items-center justify-between">
        <nuxt-link
          class="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
          href="../templates/agency/index.html"
          aria-label="Preline"
        >
          <img
            loading="lazy"
            src="/assets/Sqlogo.png"
            alt="SortMyLawSchool | Logo"
            srcset=""
            class="w-12"
          />
        </nuxt-link>

        <div class="md:hidden">
          <button
            type="button"
            class="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-[#FFFECB] disabled:opacity-50 disabled:pointer-events-none"
            id="hs-navbar-floating-dark-collapse"
            aria-expanded="false"
            aria-controls="hs-navbar-floating-dark"
            aria-label="Toggle navigation"
            data-hs-collapse="#hs-navbar-floating-dark"
          >
            <svg
              class="hs-collapse-open:hidden shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              class="hs-collapse-open:block hidden shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>

      
      <div
        id="hs-navbar-floating-dark"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
        aria-labelledby="hs-navbar-floating-dark-collapse"
      >
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7"
        >
          <a
            class="p-3 ps-px sm:px-3 md:py-4 text-sm text-[#FFFECB] hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
            href="../templates/agency/index.html"
            aria-current="page"
            >Home</a
          >
          <a
            class="p-3 ps-px sm:px-3 md:py-4 text-sm text-[#FFFECB] hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
            href="#"
            >DU Casemat</a
          >
          <a
            class="p-3 ps-px sm:px-3 md:py-4 text-sm text-[#FFFECB] hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
            href="#"
            >PYQ</a
          >
          <a
            class="p-3 ps-px sm:px-3 md:py-4 text-sm text-[#FFFECB] hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
            href="#"
            >Case Brief</a
          >

          <div
            class="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] p-3 ps-px sm:px-3 md:py-4"
          ></div>
          <div>
            <button
              class="group inline-flex items-center gap-x-24 py-2 px-3 border-[#37AFE1] border font-medium text-sm text-[#FFFECB] rounded-full focus:outline-none"
              type="button"
              data-hs-overlay="#search-modal"
              
            >
              Search...
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-search"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header> 
  <!-- ========== END HEADER ========== -->
</template>

<style>
.router-link-active {
  @apply text-blue-600;
}
</style>
