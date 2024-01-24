/**
 * Capitalizes the first letter of a string and converts the rest to lowercase.
 *
 * @param {string} str - the input string
 * @return {string} the capitalized string
 *
 * @example
 * ```
 * capitalize('hello world'); // 'Hello world'
 * ```
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
