import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Vite's SPA fallback intercepts directory-style URLs like /cipher/privacy/
// before the public-dir static middleware can serve them. This plugin rewrites
// those requests to the explicit index.html path so the correct page is served
// both in `vite dev` and `vite preview`.
const cipherPagesPlugin = {
  name: 'cipher-static-pages',
  configureServer(server: import('vite').ViteDevServer) {
    server.middlewares.use((req, _res, next) => {
      if (req.url?.startsWith('/cipher/') && !req.url.includes('.')) {
        req.url = req.url.replace(/\/?$/, '/index.html')
      }
      next()
    })
  },
  configurePreviewServer(server: import('vite').PreviewServer) {
    server.middlewares.use((req, _res, next) => {
      if (req.url?.startsWith('/cipher/') && !req.url.includes('.')) {
        req.url = req.url.replace(/\/?$/, '/index.html')
      }
      next()
    })
  },
}

export default defineConfig({
  plugins: [react(), cipherPagesPlugin],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
