import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://fen-ux-gqcp.vercel.app', // FenNuX - Desarrollo Web Premium
  integrations: [sitemap(), react(), tailwind()],
  output: 'static',
  base: '/',
  build: {
    assets: 'assets'
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    build: {
      cssMinify: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'utils': ['clsx', 'class-variance-authority']
        }
        }
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion']
    }
  }
});
