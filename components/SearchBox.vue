<template>
  <div id="search-modal"
    class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden size-full fixed top-0 start-0 z-[80] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none bg-black bg-opacity-50">
    <div class="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
      <div
        class="flex flex-col shadow-lg rounded-2xl w-[90vw] lg:w-[50vw] bg-white overflow-hidden pointer-events-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1 transition-all duration-300">
        <div class="flex justify-between items-center py-4 px-6 border-b border-gray-300">
          <h3 class="text-lg font-semibold text-gray-700">Search</h3>
          <button
            type="button"
            id="search-modal-close-button"
            class="flex justify-center items-center size-10 text-sm font-semibold rounded-full border border-transparent text-gray-900 disabled:opacity-50 disabled:pointer-events-none"
            data-hs-overlay="#search-modal"
          >
            <span class="sr-only">Close</span>
            <svg
              class="flex-shrink-0 size-5"
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
        <div class="px-6 py-4 overflow-y-auto">
          <label for="search-modal-input" class="sr-only">Search input</label>
          <div class="flex gap-3 items-center mb-5  top-0 bg-white z-10">
            <input type="text" id="search-modal-input" name="search-modal-input"
              class="py-3 px-4 w-full border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
              v-model.trim="search" @input="searchQuery" placeholder="Search your case here..." />
            <nuxt-link :to="`/search/${search}`" @click="closeModal"
              class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-search">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </nuxt-link>
          </div>
          <ul class="flex flex-col divide-y divide-gray-200">
            <li class="flex items-center text-sm text-gray-700 hover:bg-gray-100 px-4 py-2 transition-all"
              v-for="row in searchResults" :key="row.id">
              <nuxt-link class="w-full h-full cursor-pointer py-2 px-4" @click="closeModal"
                :to="`/subject/${row.subject}/${row?.slug || row.id}`">
                {{ row.title }}
              </nuxt-link>
            </li>
          </ul>
          <p v-if="searchResults.length === 0 && search.length > 3" class="text-gray-500 text-center mt-4">
            No results found
          </p>
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

<style scoped>
#search-modal {
  background: rgba(0, 0, 0, 0.75); /* Darker background overlay */
}

.sm\:max-w-lg {
  max-width: 600px; /* Wider modal for larger screens */
}

.modal-container {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15); /* Subtle shadow */
  border-radius: 15px; /* Softer, rounded corners */
  overflow: hidden;
  transition: transform 0.3s ease;
}

.modal-container:hover {
  transform: translateY(-2px); /* Slight lift on hover */
}

.modal-header {
  background-color: #f3f4f6; /* Soft grey background */
  color: #333; /* Darker header text */
  border-bottom: 1px solid #e5e7eb;
}

.modal-header h3 {
  font-size: 1.25rem;
  color: #4a5568; /* Neutral grey for a professional tone */
}

#search-modal-close-button {
  color: #cbd5e1;
  transition: color 0.3s ease;
}

#search-modal-close-button:hover {
  color: #4a5568; /* Dark grey on hover */
}

#search-modal-input {
  padding: 12px 16px;
  font-size: 0.9rem;
  border: 1px solid #e5e7eb; /* Light border */
  border-radius: 8px;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}

#search-modal-input:focus {
  border-color: #3b82f6; /* Blue border on focus */
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3); /* Blue focus shadow */
}

.search-button {
  background-color: #3b82f6; /* Vibrant blue */
  color: #fff;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.2s;
}

.search-button:hover {
  background-color: #2563eb; /* Slightly darker blue */
  transform: scale(1.05); /* Small scale effect */
}

.results-list li {
  padding: 10px 16px;
  color: #4a5568;
  transition: background-color 0.3s ease;
}

.results-list li:hover {
  background-color: #f3f4f6;
}

.no-results {
  font-size: 1rem;
  color: #9ca3af; /* Muted grey */
  padding-top: 16px;
}

/* Optional animation for modal entrance */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-container {
  animation: fadeInUp 0.4s ease-out;
}
</style>

