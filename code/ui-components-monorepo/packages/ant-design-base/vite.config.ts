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
      name: 'SharpUI',
      fileName: (format) => `sc-ant-design.${format}.js`,
      formats: ['es', 'cjs', 'umd', 'iife']
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
  server: {
    port: 5174
  },
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.json', '.vue','.ts','.tsx'],
    alias: {
      // '@sharp': path.resolve(__dirname, 'components'),
    }
  }
})
