/**
 * Flattens an array of elements by recursively traversing the array and concatenating
 * any nested arrays found.
 *
 * @param {T[]} list - The array to be flattened.
 * @return {T[]} - The flattened array.
 *
 * @example
 * ```
 * console.log(flattenArray([1, 2, [3, 4]])); // [1, 2, 3, 4]
 * ```
 */

export function flattenArray<T = unknown>(list: T[]): T[] {
  return list.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return acc.concat(flattenArray(val));
    }
    return acc.concat(val);
  }, [] as T[]);
}
