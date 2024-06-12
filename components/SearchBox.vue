<template>
  <div
    id="search-modal"
    class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden size-full fixed top-0 start-0 z-[80] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none"
  >
    <div class="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
      <div
        class="flex flex-col bg-white border shadow-sm rounded-xl w-[90vw] h-[70vh] md:w-[50vw] md:h-[50vh] overflow-auto pointer-events-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1"
      >
        <div class="flex justify-between items-center py-3 px-4">
          <h3 class="font-bold text-gray-800">Search SortMyLawSchool</h3>
          <button
            type="button"
            id="search-modal-close-button"
            class="flex justify-center items-center size-10 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            data-hs-overlay="#search-modal"
          >
            <span class="sr-only">Close</span>
            <svg
              class="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <div class="p-4 overflow-y-auto">
          <div>
            <label for="hs-trailing-button-add-on-with-icon" class="sr-only"
              >Label</label
            >
            <div class="flex rounded-lg shadow-sm mb-5">
              <input
                type="text"
                id="hs-trailing-button-add-on-with-icon"
                name="hs-trailing-button-add-on-with-icon"
                class="py-3 px-4 block w-full xl:min-w-[300px] lg:min-w-[350px] border border-gray-200 rounded-s-lg text-sm focus:z-10 focus:border-sky-500 focus:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none"
                v-model.trim="search"
                @input="searchQuery"
                placeholder="Enter your search query..."
              />
              <nuxt-link
                :to="`/search/${search}`"
                @click="closeModal"
                class="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                <svg
                  class="flex-shrink-0 size-4"
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
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </nuxt-link>
            </div>
            <ul>
              <li
                class="flex items-center w-full text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                v-for="row in searchResults"
              >
                <nuxt-link
                  class="block w-full h-full cursor-pointer py-2 px-4"
                  @click="closeModal"
                  :to="`/subject/${row.subject}/${row?.slug || row.id}`"
                  >{{ row.title }}</nuxt-link
                >
              </li>
            </ul>
            <p v-if="searchResults.length === 0 && search.length > 3">
              No results found
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const search = useState("search", () => "");
const searchResults = useState("searchResults", () => []);

function storeCurrentDate() {
  const currentDate = new Date().toISOString(); // Get the current date in ISO format
  localStorage.setItem("lastSearchDataFetchDate", currentDate); // Store the current date in localStorage
}

function checkIfSevenDaysPassed() {
  const lastUpdateDate = localStorage.getItem("lastSearchDataFetchDate");
  if (!lastUpdateDate) {
    return true; // If there is no stored date, consider 7 days have passed
  }

  const sevenDaysInMillis = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
  const currentDate = new Date().getTime();
  const storedDate = new Date(lastUpdateDate).getTime();
  const difference = currentDate - storedDate;

  return difference >= sevenDaysInMillis;
}

const loadData = async () => {
  try {
    if (!checkIfSevenDaysPassed() && (await db.blogs.count()) !== 0) {
      return;
    }
    const blogs = await getBlogDataForSearch();

    blogs.documents.forEach((blog) => {
      db.blogs.add({
        id: blog.$id,
        slug: blog.slug,
        title: blog.title,
        subject: blog?.subject?.name || "other",
      });
    });
    storeCurrentDate();
  } catch (error) {
    console.error(error.message);
  }
};

const closeModal = () => {
  document.getElementById("search-modal-close-button").click();
  search.value = "";
  searchResults.value = [];
};

onMounted(() => {
  loadData();
  window.addEventListener("keydown", function (evt) {
    if (evt.code === "Backslash") {
      const overlay = HSOverlay.getInstance(
        '[data-hs-overlay="#search-modal"]',
        true
      );
      const combobox = HSComboBox.getInstance(
        "#search-modal [data-hs-combo-box]",
        true
      );

      if (overlay.element && overlay.element.overlay.classList.contains("open"))
        return false;

      overlay.element.open();
      combobox.element.setCurrent();
    }
  });
});

const searchQuery = async (event) => {
  const searchText = search.value;
  if (searchText.length < 3) return;
  searchResults.value = await db.blogs
    .filter((blog) =>
      blog.title.toLowerCase().includes(searchText.toLowerCase())
    )
    .toArray();
};
</script>

<style scoped></style>
