/**
 * Converts a number to an alphabetically ordered string.
 *
 * @param {number} value - The number to convert.
 * @return {string} - The converted list case string.
 *
 * @example
 * ```
 * console.log(convertListcases(1)); // 'a'
 * console.log(convertListcases(26)); // 'z'
 * console.log(convertListcases(27)); // 'a'
 * ```
 */
export function convertListcases(value: number): string {
  return ((Math.abs(value) % 26 || 26) + 9).toString(36);
}
