/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'nj': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
      },
    },
  },
  plugins: [],
}

