const openVariant = require("./plugins/openVariant");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {},
  plugins: [openVariant],
};
