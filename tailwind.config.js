/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'markoOne': ['Marko One', 'serif'],
        'inria': ['Inria Serif', 'serif'],
      },
      screens:{
        'xs': '410px',
        'sm': '640px',
        'md': '768px',
        'ms': '992px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1476px',
      },
      animation: {
        orbitSpin: "orbitSpin 30s linear infinite",
        iconSpin: "iconSpin 30s linear infinite",
      },
      keyframes: {
        orbitSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        iconSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
    },    
  },
  plugins: [],
}