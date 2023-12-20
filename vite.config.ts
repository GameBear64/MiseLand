// import { fileURLToPath, URL } from 'node:url';
import path from 'path';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';

import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@form': path.resolve(__dirname, './src/components/Form'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@api': path.resolve(__dirname, './src/stores/apiSlice'),
    },
  },
  build: {
    outDir: 'build',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: id => {
          if (id.indexOf('node_modules') !== -1) return id.toString().split('node_modules/')[1].split('/')[0].toString();
        },
      },
    },
  },
});
