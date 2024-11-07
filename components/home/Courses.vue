<template>
    <div class="w-full py-8 bg-[#fef1e1]">
        <div class="mx-auto px-4">
            <!-- Header Section -->
            <div class="flex items-center justify-between">
                <h2 class="w-full font-semibold text-gray-700 mb-4 flex items-center">
                    <p class="flex items-center justify-between">
                        <p class="text-2xl">Our Popular Law Courses</p>
                        <svg id="fi_13554816" class="w-60 h-20" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m23.939 12-3.454-1.995v1.653l-20.424.342 20.424.342v1.653z"></path></svg>
                    </p>
                </h2>
                <div class="w-full text-[#0ba083] flex items-center justify-end mb-4 gap-2">
                    <a href="/subject" class="hover:font-semibold">See All</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                </div>
            </div>

            <!-- Course Cards Section -->
            <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="(course, index) in courses" :key="index" class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                    <!-- Course Title -->
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ course.title }}</h3>

                    <!-- Avatars and Rating -->
                    <div class="flex items-center mb-4">
                        <div class="flex -space-x-2">
                            <img v-for="(avatar, i) in course.avatars" :key="i" :src="avatar" class="w-6 h-6 rounded-full border-2 border-white" alt="Avatar" />
                        </div>
                        <!-- <p class="ml-3 text-gray-500">+{{ course.students }} students</p> -->
                        <p class="ml-auto text-yellow-500 font-semibold flex items-center gap-2">{{ course.rating }} <img class="w-6 h-6" src="assets\images\star.svg" alt=""></p>
                    </div>

                    <!-- Price and Join Button -->
                    <div class="flex items-center justify-between">
                        <p class="text-lg font-semibold text-blue-500 flex items-center justify-between gap-2">
                            <img class="w-5 h-5" src="assets\images\like.svg" alt=""> {{ course.views }}
                        </p>
                        <!-- Dynamic Explore Now Link -->
                        <a :href="course.link" class="bg-[#0ba083] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#4cb9a3]">
                            Explore Now
                        </a>
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
            courses: [
                {
                    title: "Administrative Law",
                    students: "106,458",
                    rating: 4.8,
                    views: "345k",
                    avatars: [
                        "https://i.pravatar.cc/150?img=14",
                        "https://i.pravatar.cc/150?img=3",
                        "https://i.pravatar.cc/150?img=4",
                        "https://i.pravatar.cc/150?img=5",
                        "https://i.pravatar.cc/150?img=6",
                    ],
                    link: "/subject/AdministrativeLaw" // Dynamic link for this course
                },
                {
                    title: "Code of Civil Procedure",
                    students: "152,678",
                    rating: 4.7,
                    views: "125k",
                    avatars: [
                        "https://i.pravatar.cc/150?img=9",
                        "https://i.pravatar.cc/150?img=8",
                        "https://i.pravatar.cc/150?img=7",
                        "https://i.pravatar.cc/150?img=1",
                        "https://i.pravatar.cc/150?img=2",
                    ],
                    link: "/subject/CodeOfCivilProcedure" // Dynamic link for this course
                },
                {
                    title: "Partnership Act",
                    students: "306,126",
                    rating: 4.2,
                    views: "99k",
                    avatars: [
                        "https://i.pravatar.cc/150?img=3",
                        "https://i.pravatar.cc/150?img=4",
                        "https://i.pravatar.cc/150?img=5",
                        "https://i.pravatar.cc/150?img=6",
                        "https://i.pravatar.cc/150?img=7",
                    ],
                    link: "/subject/Partnership" // Dynamic link for this course
                },
                {
                    title: "TaxationLaw",
                    students: "106,458",
                    rating: 4.8,
                    views: "345k",
                    avatars: [
                        "https://i.pravatar.cc/150?img=13",
                        "https://i.pravatar.cc/150?img=15",
                        "https://i.pravatar.cc/150?img=16",
                        "https://i.pravatar.cc/150?img=14",
                        "https://i.pravatar.cc/150?img=11",
                    ],
                    link: "/subject/taxation-law" // Dynamic link for this course
                }
            ]
        };
    }
};
</script>

<style scoped>
/* Optional custom styling */
</style>
