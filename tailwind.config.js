/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textOpacity: ['dark']
    },
    colors:{
      'lightgray':'#bcbcbc',
      'white': '#ffffff',
      'primary': '#202c36',
      'secondary': '#2b3844',
    },
  },

  plugins: [],
};
