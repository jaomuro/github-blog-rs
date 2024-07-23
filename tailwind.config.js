/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('./src/assets/header-bg.svg')",
      },
      backgroundColor: {
        'base-label': '#3A536B',
        'base-profile': '#0B1B2B',
      },
      textColor: {
        'base-text': '#AFC2D4',
        'base-label': '#3A536B',
        'brand-blue': '#3294F8',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
