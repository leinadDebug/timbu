/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        MuseoModerno: ['MuseoModerno', 'sans-serif'],
        ClashDisplay:['Clash Display', 'sans-serif;']
      }
    },
  },
  plugins: [],
}