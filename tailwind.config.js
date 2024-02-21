/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'main-pink': '#FF6079',
      },
      backgroundColor: {
        'main-pink': '#FF6079',
      },
    },
  },
  plugins: [],
}

