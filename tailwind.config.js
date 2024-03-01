/** @type {import('tailwindcss').Config} */


const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPrimaryColor: '#3FB2E5',
        customMainColor: '#3B3C3D',
        customSecondaryColor: '#F3FAFF',
        customMainSecondaryColor: "#747171",
        customMainThird: "#807D7D",
        customSecondaryColor2: '#F2FBFF'
      },
      fontSize: {
        customFontSize: '18px'
      }
    },
  },
  plugins: [],
});

