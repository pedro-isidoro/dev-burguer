/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'media', // or false or 'class',
  // content: [],
  theme: {
    fontFamily:{
      'sans': ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        "home": "url('/images/bg.png')"
      }
    },
  },
  plugins: [],
};

