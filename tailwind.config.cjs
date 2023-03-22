const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      blue: "#000080",
      gray: "#c0c0c0",
      "gray-dark": "#808080",
      red: "#ff0000",
    },
    extend: {
      spacing: {
        0: 0,
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
        16: "16px",
        24: "24px",
        32: "32px",
        64: "64px",
        128: "128px",
      },
    },
  },

  plugins: [],
};

module.exports = config;
