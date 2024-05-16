<template>

  <Head>
    <Title>SortMyLawSchool | Case Materials</Title>
    <Meta name="description" content="SortMyLawSchool | Case Materials" />
  </Head>
  <div class="max-w-5xl w-full p-5 mx-auto">
    <h2 class="bg-sky-800 text-center text-white py-5 text-3xl mb-5">
      Case Materials
    </h2>
    <p class="mb-7">
      The law of faculty of Delhi was the pioneer in adopting and propagating
      use of Case Method as the primary mode of teaching supplemented with
      lecture method. The case materials are updated annually to incorporate all
      the latest developments in that particular area of law. The Case Material
      for all subjects are available online on the website.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-8 w-full">
      <div class="rounded-xl overflow-clip md:w-full md:h-full bg-sky-400/10">
        <h3 class="text-center py-4 text-lg md:text-2xl bg-sky-400 text-white">
          LL. B 1 Term
        </h3>
        <ul class="flex flex-col justify-center items-center">
          <li class="w-full flex items-center justify-center gap-5">
            <nuxt-link target="_blank" to="https://lawfaculty.in/wp-content/uploads/2021/08/Law-of-Contract-I-Term.pdf"
              class="block text-end font-semibold hover:text-red-500 cursor-pointer py-4">
              Law of contract
            </nuxt-link>
            <a download="Law_of_contract_1.pdf" href="/assets/loc.pdf"
              class="block font-semibold hover:text-red-500 cursor-pointer py-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                class="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
                <path
                  d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOgImageComponent('NuxtSeo', {
  siteName: 'SortMyLawSchool',
  description: "Read more...",
  siteLogo: "https://sortmylawschool.com/favicon.png",
  colorMode: "dark",

})
</script>

<style scoped></style>
