import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/substack-feed': {
        target: 'https://jilekjan.substack.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/substack-feed/, '/feed'),
      },
    },
  },
})
