import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    rollupOptions: {
      external: ['react-redux', 'react', 'react-dom'], 
    },
  },
  server: {
    port: 3000,
  },
  define: {
    "process.env": {},
  },
});