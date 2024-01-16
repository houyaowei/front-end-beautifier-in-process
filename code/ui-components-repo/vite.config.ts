import { fileURLToPath, URL } from 'node:url'
import path  from 'node:path';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'components/index.ts'),
      name: 'vue-sharp-ui-3x',
      fileName: (format) => `vue-sharp-ui-3x.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/css/base.css";`
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.json', '.vue','.ts','.tsx'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'sharp': path.resolve(__dirname, 'components'),
    }
  }
})
