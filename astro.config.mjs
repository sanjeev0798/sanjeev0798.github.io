// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site:'https://sanjeev0798.github.io',
  base:'/sanjeev.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
