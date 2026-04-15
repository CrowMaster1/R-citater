/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dk-red':      '#C60C30',
        'rad-purple':  '#5B2D8E',
        'rad-teal':    '#0D9488',
        'rad-purple-lt': '#EDE9FE',
        'rad-teal-lt': '#CCFBF1',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
