import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginCypress from "eslint-plugin-cypress";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  { ignores: ["node_modules/", "reports/", "cypress/videos/", "cypress/screenshots/"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["cypress/**/*.ts"],
    ...pluginCypress.configs.recommended,
  },
  {
    files: ["scripts/**/*.mjs"],
    languageOptions: { globals: { process: "readonly", console: "readonly" } },
  },
  prettier,
);
