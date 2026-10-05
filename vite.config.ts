import { defineConfig } from 'vite'; 
import react from '@vitejs/plugin-react-swc'; 
import path from 'path'; //https://vitejs.dev/config/ 
export default defineConfig({ plugins: [ react() ], resolve: { alias: { '@': path.resolve(__dirname, './src'), 
'@components': path.resolve(__dirname, './src/components'), '@assets': path.resolve(__dirname, './src/assets'), '@types': 
  path.resolve(__dirname, './src/types') } }, 
  server: { port: 3000, host: true, open: true, cors: true, headers: 
 { 'Cross-Origin-Embedder-Policy': 'require-corp', 
'Cross-Origin-Opener-Policy': 'same-origin' } }, 
build: { target: 'esnext', outDir: 'dist', sourcemap: true, chunkSizeWarningLimit: 1600, 
rollupOptions: { output: { manualChunks: { vendor: ['react', 'react-dom'], 
lucide: ['lucide-react'] } } } },
