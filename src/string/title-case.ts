import { capitalize } from "./capitalize";

export function titleCase(str: string) {
  return str
    .toLowerCase()
    .trim()
    .split(/[_\s-]+/)
    .map((word) => capitalize(word))
    .join(" ");
}
