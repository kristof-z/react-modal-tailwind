import js from "@eslint/js";
import type { Linter } from "eslint";
import parser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "no-console": [0],
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn", 
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn", 
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
] satisfies Linter.FlatConfig[];
