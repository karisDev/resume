import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import SVGInjectPlugin from "vite-plugin-svg-inject";

export default defineConfig({
  base: "/resume",
  plugins: [solidPlugin(), SVGInjectPlugin()],
  server: {
    port: 42069,
  },
  build: {
    target: "esnext",
  },
});
