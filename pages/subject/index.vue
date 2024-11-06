<!-- have list of subject  -->
<template>
  <div v-if="subjectObj">
    <h3 class="text-center py-6 text-2xl font-bold mt-10">
      Legal Case Briefs or Case Summary for Academics
    </h3>
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl w-full p-5 mx-auto"
    >
      <div
        v-for="(subjects, letter) in subjectObj"
        :key="letter"
        class="rounded-xl overflow-clip md:w-full md:h-full bg-sky-400/10"
      >
        <p class="text-center py-4 text-lg md:text-2xl bg-sky-400 text-white">
          {{ letter }}
        </p>
        <ul class="flex flex-col justify-center items-center">
          <li
            v-for="subject in subjects"
            :key="subject.$id"
            class="text-center w-full"
          >
            <nuxt-link
              :to="`/subject/${subject.$id}`"
              class="block w-full h-full hover:bg-sky-400/20 cursor-pointer py-4"
            >
              {{ subject.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div v-else>
    <ul
      class="flex flex-wrap justify-center items-center gap-5 p-5 w-full mx-auto"
    >
      <li v-for="i in generateRange(1, 24, 2)" :key="i">
        <div
          class="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition min-w-80"
        >
          <div
            class="relative rounded-t-xl w-full h-fit min-h-80 overflow-hidden bg-gray-300 skeleton"
          >
            <!-- Skeleton for image placeholder -->
            <div class="bg-gray-300 skeleton"></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { getAllSubjects } from "~/utils/appwrite";

const subjectObj = useState("subjectObj", () => null);
try {
  const subs = await getAllSubjects();
  subjectObj.value = divideDocumentsAlphabetically(subs, "name");
} catch (error) {
  console.error("Error fetching subjects:", error);
}

function generateRange(start, stop, step) {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step
  );
}

useSeoMeta({
  title: "SortMyLawSchool | Legal Case Briefs for Academics",
  description: "SortMyLawSchool | Legal Case Briefs for Academics",
  ogTitle: "SortMyLawSchool | Legal Case Briefs for Academics",
  ogDescription: "SortMyLawSchool | Legal Case Briefs for Academics",
});
defineOgImageComponent("NuxtSeo", {
  siteName: "SortMyLawSchool",
  description: "Read more...",
  siteLogo: "https://sortmylawschool.com/favicon.png",
  colorMode: "dark",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Case Briefs",
        url: "https://sortmylawschool.com/subject",
        description:
          "A collection of case briefs for various legal subjects to assist law students in their studies.",
        mainEntity: [
          {
            "@type": "EducationalOrganization",
            name: "Administrative Law",
            url: "https://sortmylawschool.com/subject/AdministrativeLaw",
            description:
              "A comprehensive resource on Administrative Law, covering key concepts, case briefs, and regulatory information. This page provides detailed insights into the rules and procedures governing administrative agencies, including their decision-making processes, enforcement powers, and the principles of judicial review. Ideal for law students, practitioners, and anyone interested in understanding the intersection between government agencies and legal frameworks.",
          },
          {
            "@type": "EducationalOrganization",
            name: "Business Regulations",
            url: "https://sortmylawschool.com/subject/BusinessRegulations",
            description:
              "A detailed guide to Business Regulations, providing essential information on the legal rules and compliance requirements that businesses must follow. This page covers a range of topics including regulatory agencies, industry-specific regulations, and the impact of legal frameworks on business operations. It is designed for entrepreneurs, business owners, legal professionals, and anyone seeking to understand the regulatory landscape affecting business practices.",
          },
          {
            "@type": "EducationalOrganization",
            name: "Code Of Civil Procedure",
            url: "https://sortmylawschool.com/subject/CodeOfCivilProcedure",
            description:
              "An authoritative resource on the Code of Civil Procedure, detailing the procedural rules and guidelines governing civil litigation. This page provides comprehensive information on the steps involved in civil court cases, including filing procedures, pre-trial motions, trial processes, and appeals. It is designed for law students, legal practitioners, and individuals seeking to understand the formal procedures of civil legal actions.",
          },
          {
            "@type": "EducationalOrganization",
            name: "Company Law",
            url: "https://sortmylawschool.com/subject/CompanyLaw",
            description:
              "An in-depth resource on Company Law, covering the legal principles and regulations that govern the formation, management, and dissolution of companies. This page provides detailed information on corporate governance, compliance requirements, and the rights and responsibilities of company directors and shareholders. It is intended for business owners, legal professionals, and students seeking a thorough understanding of the legal framework for business entities.",
          },
          {
            "@type": "EducationalOrganization",
            name: "Constitutional Law I",
            url: "https://sortmylawschool.com/subject/ConstitutionalLawI",
            description:
              "A comprehensive introduction to Constitutional Law I, exploring the fundamental principles and doctrines of constitutional law. This page covers essential topics such as the structure of government, separation of powers, individual rights, and landmark constitutional cases. It is designed for law students, legal professionals, and anyone seeking to understand the core principles and applications of constitutional law.",
          },
          {
            "@type": "EducationalOrganization",
            name: "Constitutional Law II",
            url: "https://sortmylawschool.com/subject/ConstitutionalLawII",
            description:
              "An advanced exploration of Constitutional Law II, delving into complex constitutional issues and doctrines. This page covers topics such as advanced interpretations of constitutional provisions, judicial review, federalism, and significant Supreme Court decisions. Designed for law students, legal scholars, and practitioners, this resource provides a deeper understanding of the dynamic and evolving nature of constitutional law.",
          },
          {
            "@type": "EducationalOrganization",
            name: "Principles of Contract",
            url: "https://sortmylawschool.com/subject/Principles_of_Contract",
            description:
              "A foundational resource on the Principles of Contract, outlining the essential concepts and rules governing contract law. This page covers key topics such as contract formation, offer and acceptance, consideration, contract performance, and remedies for breach. It is designed for law students, legal practitioners, and individuals seeking a clear understanding of the basic principles that underpin contractual agreements.",
          },
          {
            "@type": "EducationalOrganization",
            name: "Copyright Law",
            url: "https://sortmylawschool.com/subject/CopyrightLaw",
            description:
              "A comprehensive guide to Copyright Law, detailing the legal framework that protects original works of authorship. This page covers essential topics such as copyright eligibility, rights of copyright holders, infringement issues, and enforcement mechanisms. Designed for creators, legal professionals, and students, this resource provides a thorough understanding of how copyright law safeguards creative works and addresses violations.",
          },
          {
            "@type": "EducationalOrganization",
            name: "Environmental Law",
            url: "https://sortmylawschool.com/subject/EnvironmentalLaw",
            description: "A summary and analysis of Case Brief 4.",
          },
          {
            "@type": "EducationalOrganization",
            name: "Industrial Law",
            url: "https://sortmylawschool.com/subject/IndustrialLaw",
            description:
              "A comprehensive resource on Industrial Law, addressing the legal aspects of industrial relations and employment practices. This page covers key topics such as labor laws, workplace safety regulations, employment standards, and the resolution of industrial disputes. It is designed for law students, HR professionals, and individuals seeking a thorough understanding of the legal framework governing industrial and employment issues.",
          },
          {
            "@type": "EducationalOrganization",
            name: "Information Technology Law",
            url: "https://sortmylawschool.com/subject/InformationTechnologyLaw",
            description:
              "A comprehensive resource on Information Technology Law, covering the legal issues and regulations associated with technology and digital information. This page addresses key topics such as data protection, cybersecurity laws, intellectual property rights in technology, and regulatory compliance for tech companies. Designed for law students, IT professionals, and individuals interested in the legal aspects of technology, this page provides essential insights into the evolving field of IT law.",
          },
          {
            "@type": "EducationalOrganization",
            name: "Insolvency and Bankruptcy Code",
            url: "https://sortmylawschool.com/subject/InsolvencyandBankruptcyCode",
            description:
              "A detailed resource on the Insolvency and Bankruptcy Code, outlining the legal framework for insolvency and bankruptcy proceedings. This page covers key aspects such as the process of insolvency resolution, bankruptcy adjudication, creditor rights, and the roles of various stakeholders. Designed for law students, legal practitioners, and individuals involved in insolvency matters, this page provides comprehensive insights into the procedures and legal principles governing financial distress and recovery.",
          },
          {
            "@type": "EducationalOrganization",
            name: "Interpretation of Statutes",
            url: "https://sortmylawschool.com/subject/InterpretationofStatutes",
            description:
              "A thorough resource on the Interpretation of Statutes, exploring the principles and methods used to understand and apply statutory laws. This page covers key interpretive techniques such as literal, purposive, and contextual interpretation, as well as the role of judicial decisions in shaping statutory meaning. Designed for law students, legal practitioners, and scholars, this page provides essential insights into how statutes are interpreted and applied in legal contexts.",
          },
          {
            "@type": "EducationalOrganization",
            name: "Labor Law I",
            url: "https://sortmylawschool.com/subject/LaborLawI",
            description:
              "An introductory resource on Labor Law I, focusing on the foundational principles and regulations governing labor and employment relationships. This page covers essential topics such as employee rights, employer obligations, labor standards, and key legal frameworks affecting the workplace. Designed for law students, legal practitioners, and individuals seeking a fundamental understanding of labor law, this page provides a comprehensive overview of the core concepts in employment law.",
          },
          {
            "@type": "EducationalOrganization",
            name: "Minor Act and SC Rules",
            url: "https://sortmylawschool.com/subject/MinorActandSCRules",
            description: "A summary and analysis of Case Brief 4.",
          },
          {
            "@type": "EducationalOrganization",
            name: "Partnership",
            url: "https://sortmylawschool.com/subject/Partnership",
            description:
              "A comprehensive resource on the Minor Act and Supreme Court (SC) Rules, detailing the legal provisions concerning minors and the procedural rules governing the Supreme Court. This page covers key aspects of the Minor Act, including the protection and rights of minors, as well as the SC Rules that outline the procedures for cases heard by the Supreme Court. Designed for law students, legal practitioners, and individuals interested in these specific areas of law, this page provides essential insights into both legislative and procedural frameworks.",
          },
          {
            "@type": "EducationalOrganization",
            name: "Patent Law",
            url: "https://sortmylawschool.com/subject/PatentLaw",
            description:
              "A comprehensive resource on Patent Law, detailing the legal framework for protecting inventions and innovations. This page covers essential topics such as the criteria for patentability, the process of filing and obtaining patents, patent rights, enforcement mechanisms, and common legal issues related to patents. Designed for law students, legal professionals, inventors, and those interested in intellectual property, this page provides valuable insights into the complexities of patent protection and its impact on innovation.",
          },
          {
            "@type": "EducationalOrganization",
            name: "Private International Law",
            url: "https://sortmylawschool.com/subject/PrivateInternationalLaw",
            description:
              "A detailed resource on Private International Law, addressing the legal principles governing cross-border legal relationships between individuals and entities. This page covers key topics such as conflict of laws, jurisdictional issues, choice of law, and the recognition and enforcement of foreign judgments. Designed for law students, legal practitioners, and those interested in international legal issues, this page provides essential insights into the complexities of handling private international legal matters.",
          },
          {
            "@type": "EducationalOrganization",
            name: "Property Law",
            url: "https://sortmylawschool.com/subject/PropertyLaw",
            description:
              "A comprehensive resource on Property Law, covering the legal principles and regulations related to the ownership, use, and transfer of property. This page explores key topics such as real estate transactions, property rights, leases, land use, and property disputes. Designed for law students, legal practitioners, property owners, and those interested in real estate law, this page provides valuable insights into the legal aspects of property management and transactions.",
          },
          {
            "@type": "EducationalOrganization",
            name: "Public International Law",
            url: "https://sortmylawschool.com/subject/PublicInternationalLaw",
            description:
              "A comprehensive resource on Public International Law, detailing the legal principles and frameworks that govern the relationships between sovereign states and international organizations. This page covers essential topics such as international treaties, conventions, human rights law, state sovereignty, and mechanisms for resolving international disputes. Designed for law students, legal practitioners, diplomats, and anyone interested in global legal matters, this page provides valuable insights into the complexities of international legal interactions and governance.",
          },
          {
            "@type": "EducationalOrganization",
            name: "Rent Control and Slum Clearance",
            url: "https://sortmylawschool.com/subject/RentControlandSlumClearance",
            description:
              "A comprehensive resource on Rent Control and Slum Clearance, detailing the legal frameworks and regulations for managing rental prices and improving conditions in slum areas. This page covers key topics such as rent control policies, tenant rights, legal measures for slum clearance, urban redevelopment strategies, and the role of governmental and local authorities. Designed for law students, legal practitioners, housing advocates, and individuals interested in urban housing issues, this page provides valuable insights into the complexities of housing regulation and slum management.",
          },
          {
            "@type": "EducationalOrganization",
            name: "Sales of Goods Act",
            url: "https://sortmylawschool.com/subject/Salesofgoodsact",
            description:
              "A comprehensive resource on the Sales of Goods Act, outlining the legal framework governing the sale of goods in commercial transactions. This page covers key topics such as the formation of sales contracts, the rights and obligations of buyers and sellers, implied warranties and conditions, and remedies for breach of contract. Designed for law students, legal practitioners, business owners, and those interested in commercial law, this page provides valuable insights into the principles and regulations that underpin the sale of goods.",
          },
          {
            "@type": "EducationalOrganization",
            name: "Taxation Law",
            url: "https://sortmylawschool.com/subject/TaxationLaw",
            description:
              "A comprehensive resource on Taxation Law, detailing the legal principles and regulations governing tax obligations and compliance. This page covers key topics such as income tax, corporate tax, tax deductions, exemptions, and procedures for resolving tax disputes. Designed for law students, tax professionals, business owners, and individuals interested in tax regulations, this page provides valuable insights into the complexities of tax law and its impact on individuals and businesses.",
          },
          {
            "@type": "EducationalOrganization",
            name: "Trademark Law",
            url: "https://sortmylawschool.com/subject/Trademarklaw",
            description:
              "A comprehensive resource on Trademark Law, detailing the legal principles and procedures for protecting trademarks and brand identities. This page covers essential topics such as trademark registration, the rights and responsibilities of trademark holders, enforcement of trademark rights, and resolution of trademark disputes. Designed for law students, legal practitioners, brand owners, and those interested in intellectual property, this page provides valuable insights into the complexities of trademark protection and its role in safeguarding brand assets.",
          },
        ],
      }),
    },
  ],
});
</script>

<style scoped>
/* Add your scoped styles here if needed */
</style>
