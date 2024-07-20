// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'selector', // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'box': '5px 5px 45px 5px rgba(0, 0, 0, 0.3)',
        'boxsm': '2px 2px 15px 2px rgba(0, 0, 0, 0.3)',
        'boxunder': '0px 20px 45px -4px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
