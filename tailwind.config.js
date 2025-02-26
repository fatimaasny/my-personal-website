/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "minmax-100-1fr": "minmax(100%, 1fr)",
        "calc-50": "calc(50%)",
        "calc-33": "calc(33.33%)",
      },
    },
    fontFamily: {
      Caveat: ["Caveat", "cursive"],
      Jost: ["Jost", "sans-serif"],
      AllertaStencil: ["Allerta Stencil", "sans-serif"],
    },
  },
  plugins: [],
};
