/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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

