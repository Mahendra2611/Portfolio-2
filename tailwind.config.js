/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   
    extend: {
      fontFamily: {
        bonaNovaSC: ["'Bona Nova SC'", "serif"],
        fredericka: ["'Fredericka the Great'", "cursive"],
        lacquer: ["'Lacquer'", "cursive"],
        londrina: ["'Londrina Sketch'", "cursive"],
        montserrat: ["'Montserrat'", "sans-serif"],
        rubikWetPaint: ["'Rubik Wet Paint'", "cursive"],
      },
      
    },
  },
  plugins: [],
};

