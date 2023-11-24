// import { fileURLToPath, URL } from 'node:url';
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression()],
  resolve: {
    alias: {
      // '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      // '@form': fileURLToPath(new URL('./src/components/Form', import.meta.url)),
      // '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@components': path.resolve(__dirname, './src/components'),
      '@form': path.resolve(__dirname, './src/components/Form'),
      '@utils': path.resolve(__dirname, './src/utils'),
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
