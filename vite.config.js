import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const projectRoot = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: resolve(projectRoot, "src"),
  base: "/",
  publicDir: false,
  plugins: [react()],
  build: {
    outDir: resolve(projectRoot, "dist"),
    emptyOutDir: true,
    assetsDir: "assets/react",
    sourcemap: false,
  },
});
