const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {
      fontFamily: {
        roboto: ['Roboto Slab', ...defaultTheme.fontFamily.serif],
        lato: ['Lato', ...defaultTheme.fontFamily.sans]
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: 'white'
          }
        }
      })
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')]
};
