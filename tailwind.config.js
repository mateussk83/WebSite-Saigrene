/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
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
          700: '#5F3DC4',
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
