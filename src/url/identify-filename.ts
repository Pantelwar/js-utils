/**
 * Extracts the filename from a given URL string.
 *
 * @param {string} urlString The URL string.
 * @return {string} The extracted filename.
 *
 * @example
 * ```
 * console.log(identifyFilename('https://example.com/image.jpg')); // 'image.jpg'
 * ```
 */
export function identifyFilename(urlString: string): string {
  try {
    const url = new URL(urlString);
    const filename = url.pathname.substring(url.pathname.lastIndexOf("/") + 1);
    return filename;
  } catch (error) {
    return "";
  }
}
