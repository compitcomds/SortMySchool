<template>
  <div class="text-white mx-auto mb-20 md:mb-40">
    <h2
      class="mt-6 text-3xl md:text-5xl text-black text-center lg:pb-14 pb-5 font-bold"
    >
      Knowledge Partners : Sort My Law School
    </h2>
    <div
      class="flex gap-4 items-center max-w-[100vw] overflow-x-auto partner-cards"
    >
      <div
        class="relative min-w-full md:min-w-[33%] group transform transition-transform border rounded-2xl duration-300 translate-y-0 lg:-translate-y-0"
        v-for="card in cards"
      >
        <img
          :src="card.image"
          :alt="card.heading"
          class="w-full rounded-2xl shadow-lg"
        />
        <div class="hidden lg:block">
          <div
            class="absolute inset-0 px-5 bg-black bg-opacity-75 rounded-2xl top-0 flex flex-col space-y-8 py-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p class="text-lg w-full">
              {{ card.heading }}
            </p>
            <ul class="text-white list-disc list-inside">
              <li
                class="text-sm z-50 leading-[1.9]"
                v-for="point in card.points"
              >
                {{ point }}
              </li>
            </ul>
            <div class="absolute bottom-10 flex flex-row gap-2">
              <template v-for="icon in card.icons">
                <a
                  v-if="icon.iconName === 'instagram'"
                  :href="icon.href"
                  class="w-9 z-10 h-9 rounded-full bg-gray-600 hover:bg-[#d9327d] flex justify-center items-center"
                >
                  <svg
                    class="w-[1.25rem] h-[1.125rem] text-white"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663ZM9.97414 4.22935C9.97408 4.39417 10.0236 4.55531 10.1165 4.69239C10.2093 4.82946 10.3413 4.93633 10.4958 4.99946C10.6503 5.06259 10.8203 5.07916 10.9844 5.04707C11.1484 5.01498 11.2991 4.93568 11.4174 4.81918C11.5357 4.70268 11.6163 4.55423 11.649 4.39259C11.6817 4.23095 11.665 4.06339 11.6011 3.91109C11.5371 3.7588 11.4288 3.6286 11.2898 3.53698C11.1508 3.44536 10.9873 3.39642 10.8201 3.39635H10.8197C10.5955 3.39646 10.3806 3.48424 10.222 3.64043C10.0635 3.79661 9.97434 4.00843 9.97414 4.22935ZM4.21142 13.5892C3.52442 13.5584 3.15101 13.4456 2.90286 13.3504C2.57387 13.2241 2.33914 13.0738 2.09235 12.8309C1.84555 12.588 1.69278 12.3569 1.56527 12.0327C1.46854 11.7882 1.3541 11.4201 1.32287 10.7431C1.28871 10.0111 1.28189 9.79119 1.28189 7.93669C1.28189 6.08219 1.28927 5.86291 1.32287 5.1303C1.35416 4.45324 1.46944 4.08585 1.56527 3.84069C1.69335 3.51647 1.84589 3.28513 2.09235 3.04191C2.3388 2.79869 2.57331 2.64813 2.90286 2.52247C3.1509 2.42713 3.52442 2.31435 4.21142 2.28358C4.95417 2.24991 5.17729 2.24319 7.0582 2.24319C8.9391 2.24319 9.16244 2.25047 9.90582 2.28358C10.5928 2.31441 10.9656 2.42802 11.2144 2.52247C11.5434 2.64813 11.7781 2.79902 12.0249 3.04191C12.2717 3.2848 12.4239 3.51647 12.552 3.84069C12.6487 4.08513 12.7631 4.45324 12.7944 5.1303C12.8285 5.86291 12.8354 6.08219 12.8354 7.93669C12.8354 9.79119 12.8285 10.0105 12.7944 10.7431C12.7631 11.4201 12.6481 11.7881 12.552 12.0327C12.4239 12.3569 12.2714 12.5882 12.0249 12.8309C11.7784 13.0736 11.5434 13.2241 11.2144 13.3504C10.9663 13.4457 10.5928 13.5585 9.90582 13.5892C9.16306 13.6229 8.93994 13.6296 7.0582 13.6296C5.17645 13.6296 4.95395 13.6229 4.21142 13.5892ZM4.15307 1.03424C3.40294 1.06791 2.89035 1.18513 2.4427 1.3568C1.9791 1.53408 1.58663 1.77191 1.19446 2.1578C0.802277 2.54369 0.56157 2.93108 0.381687 3.38797C0.207498 3.82941 0.0885535 4.3343 0.0543922 5.07358C0.0196672 5.81402 0.0117188 6.05074 0.0117188 7.93663C0.0117188 9.82252 0.0196672 10.0592 0.0543922 10.7997C0.0885535 11.539 0.207498 12.0439 0.381687 12.4853C0.56157 12.9419 0.802334 13.3297 1.19446 13.7155C1.58658 14.1012 1.9791 14.3387 2.4427 14.5165C2.89119 14.6881 3.40294 14.8054 4.15307 14.839C4.90479 14.8727 5.1446 14.8811 7.0582 14.8811C8.9718 14.8811 9.212 14.8732 9.96332 14.839C10.7135 14.8054 11.2258 14.6881 11.6737 14.5165C12.137 14.3387 12.5298 14.1014 12.9219 13.7155C13.3141 13.3296 13.5543 12.9419 13.7347 12.4853C13.9089 12.0439 14.0284 11.539 14.062 10.7997C14.0962 10.0587 14.1041 9.82252 14.1041 7.93663C14.1041 6.05074 14.0962 5.81402 14.062 5.07358C14.0278 4.33424 13.9089 3.82913 13.7347 3.38797C13.5543 2.93135 13.3135 2.5443 12.9219 2.1578C12.5304 1.7713 12.137 1.53408 11.6743 1.3568C11.2258 1.18513 10.7135 1.06735 9.96388 1.03424C9.21256 1.00058 8.97236 0.992188 7.05876 0.992188C5.14516 0.992188 4.90479 1.00002 4.15307 1.03424Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  v-if="icon.iconName === 'linkedin'"
                  :href="icon.href"
                  class="z-10 w-9 h-9 rounded-full bg-gray-600 hover:bg-[#0a66c2] flex justify-center items-center"
                >
                  <svg
                    class="w-[1rem] h-[1rem] text-white"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  :href="icon.href"
                  v-if="icon.iconName === 'ca'"
                  class="w-9 h-9 z-10 rounded-full bg-gray-600 hover:bg-[#0a66c2] flex justify-center items-center"
                >
                  <NuxtImg
                    loading="lazy"
                    class="w-[1.7rem] h-[1.7rem] rounded-full text-white lg:grayscale lg:hover:grayscale-0"
                    src="/assets/ca-01.png"
                    alt="CA Shruti Sharma | SortMyLawSchool Chartered Accountant Logo"
                  />
                </a>
              </template>
            </div>
          </div>
        </div>
        <div
          class="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-100 lg:group-hover:opacity-0 flex justify-center items-center transition-opacity duration-300"
        >
          <p
            class="text-black min-w-max font-semibold bg-white rounded-full px-2 py-2 lg:py-4 text-center text-xs md:text-sm"
          >
            {{ card.heading }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import parthImage from "~/assets/parth.png";
import harshVardhanImage from "~/assets/160.png";
import shrutiSharmaImage from "~/assets/18.png";
import priyamAgarwalImage from "~/assets/17.png";
import nehaGoyalImage from "~/assets/neha-goyal.webp";
// iconName = linkedin, instagram, ca

const cards = [
  {
    heading: "Parth Jain (Co-Founder)",
    subHeading: "",
    image: parthImage,
    points: [
      "AIR : 53, DU LLB Entrance",
      "LLB - Campus Law Center '23",
      "LLM - London School of Economics '25",
    ],
    icons: [
      {
        href: "https://www.instagram.com/legalstartupwala?igsh=Zmo3bDlhZzFzcDVk",
        iconName: "instagram",
      },
      {
        href: "https://www.linkedin.com/in/parthjain98?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        iconName: "linkedin",
      },
    ],
  },

  {
    heading: "Harsh Vardhan Bhati",
    subHeading: "",
    image: harshVardhanImage,
    points: [
      "Assistant Prof, OP Jindal University (JGU)",
      "LLM - Lewis & Clark Law School, USA",
    ],
    icons: [
      {
        href: "https://www.linkedin.com/in/harshvardhanbhati?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        iconName: "linkedin",
      },
    ],
  },

  {
    heading: "Shruti Sharma",
    subHeading: "",
    image: shrutiSharmaImage,
    points: ["Chartered Accountant", "UGC - NET Qualified"],
    icons: [
      {
        href: "#",
        iconName: "ca",
      },
    ],
  },

  {
    heading: "Priyam Agarwal",
    subHeading: "",
    image: priyamAgarwalImage,
    points: [
      "BTech + LL.B",
      "AIR : 13, DU LLB Entrance",
      "Law Clerk cum RA to HMJ, Sandeep Mehta, Supreme Court of India",
    ],
    icons: [
      {
        href: "https://www.linkedin.com/in/priyam-agarwal-12505b154?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        iconName: "linkedin",
      },
    ],
  },

  {
    heading: "Neha Goyal",
    subHeading: "",
    image: nehaGoyalImage,
    points: [
      "Editor in chief",
      "LSAT India - 98 Percentile",
      "BALLB Hons. OP Jindal University' 25",
    ],
    icons: [
      {
        href: "https://www.linkedin.com/in/neha-g-55799a12a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        iconName: "linkedin",
      },
    ],
  },

  {
    heading: "Harsh Vardhan Bhati",
    subHeading: "",
    image: harshVardhanImage,
    points: [
      "Assistant Prof, OP Jindal University (JGU)",
      "LLM - Lewis & Clark Law School, USA",
    ],
    icons: [
      {
        href: "https://www.linkedin.com/in/harshvardhanbhati?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        iconName: "linkedin",
      },
    ],
  },
];
</script>

<style scoped>
body {
  font-family: "Inter", sans-serif;
}
.partner-cards {
  scrollbar-width: none;
}
.partner-cards::-webkit-scrollbar {
  display: none; /* Hides scrollbar */
}
</style>
