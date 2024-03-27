/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      screens: {
        'md' : '800px'
      },
      colors:{
        'primary' : '#1d336d',
        'secondary' : '#2DC2BD',
        'tetairy' : '#CD533B',
        'dark' : '#02040F'
      },
    },
  },
  plugins: [],
}

