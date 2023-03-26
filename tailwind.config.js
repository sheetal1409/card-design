/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'card-desktop': "url('./images/bg-main-desktop.png')",
        'card-mobile': "url('./images/bg-main-mobile.png')"
      },
      fontSize: {
        'sm': '0.5em'
      }
    },
  },
  plugins: [],
}