import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: false,
    // host: '127.0.0.1',
    host: 'dev.wuhuhu.com',
    port: '8080',
    proxy: {
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // }
    }
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    // 全局配置 utils.scss
    preprocessoroptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `@import "@/assets/utils.scss";`
      }
    }
  }
})
