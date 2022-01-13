import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/popular-card/' : '/',
  plugins: [vue()],
  build: {
    target: 'esnext'
  }
});
