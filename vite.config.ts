import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import { intlayer, intlayerProxy } from "vite-intlayer";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		intlayer(),
		intlayerProxy(),
		visualizer({
			emitFile: true,
			filename: "stats.html",
		}),
	],
});
