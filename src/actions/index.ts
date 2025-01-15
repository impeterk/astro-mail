import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs/promises";
import {
  SMTP_KEY,
  SMTP_USER,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_SECURE,
} from "astro:env/server";

export const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      email: z.string(),
      template: z.string(),
      title: z.string(),
    }),
    handler: async ({ email, template, title }) => {
      const templatePath = path.join(process.cwd(), "src", template);
      const templateFile = await fs.readFile(`${templatePath}.html`, "utf-8");
      const data = await mailer({
        to: email,
        html: templateFile,
        subject: title,
      });
      console.log(data);
      return data;
    },
  }),
};

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: {
    user: SMTP_USER,
    pass: SMTP_KEY,
  },
});

type Mail = {
  to: string;
  html: string;
  subject?: string;
};

export async function mailer(mail: Mail) {
  try {
    const info = await transporter.sendMail({
      from: `Astro MJML <astro@mjml.com>`,
      to: mail.to,
      subject: mail.subject || "Hello World",
      html: mail.html,
    });

    return info.messageId;
  } catch (e) {
    console.log(e);
  }
}
