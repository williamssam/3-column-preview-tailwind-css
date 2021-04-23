module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bright-orange': 'hsl(31, 77%, 52%)',
        'dark-cyan': 'hsl(184, 100%, 22%)',
        'very-dark-cyan': 'hsl(179, 100%, 13%)',
        'paragraph-color': 'hsla(0, 0%, 100%, 0.75)',
        'very-light-gray': 'hsl(0, 0%, 95%)',
      },
      fontFamily: {
        'body-font': 'Lexend\\ Deca',
        'heading-font': 'Big\\ Shoulders\\ Display',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
};
