<template>
    <section>
        <!-- Container -->
        <div class="mx-auto max-w-7xl px-5 py-8 md:px-10 md:py-8 lg:py-8">
          <!-- Heading Div -->
          <div class="mx-auto w-full max-w-3xl">
            <!-- Component -->
            <div class="text-center">
              <!-- <p class="uppercase text-[#1353fe]">3 easy steps</p> -->
              <h2 class="text-2xl font-semibold capitalize md:text-5xl">
                Good <span class="text-sky-400">quality content</span> leads to...
              </h2>
            </div>
          </div>
    
          <div
            class="mx-auto grid grid-cols-1 gap-4 sm:justify-items-stretch md:grid-cols-3 lg:gap-8"
          >
            <div class="relative flex flex-col items-center gap-4 p-2 text-center">
              <div
                class="transition duration-300 ease-in-out hover:scale-110 mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl bg-white md:mb-6 lg:mb-8"
              >
                <p class="text-xl font-bold">
                  <NuxtImg
                    loading="lazy"
                    class="w-40"
                    src="/assets/5.png"
                    alt="SortMyLawSchool | Good quality content leads to better grades"
                  />
                </p>
              </div>
              <p class="mb-2 text-xl font-semibold">Better Grades !</p>
              <NuxtImg
                loading="lazy"
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639833af1925275b6f0b43e1_Vector%2032.svg"
                alt="SortMyLawSchool | Image"
                class="absolute bottom-[-33%] left-0 right-auto top-auto -z-10 hidden w-96 md:bottom-auto md:left-[136px] md:right-[-50%] md:top-[18%] md:inline-block lg:left-auto"
              />
            </div>
    
            <div class="relative flex flex-col items-center gap-4 p-2 text-center">
              <div
                class="transition duration-300 ease-in-out hover:scale-110 mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl bg-white md:mb-6 lg:mb-8"
              >
                <p class="text-xl font-bold">
                  <NuxtImg
                    loading="lazy"
                    class="w-40"
                    src="/assets/7.png"
                    alt="SortMyLawSchool | Good quality content leads to better CV & internships"
                  />
                </p>
              </div>
              <p class="mb-2 text-xl font-semibold">Better CV & Internships !</p>
            </div>
    
            <div class="relative flex flex-col items-center gap-4 p-2 text-center">
              <div
                class="transition duration-300 ease-in-out hover:scale-110 mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl bg-white md:mb-6 lg:mb-8"
              >
                <p class="text-xl font-bold">
                  <NuxtImg
                    loading="lazy"
                    class="w-40 object-cover"
                    src="/assets/6.png"
                    alt="SortMyLawSchool | Good quality content leads to better colleges abroad"
                  />
                </p>
              </div>
              <p class="mb-2 text-xl font-semibold">Better Colleges Abroad !</p>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>