<template>
  <div class="max-w-5xl w-full p-5 mx-auto">
    <h1 class="bg-sky-800 text-center text-white py-5 text-3xl mb-5">
      DU Case Materials
    </h1>
    <p class="mb-7">
      Many times, the Delhi University website isn't working, so we have uploaded DU case material here in good faith.
      This way, students can access it freely whenever they want.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-8 w-full">
      <div v-for="(courses, index) in llbCourses" :key="`course-${index}`"
        class="rounded-xl overflow-clip md:w-full md:h-full bg-sky-400/10">
        <h2 class="text-center py-4 text-lg md:text-2xl bg-sky-400 text-white">
          {{ courses.term }}
        </h2>
        <ul class="flex flex-col justify-center items-center">
          <li v-for="(subject, j) in courses.subjects" :key="`subject-${index}-${j}`"
            class="w-full flex items-center justify-between gap-5 px-4">
            <nuxt-link :target="subject.pdfLink !== '#' ? '_blank' : ''"
              :to="subject.pdfLink !== '#' ? subject.pdfLink : ''" class="block"
              :class="subject.pdfLink !== '#' ? 'cursor-pointer hover:text-red-500 font-semibold py-3' : 'text-sm text-gray-400 pt-3 pb-2'">
              {{ subject.name }}
            </nuxt-link>
            <a v-if="subject.pdfLink !== '#'" :download="`${subject.name}.pdf`" :href="subject.pdfLink"
              class="block font-semibold hover:text-red-500 cursor-pointer py-3">
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

const llbCourses = [
  {
    term: "I Term LL.B.",
    subjects: [
      { name: "LB-101 Jurisprudence-I", pdfLink: "/case-materials/term1-1.pdf" },
      { name: "LB-102 Principles of Contract", pdfLink: "/case-materials/term1-poc.pdf" },
      { name: "LB-103 Law of Torts", pdfLink: "/case-materials/term1-lot.pdf" },
      { name: "LB-104 Law of Crimes- I", pdfLink: "/case-materials/term1-loc.pdf" },
      { name: "LB-105 Family Law I", pdfLink: "/case-materials/term1-fl1.pdf" },
    ]
  },
  {
    term: "II Term LL.B.",
    subjects: [
      { name: "LB- 201 Law of Evidence", pdfLink: "/case-materials/term2-loe.pdf" },
      { name: "LB- 202 Family Law", pdfLink: "/case-materials/term2-fl2.pdf" },
      { name: "LB- 203 Law of Crimes- II", pdfLink: "/case-materials/term2-loc2.pdf" },
      { name: "LB- 204 Property Law", pdfLink: "/case-materials/term2-pl.pdf" },
      { name: "LB- 205 Public International Law", pdfLink: "/case-materials/term2-pil.pdf" },
    ]
  },
  {
    term: "III Term LL.B.",
    subjects: [
      { name: 'Compulsory Subjects:', pdfLink: '#' },
      { name: "LB-301: Constitutional Law – I", pdfLink: "/case-materials/term3-cl1.pdf" },
      { name: "LB-302: Code of Civil Procedure and Limitation Act", pdfLink: "/case-materials/term3-cpl.pdf" },
      { name: "LB-303: Company Law", pdfLink: "/case-materials/term3-cl.pdf" },
      { name: "LB-304: Special Contracts", pdfLink: "/case-materials/term3-sc.pdf" },
      { name: 'Optional Subjects:', pdfLink: '#' },
      { name: "LB-3031: Media and Law", pdfLink: "/case-materials/term3-mlc.pdf" },
      { name: "LB-3032: Private International Law", pdfLink: "/case-materials/term3-pil.pdf" },
      { name: "LB-3033: Legal Philosophy including Theory of Justice", pdfLink: "/case-material" },
      { name: "LB-3034: White Collar Crimes", pdfLink: "/case-materials/term3-wcc.pdf" },
    ]
  },
  {
    term: "IV Term LL.B.",
    subjects: [
      { name: "Constitution Law", pdfLink: "/case-materials/term4-cl2.pdf" },
      { name: "Administrative Law", pdfLink: "/case-materials/term4-al.pdf" },
      { name: "Labour Law", pdfLink: "/case-materials/term4-ll.pdf" },
      { name: "Gender Justice & Feminist Jurisprudence", pdfLink: "/case-materials/term4-gjf.pdf" },
      { name: "International Institutions", pdfLink: "/case-materials/term4-ii.pdf" },
      { name: "Competition Law", pdfLink: "/case-materials/term4-cl.pdf" },
      { name: "Legislative Drafting", pdfLink: "/case-materials/term4-ld.pdf" },
      { name: "Humanitarian Law and Refugee Law", pdfLink: "/case-materials/term4-hlrl.pdf" },
      { name: "Intellectual Property Rights Law-I", pdfLink: "/case-materials/term4-iprl1.pdf" },
    ]
  },
  {
    term: "V Term LL.B.",
    subjects: [
      // Add subjects and pdfLinks here if available
    ]
  },
  {
    term: "VI Term LL.B.",
    subjects: [
      { name: "Advocacy Professional Ethics and Accountancy for Lawyers", pdfLink: "/case-materials/term6-apea.pdf" },
      { name: "ADR Course", pdfLink: "/case-materials/term6-adr.pdf" },
      { name: "Environmental Law", pdfLink: "/case-materials/term6-el.pdf" },
      { name: "Principles of Taxation Law", pdfLink: "/case-materials/term6-potl.pdf" },
      { name: "Interpretation of Statutes", pdfLink: "/case-materials/term6-ispl.pdf" },
      { name: "Insurance and Banking Law", pdfLink: "/case-materials/term6-ibl.pdf" },
      { name: "Election Laws", pdfLink: "/case-materials/term6-elaws.pdf" },
      { name: "Minor Acts and Supreme Courts Rules", pdfLink: "/case-materials/term6-mascr.pdf" },
    ]
  },
];



defineOgImageComponent('NuxtSeo', {
  siteName: 'SortMyLawSchool',
  description: "Read more...",
  siteLogo: "https://sortmylawschool.com/favicon.png",
  colorMode: "dark",
})

useSeoMeta({
  title: "SortMyLawSchool | Case Materials",
  description: "Case Materials",
  ogTitle: "SortMyLawSchool | Case Materials",
  ogDescription: "Case Materials"
})
</script>

<style scoped></style>
