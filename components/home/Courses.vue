<template>
    <div class="w-full py-16 bg-[#fef8f3]">
        <div class=" mx-auto px-4">
            <!-- Header Section -->
            <div class="flex items-center justify-between mb-8">
                <h2 class=" text-xl font-semibold text-gray-700 m-4 flex items-center gap-6">
                    <p class="text-2xl">Our Popular Courses</p>
                    <div class="text-black mt-1 bg-black h-[0.7px] lg:w-56"></div>
                </h2>
                <a href="#" class="text-green-500 flex items-center font-medium hover:underline">
                    See All <span class="ml-1">→</span>
                </a>
            </div>

            <!-- Course Cards Section -->
            <div data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="1000" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="(course, index) in courses" :key="index"
                    class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                    <!-- Course Title -->
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ course.title }}</h3>

                    <!-- Avatars and Rating -->
                    <div class="flex items-center mb-4">
                        <div class="flex -space-x-2">
                            <img v-for="(avatar, i) in course.avatars" :key="i" :src="avatar"
                                class="w-6 h-6 rounded-full border-2 border-white" alt="Avatar" />
                        </div>
                        <p class="ml-3 text-gray-500">+{{ course.students }} students</p>
                        <p class="ml-auto text-yellow-500 font-semibold">{{ course.rating }} ⭐</p>
                    </div>

                    <!-- Price and Join Button -->
                    <div class="flex items-center justify-between">
                        <p class="text-xl font-semibold text-green-600">${{ course.price }}</p>
                        <button class="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600">
                            Join Now
                        </button>
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
                    title: "UI UX Design Course",
                    students: "106,458",
                    rating: 4.8,
                    price: "345.99",
                    avatars: [
                        "https://placehold.co/24x24",
                        "https://placehold.co/24x24",
                        "https://placehold.co/24x24"
                    ]
                },
                {
                    title: "Python Programming",
                    students: "152,678",
                    rating: 4.7,
                    price: "125.99",
                    avatars: [
                        "https://placehold.co/24x24",
                        "https://placehold.co/24x24",
                        "https://placehold.co/24x24"
                    ]
                },
                {
                    title: "Product Design Course",
                    students: "306,126",
                    rating: 4.2,
                    price: "99.99",
                    avatars: [
                        "https://placehold.co/24x24",
                        "https://placehold.co/24x24",
                        "https://placehold.co/24x24"
                    ]
                },
                {
                    title: "UI UX Design Course",
                    students: "106,458",
                    rating: 4.8,
                    price: "345.99",
                    avatars: [
                        "https://placehold.co/24x24",
                        "https://placehold.co/24x24",
                        "https://placehold.co/24x24"
                    ]
                },
            ]
        };
    }
};
</script>

<style>
/* Optional custom styling */
</style>