import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        calculadora: resolve(__dirname, "calculadora/index.html"),
        conversor: resolve(__dirname, "conversor/index.html"),
      },
    },
  },
});
