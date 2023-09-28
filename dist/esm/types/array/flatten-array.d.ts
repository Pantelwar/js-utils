/**
 * Flattens an array of elements by recursively traversing the array and concatenating
 * any nested arrays found.
 *
 * @param {T[]} list - The array to be flattened.
 * @param {string} [key='children'] - The key used to identify nested arrays in each item.
 * @return {T[]} - The flattened array.
 */
export declare function flattenArray<T>(list: T[], key?: string): T[];
