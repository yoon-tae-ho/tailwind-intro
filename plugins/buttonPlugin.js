const plugin = require("tailwindcss/plugin");
const { default: lightOrDarkColor } = require("@check-light-or-dark/color");

const buttonPlugin = plugin(({ addComponents, matchComponents, theme }) => {
  const themeSpacing = theme("spacing");
  const themeBorderRadius = theme("borderRadius");
  const themeColors = theme("colors");

  addComponents({
    ".btn": {
      display: "inline-block",
      cursor: "pointer",
      fontWeight: "bold",
      padding: `${themeSpacing["2"]} ${themeSpacing["4"]}`,
      borderRadius: themeBorderRadius["lg"],
    },
  });

  for (const color in themeColors) {
    if (typeof themeColors[color] !== "string") {
      for (const shade in themeColors[color]) {
        const targetColor = themeColors[color][shade];
        const colorType = lightOrDarkColor(targetColor);
        addComponents({
          [`.btn-${color}-${shade}`]: {
            backgroundColor: targetColor,
            color: colorType === "dark" ? "white" : "black",
          },
        });
      }
    }
  }

  matchComponents({
    btn: (hexColor) => ({
      backgroundColor: hexColor,
      color: lightOrDarkColor(hexColor) === "dark" ? "white" : "black",
    }),
  });
});

module.exports = buttonPlugin;
