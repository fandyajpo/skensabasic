// const colors = require("tailwindcss/colors");

// module.exports = {
//   content: ["./components/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     colors: {
//       ...colors,
//       success: "#C9F7F5",
//     },
//     extend: {},
//   },
//   plugins: [],
//   corePlugins: require("tailwind-rn/unsupported-core-plugins"),
// };

module.exports = {
  theme: {
    screens: {
      sm: "380px",
      md: "420px",
      lg: "680px",
      // or maybe name them after devices for `tablet:flex-row`
      tablet: "1024px",
    },
  },
};
