const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    content: ['./src/**/*.js'],
  },
  theme: {
    extend: {
      colors: {
        primary: "#f5487f",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/ui"), require("@tailwindcss/typography")],
};
