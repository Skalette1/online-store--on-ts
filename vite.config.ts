import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    rollupOptions: {
      external: ['react-redux', 'react', 'react-dom'], // Добавьте все внешние зависимости, если нужно
    },
  },
  server: {
    port: 3000, // Локальный сервер на 3000 порту
  },
  define: {
    "process.env": {}, // Убирает ошибки с process.env в Vercel
  },
});
