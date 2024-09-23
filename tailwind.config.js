/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      "lexend-font": '"Lexend", sans-serif',
    },

    colors: {
      btnPrimary: "#B4F461",
      navBase: "#F9F7F3",
      btnInnerTextColor: "#111111",
      btnTextOpacity: "rgba(17, 17, 17, 0.7)",
      borderColor: "#E7E7E7",
      btnCoinColor: "rgba(17, 17, 17, 0.05)",
      inputInnerText: "rgba(17, 17, 17, 0.4)",
      bgWhite: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
