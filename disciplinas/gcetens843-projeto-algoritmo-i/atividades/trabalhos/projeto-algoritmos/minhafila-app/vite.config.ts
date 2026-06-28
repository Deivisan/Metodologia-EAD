import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Metodologia-EAD/minhafila/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})
