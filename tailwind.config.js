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
        'primary-dark': '#121212',
        'text-dark': '#E0E0E0',
        'secondary-dark': '#2e2e2e',
        'tertiary-dark': '#242424',
        'border-dark': '#374151'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
