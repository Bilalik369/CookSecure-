/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"], 
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Poppins"', 'sans-serif'],
        secondary: ['"Roboto"', 'sans-serif'],
      },
      colors: {
        gradientStart: '#fdcb82',
        gradientMid: '#f9d1d1',
        gradientEnd: '#e0c3fc',
        gradientAlt: '#8ec5fc',
      },
    },
  },
  plugins: [],
}
