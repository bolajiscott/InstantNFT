/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#27187E", //persian indigo
        secondary: "#FF8600", //dark orange
        tertiary: "#758BFD", //cornflower blue
        purple: "#AEB8FE", //maximum blue purple
        light: "#F1F2F6" //cultured
      }
    },
  },
  plugins: [],
};
