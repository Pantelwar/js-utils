/**
 * Converts a file to a base64 string representation.
 *
 * @param {File} file - The file to be converted.
 * @return {string} The base64 string representation of the file.
 */
export function convertFileToBase64(file: File): string {
  return URL.createObjectURL(file);
}
