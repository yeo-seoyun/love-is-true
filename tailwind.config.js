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
      colors: {
        black: {
          100: "#1E1E1E",
          200: "#231F20",
        },
        gray: {
          100: "#8D8D8D",
          200: "#EEEEEE",
          300: "#F8F8F8",
        },
        green: {
          100: "#00C851",
        },
      },
      backgroundImage: {
        "home-1": "url('/assets/24aadcf80919fcb597f4698cc96a22cc.jpg')",
        "home-2": "url('/assets/2eb565a3af36071e481771430e71f00e.jpg')",
        "t-home-1": "url('/assets/4d8059cf3f1482477931f71e09ade1c4.jpg')",
        "t-home-2": "url('/assets/f6d4b37bccfdbab296db864dccd6ca4f.jpg')",
        naver: "url('/assets/npay_sp_payment.png')",
      },
    },
    fontFamily: {
      Nanum: ["NanumSquareNeo-Variable"],
    },
  },
  plugins: [],
};
