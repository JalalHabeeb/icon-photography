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
        golden: "#c7a951",
      },
      // backgroundImage: {
      //   image_border: "url('images/border.png')",
      // },
    },
  },
  plugins: [],
};
