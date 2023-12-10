import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: { alias: [{ find: '@', replacement: resolve(__dirname, 'src') }] },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/styles/variables.scss'; @import './src/styles/mixins.scss';`,
      },
    },
  },
});
