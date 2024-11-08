/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
         'tab':'850px'
      },
      boxShadow: {
        'custom': '0px 20px 30px 0px rgba(90, 70, 176, 0.3)',
        "custom-2" : '0px 30px 20px 0px rgba(43, 35, 79, 0.05)',
      },
    },
  },
  plugins: [],
}