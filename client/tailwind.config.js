/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary1: '#0243f5',
        primary2: '#fcba03',
        plate:'#080c15'
      },
    },
  },
  plugins: [],
}

