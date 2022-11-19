/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    screens: {
      xs1: "350px",
      xs: "500px",
      sm: "640px",
      md1: "700px",
      md2: "800px",
      md3: "900px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
