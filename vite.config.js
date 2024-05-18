import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from "@vitejs/plugin-vue";
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, "resources/js"),
            auth: path.resolve(__dirname, "Modules/Auth/resources"),
            dashboard: path.resolve(__dirname, "Modules/Dashboard/resources"),
            user: path.resolve(__dirname, "Modules/User/resources"),
        }
    }
});
