/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#07B6E0',
          DEFAULT: '#07B6E0',
          dark: '#069AC0'
        },
        secondary: '#809090',
        navy: '#051937',
        accent: '#07B6E0'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
};