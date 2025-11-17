import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';
// https://vitejs.dev/config/
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // agar Vue ishlatilsa

export default defineConfig({
  base: './', // <--- shu satrga e'tibor bering
  plugins: [vue()],
})
