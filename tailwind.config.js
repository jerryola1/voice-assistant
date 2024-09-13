/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'primary-green': {
          500: '#45a049',
          600: '#4CAF50',
          700: '#3d8b40',
        },
      },
      rotate: {
        '30': '30deg',
        '-30': '-30deg',
      },
    },
  },
  plugins: [],
}
// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include your 'app' directory if using Next.js 13 app router
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
};

