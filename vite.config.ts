import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Alterado para './' para garantir que os links funcionem em qualquer subpasta ou dominio
  base: './',
  server: {
    host: true,
    port: 5173
  }
})
