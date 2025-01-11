// @ts-check
import { defineConfig } from 'astro/config';
import mjml from 'vite-plugin-mjml'
// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [mjml({
            input: 'src/templates/mjml',
            output: 'src/templates/html',
            extension: '.html',
            watch: true
        })]
    },
    output: 'server'
});
