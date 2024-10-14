/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#77CDFF",
        "dark-blue": "#0D92F4",
        "light-red": "#F95454",
        "dark-red": "#C62E2E",
      }
    },
  },
  plugins: [],
}

