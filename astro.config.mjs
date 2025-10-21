// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Set base path for GitHub Pages deployment
  // For user/organization pages like username.github.io, leave base undefined or set to "/"
  // For project pages like username.github.io/repo-name, uncomment and set base to "/repo-name"
  base: "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
