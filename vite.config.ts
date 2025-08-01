import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { coverageConfigDefaults } from "vitest/config";

export default defineConfig({
  plugins: [tailwindcss(), !process.env.VITEST && reactRouter(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    coverage: {
      exclude: [
        '**/*.config.*',
        'build/',
        ...coverageConfigDefaults.exclude
      ]
    },
    setupFiles: ['vitest.setup.ts'],
  }
});
