import { addValueToFD } from "./add-value-to-fd";

/**
 * Converts the input data to a FormData object and returns it.
 *
 * @param {Object} data - The data to be converted to FormData
 * @return {FormData} The FormData object containing the converted data
 *
 * @example
 * ```
 * convertToFD({ string: 'value', array: ['value1', 'value2'], file: file });
 * ```
 */
export function convertToFD(
  data?: { [key: string]: Parameters<typeof addValueToFD>[2] } | null
): FormData {
  const formData = new FormData();

  if (typeof data !== "object" || data === null) {
    return formData;
  }

  Object.keys(data).forEach((key) => addValueToFD(formData, key, data[key]));

  return formData;
}
