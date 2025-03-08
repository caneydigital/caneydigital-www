import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/   https://caneydigital.github.io/caneydigital-www/
export default defineConfig({
  plugins: [react()],
  base: '/' 
});
