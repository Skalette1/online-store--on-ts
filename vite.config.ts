import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    rollupOptions: {
      external: ['react', 'react-dom'], // Убедитесь, что React и ReactDOM исключены как внешние зависимости
    },
  },
  server: {
    port: 3000, // Локальный сервер на 3000 порту
  },
  define: {
    "process.env": {}, // Убирает ошибки с process.env
  },
});
