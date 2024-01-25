import { capitalize } from "./capitalize";

/**
 * Converts a string to title case.
 *
 * @param {string} str - the input string
 * @return {string} the title cased string
 *
 * @example
 * ```
 * console.log(titleCase('hello world')); // 'Hello World'
 * ```
 */
export function titleCase(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .split(/[_\s-]+/)
    .map((word) => capitalize(word))
    .join(" ");
}
