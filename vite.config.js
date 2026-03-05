import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  // Esto asegura que las rutas funcionen bien en Vercel
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), "index.html"),
        calculadora: resolve(process.cwd(), "calculadora/index.html"),
        conversor: resolve(process.cwd(), "conversor/index.html"),
      },
    },
  },
});
