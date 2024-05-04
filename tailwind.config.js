/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "320px", max: "767px" },
      md: { min: "768px", max: "1079px" },
      lg: { min: "1080px" },
    },
    extend: {
      black: {
        100: "#1E1E1E",
        200: "#231F20",
      },
      gray: {
        100: "#8D8D8D",
        200: "#EEEEEE",
        300: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
