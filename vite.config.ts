import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    rollupOptions: {
      external: ['react', 'react-dom', 'react-redux'], // добавьте react-redux в список внешних зависимостей
    },
  },
  server: {
    port: 3000,
  },
  define: {
    "process.env": {}, // Убирает ошибки с process.env
  },
});
