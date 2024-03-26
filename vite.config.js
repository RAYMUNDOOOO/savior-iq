import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // Enable CSS modules globally
      generateScopedName: "[name]__[local]__[hash:base64:5]",
    },
  },
});
