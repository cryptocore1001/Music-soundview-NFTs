/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 2s infinite",
      },
      colors: {
        themeRed: "#CD313C",
        themeTeal: "#B2F5EA",
        themePinkWhite: "#FFF9F9",
        textBlack: "#121212",
        textGrey: "#616161",
        textGreen: "#13E800",
      },
      fontFamily: {
        Manrope: "Manrope",
        Recoleta: "Averia Serif Libre",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay"), require("flowbite/plugin")],
};
