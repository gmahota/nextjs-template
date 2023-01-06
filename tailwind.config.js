/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/**/*.tsx',
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})
  