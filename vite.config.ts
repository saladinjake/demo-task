import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import plainText from "vite-plugin-plain-text";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      svgrOptions: { icon: true },
    }),
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
    setupFiles: "tests/setup.ts",
    environment: "jsdom",
    include: ["**/*.test.{js,jsx,tsx}", "**/*.spec.{js,jsx,ts,tsx}"],
  },
});
