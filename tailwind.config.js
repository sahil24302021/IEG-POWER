/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iegGreen: "#2ECC71",
        iegOrange: "#F39C12",
      },
    },
  },
  plugins: [],
}
