import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Global ignores
  {
    ignores: ["dist/", ".astro/"],
  },
  // ESLint recommended config
  pluginJs.configs.recommended,
  // TypeScript recommended config
  ...tseslint.configs.recommended,
  // Astro recommended config
  ...eslintPluginAstro.configs.recommended,
  {
    // Define the configuration for `.astro` file.
    files: ["**/*.astro"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        "astro/astro": true,
      },
    },
  },
  {
    // Define the configuration for API endpoint files.
    files: ["src/pages/**/*.js", "src/pages/**/*.ts"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    // Define the configuration for script files.
    files: ["scripts/**/*.mjs", "scripts/**/*.js", "src/**/*.mjs", "src/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
