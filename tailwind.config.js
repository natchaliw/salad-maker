/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbluecolor: "#012738",
        yellowcolor: "#F8B602",
        graycolor : "#A098AE",
        bodycolor: "#F5F5F5",
        textcolor: "#2E2E2E",
        postercolor: "#FFEA75"
      },
      boxShadow: {
        "box": "0 20px 50px rgba(46, 46, 46, 0.05)",
        "category": "0 4px 8px rgba(55, 62, 68, 0.25)"
      }
    },
  },
  plugins: [],
};
