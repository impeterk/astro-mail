import config from "../../app.config.json";

export function templateLoader({
  type,
  search = "",
}: {
  type: string;
  search?: string;
}) {
  if (!type) {
    return null;
  }
  const matches = import.meta.glob(["/**/*.jsx", "/**/*.mjml"], {});
  const templates = Object.keys(matches)
    // @ts-ignore
    .filter((match) => match.startsWith(`/${config[type]?.input}`))
    .filter((match) => !match.includes("/_"))
    .map((template) => {
      const link = template.replace("/src", "").replace(/\.\w+$/, "") + search;
      const name = template
        .split("/")
        .at(-1)
        ?.replace(/\.\w+$/, "");
      return { link, name };
    });
  return templates;
}
