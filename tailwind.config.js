/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#1F2937", // grey
          DEFAULT: "#28282B", // matte black
          dark: "#000000", // Dark black
        },
        secondary: {
          light: "#d6e6f2", // Light blue-gray
          DEFAULT: "#aad1e6", // Default blue-gray
          dark: "#91b5cc", // Dark blue-gray
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
