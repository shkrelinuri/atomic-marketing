import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves from /atomic-marketing/; Vercel (sets VERCEL=1 at build) serves from the root
export default defineConfig({ plugins: [react()], base: process.env.VERCEL ? "/" : "/atomic-marketing/" });
