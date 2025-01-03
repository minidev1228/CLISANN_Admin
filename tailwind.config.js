/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'main':'#080f28',
      'block':'#0b1739',
      'line':'#30374d',
      'placeholder':'#9fb2d5',
      'white':'#ffffff',
      'pink':'#cb3cff',
      'blue':'#7f25fb',
      'sidebar':'#081028',
      'gray':'#3a4360'
    },
    fontFamily: {
      'logo':['Creepster']
    }
  },
  plugins: [],
}