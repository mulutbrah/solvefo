/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  bracketSpacing: true,
  semi: true,
  trailingComma: "all",
  printWidth: 80,
  tabWidth: 2,
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
};
