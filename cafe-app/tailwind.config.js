/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'letra-color': '#DED6BF',
        'fondo-rojo': '#D2392C',
        'footer': '#251D1E',
      },
      fontSize: {
        '45px': '45px',
        '35px': '35px',
        '24px': '24px',
      },
      height: {
        '100px':'100px',
        '400px': '400px',
      },
      width:{
        '20%': '20%',
        '30%': '30%',
        '50%':'50%',
        '150px': '150px',
        '300px': '300px',
        '500px': '500px',
      },
      boxSizing: {
        'border-box': 'border-box',
      },
      scale: {
        '80': '0.8',
      },
      overflow: {
        'visible': 'visible',
      },
    },
  },
  plugins: [],
}
