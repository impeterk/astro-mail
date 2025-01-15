import type { JSX } from "astro/jsx-runtime";
import fs from "fs/promises";
import mjml2html from "mjml";
import { renderToString } from "react-dom/server";
export function renderTemplate(el: JSX.Element) {
  return mjml2html(renderToString(el)).html;
}

export function navParams(
  searchParams: URLSearchParams,
  key: string,
  value: string
) {
  searchParams.set(key, value);
  return `?${searchParams.toString()}`;
}

export async function exportTemplate(filePath: string, content: string) {
  const file = `${filePath}.html`;
  try {
    await fs.writeFile(file, content);
    console.log(`${file} write succesfully`);
  } catch (error) {
    console.error("Error writing to file:", error);
  }
}
