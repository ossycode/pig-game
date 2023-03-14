/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        strongGreen: 'hsla(126, 100%, 41%, 1)',
        strongRed: '#c6426e',
        gameboardSecColor: '#975C8D',
        btnColor: '#F64668',
        gameBoardColor: '#D989B5',
        gameBoardColor2: 'rgba(255, 255, 255, 0.35)',
        activePlayer: 'rgba(255, 255, 255, 0.4)',
      },
      fontFamily: {
        abel: ['Abel', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '2px 1px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
