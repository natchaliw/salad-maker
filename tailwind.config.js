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
        logocolor: '#012738',
        yellowcolor: '#F8B602',
        graycolor : '#A098AE',
        bodycolor: '#F5F5F5',
        textcolor: '#2E2E2E'
      },
      boxShadow: {
        'box': '0 20px 50px #2E2E2E0D',
      },
      gap: {
        59: '59px'
      }
    },
  },
  plugins: [],
};
