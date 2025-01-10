<template>
  <div class="w-full mx-auto ">
    <div class="flex items-center justify-between px-5 lg:px-16 mb-6">
      <h2 class="w-full font-semibold text-gray-700 mb-4 flex items-center gap-6">
        <p class="text-2xl">Case Briefs</p>
        <hr class="text-black bg-black h-[1.5px] w-[350px] mt-2 hidden lg:block">
      </h2>

    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 bg-[#fef1e1] px-5 lg:px-16 py-6">
      <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500" v-for="(article, index) in articles"
        :key="index" class=" overflow-hidden flex flex-col  leading-normal">
        <a :href="article.link">
          <img :src="article.image" class="w-full mb-3 relative" /></a>
        <div class="bg-[#fef1e1] absolute w-1/6 py-2 flex items-center custom-rounded-lb justify-center right-0">
          <a :href="article.link"
            class="rounded-xl border bg-black hover:bg-white hover:text-black text-white border-black p-1"><svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-move-up-right">
              <path d="M13 5H19V11" />
              <path d="M19 5L5 19" />
            </svg></a>
        </div>
        <div class="p-4 pt-2">
          <div class="">

            <a :href="article.link"
              class="text-gray-900 font-semibold text-xl mb-2 hover:text-indigo-600 inline-block">
              {{ article.title }}
            </a>
            <p class="text-gray-700 text-sm ">{{ article.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          image: "https://ccdstest.b-cdn.net/sort%20my%20law/video%20card/ADMINISTRATIVE%20LAW.jpg",
          title: "Administrative Law",
          description: "Case briefs on administrative law in India include landmark judgments commonly taught in law schools, categorized under various themes such as the principles of natural justice, delegated legislation, and more.",
          link: "/subject/AdministrativeLaw",
          author: {
            name: "Sort My Law School",
            date: "Aug 18",
            avatar: "https://tailwindcss.com/img/jonathan.jpg",
          },
          membersOnly: true,
        },
        {
          image: "https://ccdstest.b-cdn.net/sort%20my%20law/video%20card/enviornmental%20law%20(2).png",
          title: "Environment Law",
          description: "The briefs summarize landmark judgments of the Supreme Court of India under various environmental statutes. They showcase the development of key environmental principles by the Indian judiciary, such as the polluter pays principle, sustainable development, and more.",
          link: "/subject/EnvironmentalLaw",
          author: {
            name: "Sort My Law School",
            date: "Aug 18",
            avatar: "https://tailwindcss.com/img/jonathan.jpg",
          },
          membersOnly: true,
        },
        {
          image: "https://ccdstest.b-cdn.net/sort%20my%20law/video%20card/Untitled%20design.jpg",
          title: "Taxation Law",
          description: "Summaries of landmark judgments that help students understand how income tax is assessed under various heads of income.",
          link: "/subject/TaxationLaw",
          author: {
            name: "Sort My Law School",
            date: "Aug 18",
            avatar: "https://tailwindcss.com/img/jonathan.jpg",
          },
          membersOnly: true,
        },
        {
          image: "https://ccdstest.b-cdn.net/sort%20my%20law/video%20card/ADMINISTRATIVE%20LAW.jpg",
          title: "Other Case Briefs",
          description: "Summaries of landmark judgments taught across various law school subjects are available to students free of charge.",
          link: "/subject/AdministrativeLaw",
          author: {
            name: "Sort My Law School",
            date: "Aug 18",
            avatar: "https://tailwindcss.com/img/jonathan.jpg",
          },
          membersOnly: true,
        },
        // Add more articles here as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Additional styles if needed */
.custom-rounded-lb {
  border-radius: 0 0 0 10px;
  /* Adjust the radius value as needed */
}
</style>