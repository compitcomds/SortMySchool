/** @type {import('tailwindcss').Config} */
export default {
  content: ["*", "./node_modules/preline/preline.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("preline/plugin"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),

  ],
  daisyui: {
    themes: ["light"],
  },
};
