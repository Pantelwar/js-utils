import { capitalize } from "./capitalize";

export function titleCase(str: string) {
  return str
    .toLowerCase()
    .split("_")
    .map((word) => capitalize(word))
    .join(" ");
}
