/**
 * Finds the key from a given value in an object.
 *
 * @param {object} object - The object to search for the key.
 * @param {T} value - The value to find the corresponding key for.
 * @return {string | undefined} - The key that corresponds to the given value, or undefined if the value is not found.
 */
export const findKeyFromValue = <T = unknown>(
  object: { [key: string]: unknown },
  value: T
): string | undefined => {
  let res = undefined;
  Object.entries(object).forEach(([key, val]) => {
    if (val === value) {
      res = key;
    }
  });
  return res;
};
