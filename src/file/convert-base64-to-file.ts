/**
 * Converts a base64 string to a File object and saves it with the specified file name.
 *
 * @param {string} base64 - The base64 string to convert.
 * @param {string} fileName - The name to save the file as.
 * @return {Promise<File>} The converted File object.
 */
export async function convertBase64ToFile(
  base64: string,
  fileName: string
): Promise<File> {
  const type = base64.substring("data:".length, base64.indexOf(";"));
  const res = await fetch(base64);
  const buf = await res.arrayBuffer();
  return new File([buf], fileName, { type });
}
