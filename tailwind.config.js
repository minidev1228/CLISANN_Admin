/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'main':'#081028',
      'block':'#0b1739',
      'line':'#30374d',
      'placeholder':'#9fb2d5',
      'white':'#ffffff',
      'pink':'#cb3cff',
      'blue':'#7f25fb'
    },
    fontFamily: {
      'logo':['Creepster']
    }
  },
  plugins: [],
}