import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import plainText from "vite-plugin-plain-text";
import { configDefaults } from "vitest/config";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({ svgrOptions: { icon: true } }),
    plainText(["**/*.csv"], { namedExport: false }),
  ],
  server: {
    port: 3000,
    proxy: {
      "^/(user|wallet|transactions|transaction)": {
        target: "https://fe-task-api.mainstack.io",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "/tests/setup.ts",
    include: ["**/*.{test,spec}.{ts,tsx}"], //  Only include .test.ts/.tsx or .spec.ts/.tsx files
    exclude: [...configDefaults.exclude, "**/e2e/**"],
    css: true,
  },
});
