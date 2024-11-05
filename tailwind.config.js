/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#083fa1",
        red: "#dc101a",
        grey: "#f4f5f9",
      },
    },
  },
  plugins: [],
}