import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Define o caminho base como o nome do repositório para garantir que o GitHub Pages encontre os arquivos
  base: '/espacovida/',
  server: {
    host: true,
    port: 5173
  }
})
