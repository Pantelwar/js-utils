/**
 * Converts a string to snake case.
 *
 * @param {string} str - the input string
 * @return {string} the string converted to snake case
 *
 * @example
 * ```
 * console.log(snakeCase('Hello World')); // 'hello_world'
 * ```
 */
export function snakeCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z 0-9-]/g, "")
    .trim()
    .replace(/\s+/g, "_");
}
