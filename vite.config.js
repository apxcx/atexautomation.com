import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['3000-ivd732yj93i7gcqj5dolq-658bbf86.sg2.manus.computer'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
