module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#6a50b2',

          secondary: '#8c84f9',

          accent: '#83c914',

          neutral: '#26202C',

         

          info: '#9CC9DE',

          success: '#30DFCA',

          warning: '#F9BA4D',

          error: '#E53864',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
