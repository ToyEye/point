/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",

      md: "768px",

      lg: "1280px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        sm: "20px",
        md: "32px",
      },
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#121212",
        light: "#F6F6F6",
        gray: "#484848",
        headerBorderDark: "rgba(18, 18, 18, 0.3)",
        headerBorderLight: "rgba(247, 247, 247, 0.2)",

        headerBgColor: "rgb(var(--background-header-color) / <alpha-value>)",
        footerBgColor: "rgb(var(--background-footer-color) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
