// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mjml from "vite-plugin-mjml";
import node from "@astrojs/node";
import react from "@astrojs/react";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      mjml({
        input: "src/emails/mjml/templates",
        output: "src/emails/html",
        extension: ".html",
        watch: true,
      }),
    ],
  },

  output: "server",

  env: {
    schema: {
      SMTP_HOST: envField.string({ context: "server", access: "secret" }),
      SMTP_PORT: envField.number({ context: "server", access: "secret" }),
      SMTP_SECURE: envField.boolean({
        context: "server",
        access: "secret",
        default: false,
      }),
      SMTP_USER: envField.string({ context: "server", access: "secret" }),
      SMTP_KEY: envField.string({ context: "server", access: "secret" }),
    },
  },

  adapter: node({
    mode: "standalone",
  }),

  integrations: [react()],
});