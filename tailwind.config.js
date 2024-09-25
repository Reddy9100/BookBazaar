/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        'spotify-primary': '#1DB954', 
        'spotify-secondary': '#191414', 
        'spotify-accent': '#1ED760', 
      },
    },
  },
  plugins: [ function ({ addUtilities }) {
    addUtilities({
      '.scrollbar-hide': {
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '-ms-overflow-style': 'none', /* IE 10+ */
        'scrollbar-width': 'none', /* Firefox */
      },
    });
    },
],
}

