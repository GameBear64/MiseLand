import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression()],
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
