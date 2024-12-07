/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        background: '#F4F1EC'
      },
      textColor: {
        DEFAULT: "#303030",
      },
    },
  },
  plugins: [],
};
