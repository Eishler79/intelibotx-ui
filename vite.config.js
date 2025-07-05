import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // asegura que la raíz es la carpeta actual
  build: {
    outDir: 'dist', // salida esperada por Vercel
  },
})