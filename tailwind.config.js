module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      ubuntu: ['Ubuntu', 'sans-serif'],
      slant: ['Babylonica', 'Grape Nuts', 'cursive'],
    },
  },
  plugins: [require('daisyui')],

  //daisy ui config
  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#2A9D8F',
          'primary-focus': '#2b8277',
          secondary: '#3b758c',
          'secondary-focus': '#264653',
          accent: '#cddafd',
          error: '#E76F51',
        },
      },
      'dark',
      'cupcake',
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
}
