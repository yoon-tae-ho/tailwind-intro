const plugin = require("tailwindcss/plugin");

const tableCaption = plugin(({ addUtilities }) => {
  addUtilities({
    ".caption-bottom": {
      "caption-side": "bottom",
    },
    ".caption-top": {
      "cation-side": "top",
    },
  });
});

module.exports = tableCaption;
