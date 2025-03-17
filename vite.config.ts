import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/online-store--on-ts/", // Это важно для корректной работы с путями
  build: {
    outDir: "dist",
    rollupOptions: {
      external: ["react", "react-dom", "react-redux"],
    },
  },
  server: {
    port: 3000,
  },
  define: {
    "process.env": {},
  },
});
