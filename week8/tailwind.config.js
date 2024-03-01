/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-magenta': {
          50: '#ffefff',
          100: '#ffdfff',
          200: '#ffcfff',
          300: '#ffbfff',
          400: '#ffaeff',
          500: '#ff9cff',
          600: '#ff89ff',
          700: '#ff75ff',
          800: '#ff5eff',
          900: '#ff41ff',
          950: '#ff00ff', // This is the #FF00FF shade
        },
      },
    },
  },
  plugins: [],
}

