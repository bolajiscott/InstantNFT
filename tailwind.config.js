/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color: {
        primary: '#27187e',
        secondary: "#ff8600ff",
        tertiary: "#758bfdff",
        light: "#f1f2f6ff",
        "blue-purple": "#aeb8feff"
      }
    },
  },
  plugins: [],
}
