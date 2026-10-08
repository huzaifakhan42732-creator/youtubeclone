/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yt: {
          red: '#FF0000',
          dark: '#0f0f0f',
          gray: '#606060',
          lightHover: '#f2f2f2',
          border: '#e5e5e5'
        }
      }
    },
  },
  plugins: [],
}
