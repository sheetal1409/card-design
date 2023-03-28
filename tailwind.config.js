/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'card-desktop': "url('./images/bg-main-desktop.png')",
        'card-mobile': "url('./images/bg-main-mobile.png')",
        'card-front-design': "url('./images/bg-card-front.png')",
        'card-back-design': "url('./images/bg-card-back.png')",
      },
      fontSize: {
        'sm': '0.5em'
      },
      colors: {
        'left': '#6448fe',
        'right': '#600594',
        'error': 'hsl(0, 100%, 66%)'
      }
    },
  },
  plugins: [],
}