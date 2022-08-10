/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'laptop': '1024px',
    },
    colors: {
      black: "#000",
      white: "#fff",
      purple: "#664de5",
      gray: "#8993A5",
      placeholder: "#BAC2D1",
      extend: {},
    },
    fontFamily: {
      main: ['Helvetica', 'Arial', 'Sans-Serif'],
    },
    plugins: [],
  },
}