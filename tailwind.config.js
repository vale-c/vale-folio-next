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
        telex: ['Telex', ...defaultTheme.fontFamily.sans]
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: 'white'
          }
        }
      }),
      animation: {
        'ribbon_animation': 'ribbon-animation__slideshow 30s infinite linear',
      },
      keyframes: {
        'ribbon-animation__slideshow': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-40%)' },
        }
      }
    },  
  },
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')]
};
