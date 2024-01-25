/**
 * Converts a string to param case.
 *
 * @param str - The input string to be converted
 * @returns The string converted to param case
 *
 * @example
 * ```
 * console.log(paramCase('Hello World')); // 'hello-world'
 * ```
 */
export function paramCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z 0-9-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
