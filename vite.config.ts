import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { intlayerPlugin } from "vite-intlayer";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    intlayerPlugin(),
    visualizer({
      emitFile: true,
      filename: "stats.html",
    }),
  ],
});
