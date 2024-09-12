export const getCsv = (json: Record<string, unknown>[]) => {
  if (!json[0]) return "";

  const headers = Object.keys(json[0]);

  const str = [headers.join(",")];

  for (const entry of json) {
    str.push(Object.values(entry)?.join(","));
  }

  return str.join("\n");
};
