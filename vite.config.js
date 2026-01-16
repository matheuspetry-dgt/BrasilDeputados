import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/dadosabertos': {
        target: 'https://dadosabertos.camara.leg.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dadosabertos/, ''),
      },
    },
  },
})
