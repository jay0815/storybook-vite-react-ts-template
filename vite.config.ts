import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
    'react/jsx-runtime': 'react/jsx-runtime.js',
    },
    },
})
