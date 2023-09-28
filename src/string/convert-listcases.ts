/**
 * Converts a number to an alphabetically ordered string.
 *
 * @param {number} value - The number to convert.
 * @return {string} - The converted list case string.
 */
export function convertListcases(value: number): string {
  return (value + 9).toString(36);
}
