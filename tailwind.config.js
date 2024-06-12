/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    extend: {
      fontFamily: {
        preeti: ['Preeti']
      },
      colors: {
        'primary-dark': '#242124',
        'text-dark': '#F0F0F0',
        'secondary-dark': '#7A6A5A',
        'tertiary-dark': '#2D3238',
        'border-dark': ' #9E9E9E'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
