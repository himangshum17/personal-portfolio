const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        customgray: '#071340',
        'customgray-light': '#616B8F',
        primary: {
          DEFAULT: '#9437F0',
          light: '#E1C7FB',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
