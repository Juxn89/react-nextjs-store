const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {  
  content: [
    './src/**/*{html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: { ...colors }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};
