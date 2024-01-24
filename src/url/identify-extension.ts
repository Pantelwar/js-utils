import { identifyFilename } from "./identify-filename";

/**
 * Returns the file extension from a given URL string.
 *
 * @param {string} urlString - The URL string.
 * @return {string} The file extension.
 *
 * @example
 * ```
 * console.log(identifyExtension('https://example.com/image.jpg')); // 'jpg'
 * ```
 */
export function identifyExtension(urlString: string): string {
  const filename = identifyFilename(urlString);

  if (filename.includes(".")) {
    return filename.substring(filename.lastIndexOf(".") + 1);
  }

  return "";
}
