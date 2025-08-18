// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './', // project root
  build: {
    outDir: 'dist', // Vercel expects 'dist' for Vite
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': '/src', // optional: allows import like "@/components/Hero.jsx"
    },
  },
});
