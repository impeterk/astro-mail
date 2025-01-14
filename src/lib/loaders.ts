export function templateLoader({
  type,
  search = "",
}: {
  type: string;
  search?: string;
}) {
  let matches = null;
  if (type === "mjml") {
    matches = import.meta.glob("../emails/html/**.html", {
      eager: true,
    });
  }
  if (type === "js") {
    matches = import.meta.glob("../emails/js/**.js", {
      eager: true,
    });
  }
  if (!matches) {
    return null;
  }
  const templates = Object.keys(matches).map((template) => {
    const link = `/email/${type}/` + template.replace("../", "") + search;
    const levels = template
      .replace(`/email/${type}/`, "")
      .split("/")
      .filter((level) => !level.includes(`.${type}`));
    const name = template.split("/").at(-1)?.replace(`.${type}`, "");
    return { link, levels, name };
  });
  return templates;
}
