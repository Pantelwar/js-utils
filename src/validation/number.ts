/**
 * Checks if the input value is a valid number.
 *
 * @param {string} value - the value to be checked
 * @return {boolean} true if the value is a valid number, otherwise false
 *
 * @example
 * ```
 * console.log(checkNumber('10')); // true
 * console.log(checkNumber('a')); // false
 * ```
 */
export const checkNumber = (value: string) => {
  if (Number.isNaN(+value)) {
    return false;
  }
  return true;
};
