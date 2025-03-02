import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  server: { port: 3000 },
  base: '/frontend-mentor/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        qrCodeComponent: resolve(__dirname, 'src/learning-paths/qr-code-component/index.html'),
        blogCard: resolve(__dirname, "src/learning-paths/blog-card/index.html")
      }
    }
  }
});