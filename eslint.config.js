import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import sonarjs from 'eslint-plugin-sonarjs';
import compat from 'eslint-plugin-compat';
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["app/**/*.css"]),
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  sonarjs.configs.recommended,
  compat.configs['flat/recommended']
]);

