import tailwindcss from '@tailwindcss/vite';
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  server: { port: 3000 },
  base: '/frontend-mentor/',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        qrCodeComponent: resolve(__dirname, 'src/learning-paths/qr-code-component/index.html'),
        blogCard: resolve(__dirname, "src/learning-paths/blog-card/index.html"),
        socialLinks: resolve(__dirname, 'src/learning-paths/social-links-profile/index.html'),
        recipePage: resolve(__dirname, 'src/learning-paths/recipe-page/index.html'),
        productPreviewCard: resolve(__dirname, 'src/learning-paths/product-preview-card-component/index.html'),
        fourCardSection: resolve(__dirname, 'src/learning-paths/four-card-section/index.html'),
        testimonialGrid: resolve(__dirname, 'src/learning-paths/testimonials-grid-section/index.html')
      }
    }
  }
});