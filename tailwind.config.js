/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        block:'6px 6px 0px 2px rgb(0 0 0 / 75%);'
      }
    },
  },
  plugins: [],
}

