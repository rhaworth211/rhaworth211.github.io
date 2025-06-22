import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/rhaworth211.github.io/', // ← IMPORTANT
    plugins: [react()],
});
