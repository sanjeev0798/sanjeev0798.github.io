import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://sanjeev0798.github.io",
  base: "/", // user site → root
  vite: { plugins: [tailwindcss()] },
});

