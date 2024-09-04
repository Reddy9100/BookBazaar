/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
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

