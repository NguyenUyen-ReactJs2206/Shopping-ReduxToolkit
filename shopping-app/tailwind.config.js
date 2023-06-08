const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  //deleted styled container
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      colors: {
        bgFormLogin: '#EFF0F5;',
        bgFooter: '#f4f4f6',
        textFooter: '#0f136d',
        orange: '#f57224',
        orangeHover:"#d34836",
        blue: '#3b5998',
        red: '#d34836'
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('columns.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4')
        }
      })
    })
  ]
}
