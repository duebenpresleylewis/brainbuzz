import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const repoName = process.env.GITHUB_REPOSITORY?.split("/").pop() ?? "brainbuzz";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? `/${repoName}/` : "/",
  plugins: [react(), tailwindcss()],
});
