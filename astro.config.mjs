// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mjml from 'vite-plugin-mjml'
import node from '@astrojs/node';
// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [
            tailwindcss(),
            mjml({
                input: 'src/templates/mjml',
                output: 'src/templates/html',
                extension: '.html',
                watch: true
            })]
    },

    output: 'server',

    env: {
        schema: {
            RESEND_API: envField.string({ context: "server", access: "secret" }),
            SMTP_USER: envField.string({ context: "server", access: "secret" }),
            SMTP_KEY: envField.string({ context: "server", access: "secret" })
        }
    },

    adapter: node({
        mode: 'standalone'
    })
});