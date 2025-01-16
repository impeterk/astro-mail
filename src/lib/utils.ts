import type { JSX } from "astro/jsx-runtime";
import fs from "fs/promises";
import mjml2html from "mjml";
import path from "path";
import { renderToString } from "react-dom/server";
import config from "../../app.config.json";

export function renderTemplate(el: JSX.Element) {
  return mjml2html(renderToString(el)).html;
}

export function renderMjml(rawHtml: string) {
  return mjml2html(rawHtml).html;
}
export function navParams(
  searchParams: URLSearchParams,
  key: string,
  value: string
) {
  searchParams.set(key, value);
  return `?${searchParams.toString()}`;
}

export async function exportTemplate({
  fileName,
  type,
  content,
}: {
  fileName: string;
  type: string;
  content: string;
}) {
  if (!type) return null;
  // @ts-ignore
  const filePath = path.join(process.cwd(), config[type]?.output, fileName);
  const file = `${filePath}.html`;
  const targetDir = path.dirname(file);

  try {
    await fs.access(targetDir);
  } catch (e) {
    await fs.mkdir(targetDir, { recursive: true });
  }
  try {
    await fs.writeFile(file, content);
    console.log(`${file} write succesfully`);
  } catch (error) {
    console.error("Error writing to file:", error);
  }
}
