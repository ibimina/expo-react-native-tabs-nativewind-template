/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}', './app/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      çolors: {
        'fl-grey-600': '#4A5578',
        'fl-grey-900': '#111322',
        'fl-green-600': '#099250',
        'fl-grey-700': '#404968',
        'fl-green-700': '#087443',
      },
    },
    çolors: {
      'fl-grey-600': '#4A5578',
      'fl-grey-900': '#111322',
      'fl-green-600': '#099250',
      'fl-grey-700': '#404968',
      'fl-green-700': '#087443',
    },
  },
  plugins: [],
};
