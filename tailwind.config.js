/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'DM Sans, sans-serif'
      },
      fontSize: {
        '5xl': '3.4rem'
      },
      colors: {
        blue: {
          200: '#F3F0FF',
          300: '#E5DBFF',
          500: '#331983',
          700: '#5F3DC4'
        },
        gray: {
          100: '#FFFFFF',
          400: '#949494',
          700: '#495057',
          800: '#212529',
          900: '#061800'
        }
      }
    }
  },
  plugins: []
}
