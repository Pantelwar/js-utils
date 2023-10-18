/**
 * Converts a number to an alphabetically ordered string.
 *
 * @param {number} value - The number to convert.
 * @return {string} - The converted list case string.
 */
export function convertListcases(value: number): string {
  return ((Math.abs(value) % 26 || 26) + 9).toString(36);
}
