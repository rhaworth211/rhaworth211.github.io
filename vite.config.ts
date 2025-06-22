import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/rhaworth211.github.io/',
    plugins: [plugin()],
    server: {
        port: 65191,
    }
})
