<template>
  <!-- Hire Us -->
  <div
    class="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-slate-50 rounded-lg shadow-lg border-2 my-5"
  >
    <div class="max-w-3xl mx-auto">
      <div class="text-center">
        <h1 class="text-xl md:text-3xl font-bold text-gray-800">
          NEED A CASE BRIEF MADE ON REQUEST?
        </h1>
      </div>

      <div class="mt-12">
        <!-- Form -->
        <form @submit.prevent="submitForm">
          <div class="grid gap-4 lg:gap-6">
            <div>
              <label
                for="about-us-name"
                class="block mb-2 text-sm text-gray-700 font-medium"
                >Name*</label
              >
              <input
                :disabled="isSubmitting"
                type="text"
                v-model.trim="name"
                name="about-us-name"
                id="about-us-name"
                class="py-3 px-4 border-2 block w-full border-gray-200 rounded-lg text-sm focus:outline-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>

            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div class="col-span-1 flex flex-col gap-4 h-full">
                <div>
                  <label
                    for="about-us-subject"
                    class="block mb-2 text-sm text-gray-700 font-medium"
                    >College Name*</label
                  >
                  <input
                    :disabled="isSubmitting"
                    type="text"
                    v-model.trim="collegeName"
                    name="about-us-subject"
                    id="about-us-subject"
                    class="py-3 px-4 border-2 block w-full border-gray-200 rounded-lg text-sm focus:outline-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  />
                </div>

                <div>
                  <label
                    for="about-us-name-of-case-with-citation"
                    class="block mb-2 text-sm text-gray-700 font-medium"
                    >Name of the case with citation*</label
                  >
                  <input
                    :disabled="isSubmitting"
                    type="text"
                    v-model.trim="nameOfCaseWithCitation"
                    name="about-us-name-of-case-with-citation"
                    id="about-us-name-of-case-with-citation"
                    class="py-3 px-4 border-2 block w-full border-gray-200 rounded-lg text-sm focus:outline-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  />
                </div>
              </div>

              <div class="col-span-1 flex flex-col h-full">
                <label
                  for="about-us-when-do-you-need-it"
                  class="block mb-2 text-sm text-gray-700 font-medium"
                  >Your Email*</label
                >
                <textarea
                  :disabled="isSubmitting"
                  type="email"
                  v-model.trim="yourEmail"
                  name="about-us-when-do-you-need-it"
                  id="about-us-when-do-you-need-it"
                  class="py-3 px-4 border-2 block h-full w-full border-gray-200 rounded-lg text-sm focus:outline-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                ></textarea>
              </div>
            </div>
            <!-- End Grid -->

            <div>
              <label
                for="about-us-additional-comments"
                class="block mb-2 text-sm text-gray-700 font-medium"
                >Additional comments</label
              >
              <textarea
                :disabled="isSubmitting"
                id="about-us-additional-comments"
                v-model.trim="additionalComments"
                name="about-us-additional-comments"
                rows="4"
                class="py-3 px-4 border-2 block w-full border-gray-200 rounded-lg text-sm focus:outline-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              ></textarea>
            </div>
          </div>
          <!-- End Grid -->

          <div class="mt-6 grid">
            <button
              :disabled="isSubmitting"
              type="submit"
              class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm md:text-lg font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              <template v-if="isSubmitting">Submitting the form...</template>
              <template v-else>Send inquiry</template>
            </button>
          </div>
        </form>
        <!-- End Form -->
      </div>
    </div>
  </div>
  <!-- End Hire Us -->

  <!-- Start toast -->
  <div
    class="fixed bottom-0 start-1/2 -translate-x-1/2 transition-all"
    :class="{ 'translate-y-full': !isToastVisible, 'mb-5': isToastVisible }"
  >
    <div
      class="w-80 md:max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg"
      role="alert"
    >
      <div class="flex p-4">
        <div class="flex-shrink-0">
          <svg
            v-if="!isError"
            class="flex-shrink-0 size-4 text-teal-500 mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
            ></path>
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="flex-shrink-0 size-4 text-red-500 mt-0.5 lucide"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
          </svg>
        </div>
        <div class="ms-3 flex">
          <p class="text-sm text-gray-700">
            <template v-if="isError">{{ errorMessage }}</template>
            <template v-else
              >Your form has been successfully submitted.</template
            >
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- End toast -->
</template>

<script setup>
import { submitAboutUsForm } from "~/utils/appwrite";

const name = useState("name", () => "");
const collegeName = useState("collegeName", () => "");
const yourEmail = useState("yourEmail", () => "");
const nameOfCaseWithCitation = useState("nameOfCaseWithCitation", () => "");
const additionalComments = useState("additionalComments", () => "");
const isSubmitting = useState("isSubmitting", () => false);
const isToastVisible = useState("isToastVisible", () => false);
const isError = useState("isError", () => false);
const errorMessage = useState(
  "errorMessage",
  () => "Error while submitting the form! Please try again later."
);

defineOgImageComponent("NuxtSeo", {
  siteName: "SortMyLawSchool",
  description: "Read more...",
  siteLogo: "https://sortmylawschool.com/favicon.png",
  colorMode: "dark",
});

useSeoMeta({
  title: "SortMyLawSchool | Contact Us",
  description: "Contact Us",
  ogTitle: "SortMyLawSchool | Contact Us",
  ogDescription: "Contact Us",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: `${useRuntimeConfig().public.siteUrl}/contact`,
    },
  ],
});

async function submitForm() {
  try {
    if (
      !name.value ||
      !collegeName.value ||
      !yourEmail.value ||
      !nameOfCaseWithCitation.value
    ) {
      throw Error("Please fill all the required fields");
    }
    isSubmitting.value = true;
    isError.value = false;
    errorMessage.value = "";
    await submitAboutUsForm(
      name.value,
      collegeName.value,
      yourEmail.value,
      nameOfCaseWithCitation.value,
      additionalComments.value
    );
    clearForm();
  } catch (error) {
    isError.value = true;
    errorMessage.value = error.message;
    console.error("Error submitting form:", error);
  } finally {
    showToast();
    isSubmitting.value = false;
  }
}
function clearForm() {
  name.value = "";
  collegeName.value = "";
  yourEmail.value = "";
  nameOfCaseWithCitation.value = "";
  additionalComments.value = "";
}
function showToast() {
  isToastVisible.value = true;
  setTimeout(() => {
    isToastVisible.value = false;
  }, 3000);
}
</script>

<style lang="scss" scoped></style>
