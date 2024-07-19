import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

import tsIgnoreCommentPlugin from "../lib/index.js";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"]
  },
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      "@absqueued/ts-ignore-comments": tsIgnoreCommentPlugin
    },
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
      "@absqueued/ts-ignore-comments/comments": ["error", {
        pattern: "@ts-ignore TODO: DEG#\\d+ .+"
      }]
    }
  },
];