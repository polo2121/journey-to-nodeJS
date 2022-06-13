const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./*.html"],

  theme: {
    extend: {
      rotate: {
        235: "235deg",
      },
      // fontFamily: {
      //   sans: ["'Poppins'", ...defaultTheme.fontFamily.mono],
      // }/,
    },
  },
  plugins: [],
};
