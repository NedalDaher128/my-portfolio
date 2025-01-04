/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'body': ['League Gothic', 'serif'],
        'logo': ['League Spartan','serif'],
        'text': ['Roboto','sans-serif'],
      }
    },
  },
  plugins: [],
}

