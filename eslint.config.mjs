import globals from "globals";
import pluginJs from "@eslint/js";
import jest from "eslint-plugin-jest";
import eslintRecommended from "eslint-plugin-prettier/recommended";

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    files: ["src/**/*.js"],
    ...pluginJs.configs.recommended,
    ...jest.configs["flat/recommended"],
    ...eslintRecommended,
    rules: {
      "prefer-const": "warn",
      "no-unused-vars": "warn",
      "no-console": "error",
      "semi": "error",
    },
  },
];
