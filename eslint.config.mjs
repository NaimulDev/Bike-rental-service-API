import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Add your custom rules here
      "no-console": "warn", // Warn on console statements
      semi: ["error", "always"], // Enforce semicolons
      quotes: ["error", "single"], // Enforce single quotes
      eqeqeq: ["error", "always"], // Enforce strict equality
      curly: ["error", "all"], // Enforce curly braces for all control statements
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ], // Error on unused variables but ignore those starting with _
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
