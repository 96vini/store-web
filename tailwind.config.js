/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#222',
        secondary: '#666',
        accent: '#6667AB',
        active: '#43448e',
        accent2: '#2fbfb3',
        active2: '#229b91',
        accentdark: '#43447c',
        boreau: {
          start: '#575892',
          end: '#32b4af',
        }
      },
    },
  },
  plugins: [],
}

