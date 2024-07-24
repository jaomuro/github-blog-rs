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
        'base-input': '#040F1A',
        'base-backgroung': '#071422',
        'base-post': '#112131',
      },
      textColor: {
        'base-text': '#AFC2D4',
        'base-label': '#3A536B',
        'brand-blue': '#3294F8',
        'base-subtitle': '#C4D4E3',
        'base-spam': '#7B96B2',
        'base-title': '#E7EDF4',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      borderColor: {
        'base-border': '#1C2F41',
      },
    },
  },
  plugins: [],
}
