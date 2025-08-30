import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy';



// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/images',
          dest: 'assets'
        }
    ]})
  ],
  // base: process.env.VITE_BASE_PATH || '/tanawph'
  base: './',
  build: {
    outDir: 'dist', // Default output folder
    assetsDir: 'assets', // Folder for images and static files
  }
})
