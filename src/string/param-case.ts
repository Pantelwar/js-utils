export function paramCase(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z 0-9-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
