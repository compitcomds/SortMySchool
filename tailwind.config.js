/** @type {import('tailwindcss').Config} */
export default {
  content: ["*", './node_modules/preline/preline.js',],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),require('preline/plugin')],
  daisyui: {
    themes: ["light"]
  },
}

