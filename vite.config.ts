import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@components", replacement: "/src/components" },
      { find: "@customTypes", replacement: "/src/customTypes" },
      { find: "@apis", replacement: "/src/apis" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@fonts", replacement: "/src/pages" },
      { find: "@", replacement: "/src/" },
    ],
  },
  define: {
    "process.env.VITE_API_KEY": JSON.stringify(process.env.VITE_API_KEY),
  },
});
