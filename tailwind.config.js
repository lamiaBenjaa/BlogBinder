/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        // x:['Poetsen One'],
        Manrope:['Manrope'],
        WorkSans:['Work Sans']
      }
    },
  },
  plugins: [],
}