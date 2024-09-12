import globals from "globals";
import pluginJs from "@eslint/js";
import jest from "eslint-plugin-jest";

export default [
  {
    ...pluginJs.configs.recommended,
    ...jest.configs['flat/recommended'],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "prefer-const": "warn",
      "no-unused-vars": "warn",
      "no-console": "error",
      "semi": "error",
    },
  },
];