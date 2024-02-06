/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./dist/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./*.{html,js}"],
  theme: {
    colors: {
      redd: 'hsl(5, 85%, 63%)',
      softO: 'hsl(35, 77%, 62%)',
      darkBlu: 'hsl(240, 100%, 5%)',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
],
}

