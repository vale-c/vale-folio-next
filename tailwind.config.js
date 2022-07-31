const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto Slab', ...defaultTheme.fontFamily.serif],
        lato: ['Lato', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
